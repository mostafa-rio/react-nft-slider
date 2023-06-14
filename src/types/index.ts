import { RaribleItemInCollectionType } from "./Rarible";

export enum DataSource {
  RARIBLE = "Rarible",
  OPENSEA = "OpeanSea",
}
export type loadingDataStatus = "loading" | "failed" | "loaded";
export type SupportedChains = "ETHEREUM" | "POLYGON";
export type ShowNftsBy = "owner" | "collection";
export type nftAttribute = { key: string; value: string };
export type contentFileTypes = "VIDEO" | "AUDIO" | "IMAGE";
export type nftContentType = {
  "@type": contentFileTypes;
  mimeType: string;
  url: string;
};

export type NftType = {
  tokenId: string;
  collection: string;
  content: nftContentType[];
  name: string;
  chain: SupportedChains;
  owner?: string;
  description?: string;
  attributes: nftAttribute[];
  mintedAt: string;
  lastPrice: string;
  originalObject: unknown;
};

export type getCollectionMethodType = (
  collection: string,
  chain: string,
  nextPage: string | null,
  size?: number,
) => Promise<NftListResponseType>;

export type GetNftsByOwnerType = (
  owner: string,
  chain: string,
  nextPage: string | null,
  size?: number,
) => Promise<NftListResponseType>;

export type NftListResponseType = {
  nfts: NftType[];
  nextPage: string | null;
};

export interface ServiceInterface {
  baseUrl: string;
  mapToSupportedChain: (arg: string) => SupportedChains;
  getCollectionByContract: getCollectionMethodType;
  getNftsByOwner: GetNftsByOwnerType;
}
