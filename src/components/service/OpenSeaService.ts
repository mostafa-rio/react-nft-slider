import { ServiceInterface, getCollectionResType } from "../../types";

export default class OpenSeaService implements ServiceInterface {
    baseUrl = '';
    getCollectionByContract: getCollectionResType = () => {
        return new Promise(
            resolve => ({nextPage: null, nfts: []})
        )
    }
    
}