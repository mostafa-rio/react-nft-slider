import React, { Children, useEffect, useState } from "react";
import Slider from "../slider/Slider";
import NftCard, { NftCardProps } from "../nft-card/NftCard";
import { DataSource } from "../../types";
import Service from "../../service";
import { RaribleItemInCollectionType } from "../../types/Rarible";

enum GetNftsBy {
  owner = "owner",
  collection = "collection",
}

type Props = {
  dataSource?: DataSource.RARIBLE; // opensea in next version
  size?: number; // number of items to load in each request
  // apiKey?: string,
  // getNftsBy: keyof typeof GetNftsBy,
  collection: string;
  // owner?: string,
  chain: "ETHEREUM" | "POLYGON";
  // onlyShowSlider?: boolean,// alows users to fetch nfts on thier own and just make slider out of it
  // nfts?: NftCardProps[] // nfts fetched by user and ready for slider
  // children?: React.ReactNode
};

const NftSlider = ({
  dataSource = DataSource.RARIBLE,
  size = 25,
  // apiKey,
  // getNftsBy = 'collection',
  collection,
  chain = "ETHEREUM",
}: Props) => {
  const [nfts, setNfts] = useState<NftCardProps[]>([]);

  const fetchDataByCollection = async () => {
    const source = await Service.createDataSourceInstance(dataSource);
    const res = await source.getCollectionByContract(collection, chain, null);
    const mapedNfts: NftCardProps[] = res.nfts.map((item) => ({
      image: item.meta.content[0].url,
      title: item.meta.name,
    }));
    setNfts(mapedNfts);
  };

  // const fetchDataByOwner = () => {}

  useEffect(() => {
    if (collection) fetchDataByCollection();
    else throw new Error("Collection address prop must be set!");
  }, [collection]);

  return (
    <Slider>
      {nfts.map((item: NftCardProps, index: number) => (
        <NftCard key={index} {...item} />
      ))}
    </Slider>
  );
};

export default NftSlider;
