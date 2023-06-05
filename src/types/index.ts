import { RaribleItemInCollectionType } from "./Rarible";

export enum DataSource {
  RARIBLE = "Rarible",
  OPENSEA = "OpeanSea",
}
export type loadingDataStatus = "loading" | "failed" | "loaded";
export type SupportedChains = "ETHEREUM" | "POLYGON";

export type Nft = {
  id: string;
};

export type getCollectionResType = (
  collection: string,
  chain: string,
  nextPage: string | null,
  size?: number,
) => Promise<{ nfts: RaribleItemInCollectionType[]; nextPage: string | null }>;

export interface ServiceInterface {
  baseUrl: string;
  getCollectionByContract: getCollectionResType;
}
