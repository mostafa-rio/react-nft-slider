import {
  ServiceInterface,
  SupportedChains,
  getCollectionMethodType,
} from "../types";

export default class OpenSeaService implements ServiceInterface {
  baseUrl = "";
  apiKey: string | undefined;

  constructor(_apikey: string | undefined) {
    if (_apikey) this.apiKey = _apikey;
  }

  mapToSupportedChain(chain: string): SupportedChains {
    if (chain) return "ETHEREUM";
    return "ETHEREUM";
  }

  getNftsByOwner: getCollectionMethodType = () => {
    return new Promise((resolve) => ({ nextPage: null, nfts: [] }));
  };
  getCollectionByContract: getCollectionMethodType = () => {
    return new Promise((resolve) => ({ nextPage: null, nfts: [] }));
  };
}
