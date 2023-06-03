import { DataSource, ServiceInterface } from "../types";
import OpenSeaService from "./OpenSeaService"; 
import RaribleService from "./RaribleService";

export default class Service {
    static createDataSourceInstance(dataSource: DataSource, apiKey?: string): ServiceInterface {
        switch (dataSource) {
            case DataSource.RARIBLE:
                return new RaribleService();
            case DataSource.OPENSEA:
                return new OpenSeaService(apiKey);
            default:
                throw new Error('Invalid data source type.');
        }
    }
}