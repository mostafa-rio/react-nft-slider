import { ServiceInterface, getCollectionResType } from "../types";

export default class RaribleService implements ServiceInterface {
  baseUrl = "https://api.rarible.org/v0.1";

  getCollectionByContract: getCollectionResType = async (
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
      return { nfts: data.items, nextPage: data.continuation };
    } catch (err) {
      console.log(err);
      throw new Error("Fetching data failed");
    }
  };
}
