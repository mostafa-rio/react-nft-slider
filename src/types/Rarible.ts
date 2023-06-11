export enum RaribleSupportedChains {
  ethereum = "ETHEREUM",
  polygon = "POLYGON",
}
// from https://api.rarible.org/v0.1/doc#tag/item-controller/operation/getItemsByCollection
// Each item in a collection
export type RaribleCollection = {
  total?: number;
  continuation?: string | null;
  items: RaribleItemInCollectionType[];
};
export interface RaribleItemInCollectionType {
  id: string;
  blockchain: string;
  collection: string;
  contract: string;
  tokenId: string;
  creators: Creator[];
  lazySupply: string;
  pending: any[];
  mintedAt: Date | string;
  lastUpdatedAt: Date | string;
  supply: string;
  meta: Meta;
  deleted: boolean;
  originOrders: any[];
  ammOrders: AmmOrders;
  auctions: any[];
  totalStock: string;
  sellers: number;
  lastSale: LastSale;
  suspicious: boolean;
}

export interface AmmOrders {
  ids: any[];
}

export interface Creator {
  account: string;
  value: number;
}

export interface LastSale {
  date: Date;
  seller: string;
  buyer: string;
  value: string;
  currency: Currency;
  price: string;
}

export interface Currency {
  "@type": string;
  blockchain: string;
}

export interface Meta {
  name: string;
  tags: any[];
  genres: any[];
  description?: string;
  createdAt?: string;
  originalMetaUri: string;
  attributes: Attribute[];
  content: Content[];
  restrictions: any[];
}

export interface Attribute {
  key: string;
  value: string;
}

export interface Content {
  "@type": string;
  url: string;
  representation: string;
  mimeType: string;
  size: number;
  width: number;
  height: number;
}
