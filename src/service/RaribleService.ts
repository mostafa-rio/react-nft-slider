import {
  NftType,
  SupportedChains,
  ServiceInterface,
  getCollectionMethodType,
  nftContentType,
  GetNftsByOwnerType,
} from "../types";
import { RaribleItemInCollectionType } from "../types/Rarible";

export default class RaribleService implements ServiceInterface {
  baseUrl = "https://api.rarible.org/v0.1";

  getNftsByOwner: GetNftsByOwnerType = async (owner, chain, nextPage, size) => {
    try {
      const response = await fetch(
        `${this.baseUrl}/items/byOwner?owner=${chain}:${owner}` +
          (nextPage ? `&continuation=${nextPage}` : "") +
          (size ? `&size=${size}` : ""),
        {
          method: "GET",
        },
      );
      const data = await response.json();
      const nfts = data.items.map((item: RaribleItemInCollectionType) =>
        this.mapRaribleItem(item),
      );

      return { nfts, nextPage: data.continuation || null };
    } catch (err) {
      console.log(err);
      throw new Error("Fetching data failed");
    }
  };

  getCollectionByContract: getCollectionMethodType = async (
    collection,
    chain,
    nextPage,
    size,
  ) => {
    try {
      const response = await fetch(
        `${this.baseUrl}/items/byCollection?collection=${chain}:${collection}` +
          (nextPage ? `&continuation=${nextPage}` : "") +
          (size ? `&size=${size}` : ""),
        {
          method: "GET",
        },
      );
      const data = await response.json();
      const nfts = data.items.map((item: RaribleItemInCollectionType) =>
        this.mapRaribleItem(item),
      );

      return { nfts, nextPage: data.continuation };
    } catch (err) {
      console.log(err);
      throw new Error("Fetching data failed");
    }
  };

  mapToSupportedChain(chain: string): SupportedChains {
    if (chain === "matic" || chain === "POLYGON") return "POLYGON";
    else return "ETHEREUM";
  }

  private mapRaribleItem(item: RaribleItemInCollectionType): NftType {
    return {
      tokenId: item.tokenId,
      collection: item.collection,
      content: <nftContentType[]>item.meta.content,
      name: item.meta.name,
      chain: this.mapToSupportedChain(item.blockchain),
      owner: "string",
      description: "string",
      attributes: [],
      mintedAt: "string",
      lastPrice: "string",
      originalObject: item,
    };
  }
}
