import { logRoles, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NftType, ServiceInterface, getCollectionResType } from "../types";
import { NftSlider } from "../components";
// import Service from "../service";
import React from "react";
// const collectionAddress: string = "0x670fd103b1a08628e9557cd66b87ded841115190";
// const nft: NftType = {
//   tokenId: "5173",
//   content: [
//     {
//       "@type": "IMAGE",
//       mimeType: "image/png",
//       url: "https://lh3.googleusercontent.com/ccPJX2A89zLPkEoQ6Rr0-AHUdaFZ12KMBk1LAx1QueqcT571_nQ-wtOI3BmffPIP1DHPZw-e7aR8r6NH9ryoF6wgn1pzZdCzmvs=s1000",
//     },
//   ],
//   name: "NFT NAME",
//   chain: "ETHEREUM",
//   collection: "0x670fd103b1a08628e9557cd66b87ded841115190",
//   owner: "0x670fd103b1a08628e9557c",
//   description: "description about nft item",
//   attributes: [{ key: "head", value: "big" }],
//   mintedAt: "2023-06-07T02:07:45Z",
//   lastPrice: "12.2",
//   originalObject: {},
// };
// const res: getCollectionResType = {
//   nfts: [],
//   nextPage: null,
// };
// for (let i = 0; i < 15; i++) {
//   res.nfts.push(nft);
// }
// jest.mock("../service", () => {
//   createDataSourceInstance: jest.fn((arg) => ({
//     getCollectionByContract: (
//       collection: string,
//       chain: string,
//       nextPage: string | null,
//       size?: number,
//     ) => Promise.resolve(res),
//   }));
// });

describe("NftSlider Component", () => {
  // const mockServiceInstance = {
  //   getCollectionByContract: (
  //     collection: string,
  //     chain: string,
  //     nextPage: string | null,
  //     size?: number,
  //   ) => Promise.resolve(res),
  // };

  // mockService.createDataSourceInstance = jest
  //   .fn()
  //   .mockReturnValue(mockServiceInstance);
  // Service.createInstance

  //act

  //assert
  test("should render NftSlider", async () => {
    // const rend = render(
    //   <NftSlider collection="0x670fd103b1a08628e9557cd66b87ded841115190" />,
    // );
    // screen.logTestingPlaygroundURL();
    // expect(Service.createDataSourceInstance).toHaveBeenCalled();
  });
});
