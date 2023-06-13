import {
  fireEvent,
  logRoles,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  DataSource,
  NftType,
  ServiceInterface,
  getCollectionResType,
} from "../types";
import { NftSlider } from "../components";
// import Service from "../service";
import userEvent from "@testing-library/user-event";
import React from "react";
import ApiService from "../service";
import { act } from "react-dom/test-utils";
const collectionAddress: string = "0x670fd103b1a08628e9557cd66b87ded841115190";
const nft: NftType = {
  tokenId: "5173",
  content: [
    {
      "@type": "IMAGE",
      mimeType: "image/png",
      url: "https://lh3.googleusercontent.com/ccPJX2A89zLPkEoQ6Rr0-AHUdaFZ12KMBk1LAx1QueqcT571_nQ-wtOI3BmffPIP1DHPZw-e7aR8r6NH9ryoF6wgn1pzZdCzmvs=s1000",
    },
  ],
  name: "NFT NAME",
  chain: "ETHEREUM",
  collection: "0x670fd103b1a08628e9557cd66b87ded841115190",
  owner: "0x670fd103b1a08628e9557c",
  description: "description about nft item",
  attributes: [{ key: "head", value: "big" }],
  mintedAt: "2023-06-07T02:07:45Z",
  lastPrice: "12.2",
  originalObject: {},
};
const res: getCollectionResType = {
  nfts: [],
  nextPage: null,
};
for (let i = 0; i < 15; i++) {
  res.nfts.push(nft);
}
const mockServiceplementation = (
  dataSource: DataSource,
  apiKey: string | undefined,
): ServiceInterface => {
  return {
    baseUrl: "",
    mapToSupportedChain: () => "ETHEREUM",
    getCollectionByContract: (
      collection: string,
      chain: string,
      nextPage: string | null,
      size?: number,
    ) => Promise.resolve(res),
  };
};

describe("NftSlider Component", () => {
  test("Should render NftSlider", async () => {
    jest
      .spyOn(ApiService, "createService")
      .mockImplementation(mockServiceplementation);
    await act(async () => {
      await render(<NftSlider collection={collectionAddress} />);
    });
    await waitFor(() => {
      expect(screen.getAllByText(res.nfts[0].name).length).toEqual(
        res.nfts.length,
      );
    });
  });

  // test("Should load more data on scroll reaches to the ends", async () => {
  //   const getCollectionFn = jest.fn(
  //     (
  //       collection: string,
  //       chain: string,
  //       nextPage: string | null,
  //       size?: number,
  //     ) =>
  //       Promise.resolve({
  //         nfts: [nft, nft, nft, nft],
  //         nextPage: "nextpagelink",
  //       }),
  //   );
  //   const fn = (
  //     dataSource: DataSource,
  //     apiKey: string | undefined,
  //   ): ServiceInterface => {
  //     return {
  //       baseUrl: "",
  //       mapToSupportedChain: () => "ETHEREUM",
  //       getCollectionByContract: getCollectionFn,
  //     };
  //   };

  //   jest.spyOn(ApiService, "createService").mockImplementation(fn);

  //   await act(async () => {
  //     await render(
  //       <NftSlider chain="ETHEREUM" collection={collectionAddress} />,
  //     );
  //   });
  //   await act(() => {
  //     const right = screen.getByTestId("control-right");
  //     userEvent.click(right);
  //   });

  //   expect(screen.getAllByAltText(nft.name).length).toEqual(8);
  //   // expect(getCollectionFn).toHaveBeenCalledWith(
  //   //   collectionAddress,
  //   //   "ETHEREUM",
  //   //   "nextpagelink",
  //   //   25,
  //   // );
  // });
});
