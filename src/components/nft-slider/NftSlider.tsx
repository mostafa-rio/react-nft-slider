import React, {
  Children,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import Slider from "../slider/Slider";
import NftCard, { NftCardProps } from "../nft-card/NftCard";
import {
  DataSource,
  NftType,
  SupportedChains,
  ShowNftsBy,
  loadingDataStatus,
} from "../../types";
import ApiService from "../../service";

type Props = {
  dataSource?: DataSource.RARIBLE; // opensea in next version
  size?: number; // number of items to load in each request
  collection?: string;
  owner?: string;
  showNftsBy?: ShowNftsBy;
  chain?: SupportedChains;
  loadingElement?: JSX.Element | undefined;
};

const NftSlider: React.FC<Props> = ({
  dataSource = DataSource.RARIBLE,
  size = 25,
  collection,
  showNftsBy = "collection",
  owner,
  chain = "ETHEREUM",
  loadingElement,
}) => {
  const [nfts, setNfts] = useState<NftCardProps[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [loadingStatus, setLoadingStatus] =
    useState<loadingDataStatus>("loaded");

  const fetchDataByCollection = async () => {
    console.log(nextPage, chain);
    setLoadingStatus("loading");
    if (!collection)
      throw new Error(
        "By setting 'showNftsBy' to 'collection', collection prop must be set!",
      );
    try {
      const service = ApiService.createService(dataSource);
      const res = await service.getCollectionByContract(
        collection,
        chain,
        nextPage,
        size,
      );
      const mapedNfts: NftCardProps[] = res.nfts.map((item) => ({
        content: item.content[0],
        title: item.name,
      }));
      console.log(nextPage);
      setNfts(nextPage ? [...nfts, ...mapedNfts] : mapedNfts);
      setNextPage(res.nextPage);
      setLoadingStatus("loaded");
    } catch (error) {
      setLoadingStatus("failed");
      throw new Error("Failed fetching nft data!");
    }
  };

  const fetchDataByOwner = async () => {
    setLoadingStatus("loading");
    if (!owner)
      throw new Error(
        "By setting 'showNftsBy' to 'owner', owner prop must be set!",
      );

    try {
      const service = ApiService.createService(dataSource);
      const res = await service.getNftsByOwner(owner, chain, nextPage, size);
      const mapedNfts: NftCardProps[] = res.nfts.map((item) => ({
        content: item.content[0],
        title: item.name,
      }));
      setNfts(nextPage ? [...nfts, ...mapedNfts] : mapedNfts);
      setNextPage(res.nextPage);
      setLoadingStatus("loaded");
    } catch (error) {
      setLoadingStatus("failed");
      throw new Error("Failed fetching nft data!");
    }
  };

  const fetchData = (reset: boolean = false) => {
    if (reset) {
      setNfts([]);
      setNextPage(null);
    }
    if (showNftsBy === "collection") fetchDataByCollection();
    else if (showNftsBy === "owner") fetchDataByOwner();
    else throw new Error("showNftsBy must be set!");
  };

  const loadMore = () => {
    if (nextPage) fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [collection, owner]);

  useEffect(() => {
    fetchData(true);
  }, [chain, showNftsBy]);

  useEffect(() => {
    if (size < 20 || size > 150)
      throw new Error("Size must be between 20 and 150!");
  }, [size]);

  return (
    <Slider
      loadingElement={loadingElement}
      loadingStatus={loadingStatus}
      onScrollEnd={loadMore}
    >
      {nfts.map((item: NftCardProps, index: number) => (
        <NftCard key={index} {...item} />
      ))}
    </Slider>
  );
};

export default NftSlider;
