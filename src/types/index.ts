import { RaribleItemInCollectionType } from "./Rarible"

export enum DataSource  {
    RARIBLE = 'Rarible',
    OPENSEA = 'OpeanSea'
}

export type Nft = {
    id: string
}

export type getCollectionResType = (collection: string, chain: string, nextPage: string | null)  => Promise<{ nfts: RaribleItemInCollectionType[], nextPage: string | null }>

export interface ServiceInterface {
    baseUrl: string,
    getCollectionByContract: getCollectionResType
}