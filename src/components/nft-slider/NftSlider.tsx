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
  loadingDataStatus,
} from "../../types";
import ApiService from "../../service";

enum GetNftsBy {
  owner = "owner",
  collection = "collection",
}

type Props = {
  dataSource?: DataSource.RARIBLE; // opensea in next version
  size?: number; // number of items to load in each request
  collection: string;
  chain?: SupportedChains;
  loadingElement?: JSX.Element | undefined;
};

const NftSlider: React.FC<Props> = ({
  collection,
  chain = "ETHEREUM",
  dataSource = DataSource.RARIBLE,
  size = 25,
  loadingElement,
}) => {
  const [nfts, setNfts] = useState<NftCardProps[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [loadingStatus, setLoadingStatus] =
    useState<loadingDataStatus>("loaded");

  const fetchDataByCollection = async () => {
    setLoadingStatus("loading");
    try {
      const service = ApiService.createService(dataSource);
      const res = await service.getCollectionByContract(
        collection,
        chain,
        nextPage,
        size,
      );
      setNextPage(res.nextPage);
      const mapedNfts: NftCardProps[] = res.nfts.map((item) => ({
        image: item.content[0].url,
        title: item.name,
      }));
      setNfts(() => [...nfts, ...mapedNfts]);
      setLoadingStatus("loaded");
    } catch (error) {
      setLoadingStatus("failed");
      throw new Error("Failed fetching nft data!");
    }
  };

  const fetchData = async () => {
    if (collection) return await fetchDataByCollection();
    else throw new Error("Collection address prop must be set!");
  };

  useEffect(() => {
    fetchData();
  }, [collection, chain]);

  useEffect(() => {
    if (size < 20 || size > 150)
      throw new Error("Size must be between 20 and 150!");
  }, []);

  return (
    <Slider
      loadingElement={loadingElement}
      loadingStatus={loadingStatus}
      onScrollEnd={fetchData}
    >
      {nfts.map((item: NftCardProps, index: number) => (
        <NftCard key={index} {...item} />
      ))}
    </Slider>
  );
};

export default NftSlider;
