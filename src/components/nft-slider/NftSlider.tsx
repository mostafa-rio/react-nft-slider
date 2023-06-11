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
import Service from "../../service";
import {
  RaribleItemInCollectionType,
  RaribleSupportedChains,
} from "../../types/Rarible";
const tnfts: NftCardProps[] = [
  {
    title: "nft title here",
    image:
      "https://lh3.googleusercontent.com/dmEAwcJEiyhliQCaUSwW9fV0_DhTsn6maTRrDUj-YTU0ekSyJbOfUEFp91cyR3nAVAlIZirc7-d5U4AuxmGQKL9yZ22Hl8E4Bg=s400",
  },
  {
    title: "nft title here",
    image:
      "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
  },
  {
    title: "nft title here",
    image:
      "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
  },
  {
    title: "nft title here",
    image:
      "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
  },
  {
    title: "nft title here",
    image:
      "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
  },
  {
    title: "nft title here",
    image:
      "https://lh3.googleusercontent.com/QOvp4TyxNIUYYGNzZ6UfKU_XkAsc8MoG-qQvIaKR-Z1byacK_1ZSimda1JuNxWAQY3RSTn0qojRklVYR09YU7l7DotRfaQHG8kk=s400",
  },
  {
    title: "nft title here",
    image:
      "https://assets.raribleuserdata.com/prod/v1/image/t_image_preview/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1TZThISmdaRUo3amNkOXhxMnE4S2hVakFDUkFaRUVjUkJXNFNacXN3ZTJocg==",
  },
  {
    title: "nft title here",
    image:
      "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
  },
  {
    title: "nft title here",
    image:
      "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
  },
  {
    title: "nft title here",
    image:
      "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
  },
  {
    title: "nft title here",
    image:
      "https://lh3.googleusercontent.com/jHir-ineLKs05xtFpnyEkvmaYu6wmiIP3OmCL23-86gvWrtEDyMe0XqXiToN_vgzMnSJB8mYz6kAqwvImThlpEeBhzxr6nTN8eA=s400",
  },
];
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
      const source = Service.createDataSourceInstance(dataSource);
      const res = await source.getCollectionByContract(
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
