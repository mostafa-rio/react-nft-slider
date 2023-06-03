import { ServiceInterface, getCollectionResType } from "../types";

export default class OpenSeaService implements ServiceInterface {
    baseUrl = '';
    apiKey: string | undefined;
    
    constructor(_apikey: string | undefined) {
        if(_apikey)
            this.apiKey = _apikey;
    }

    getCollectionByContract: getCollectionResType = () => {
        return new Promise(
            resolve => ({nextPage: null, nfts: []})
        )
    }
    
}