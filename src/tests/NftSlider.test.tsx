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
  NftListResponseType,
} from "../types";
import { NftSlider } from "../components";
// import Service from "../service";
import userEvent from "@testing-library/user-event";
import React from "react";
import ApiService from "../service";
import { act } from "react-dom/test-utils";
const nextPageLink = "next-page-link";
const ownerAddress = "0x670fd103b1a08628e9557cd66b8790";
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
const res: NftListResponseType = {
  nfts: [],
  nextPage: nextPageLink,
};

const nftsByOwnerRes: NftListResponseType = {
  nfts: [],
  nextPage: nextPageLink,
};

for (let i = 0; i < 15; i++) {
  res.nfts.push(nft);
  nftsByOwnerRes.nfts.push({ ...nft, name: "nft by owner" });
}
const byOwnerMock = jest.fn(
  (owner: string, chain: string, nextPage: string | null, size?: number) =>
    Promise.resolve(nftsByOwnerRes),
);
const byCollectionMock = jest.fn(
  (collection: string, chain: string, nextPage: string | null, size?: number) =>
    Promise.resolve(res),
);
const mockServiceplementation = (
  dataSource: DataSource,
  apiKey: string | undefined,
): ServiceInterface => {
  return {
    baseUrl: "",
    mapToSupportedChain: () => "ETHEREUM",
    getNftsByOwner: byOwnerMock,
    getCollectionByContract: byCollectionMock,
  };
};

describe("NftSlider Component", () => {
  test("Should render NftSlider by default with a collection address", async () => {
    jest
      .spyOn(ApiService, "createService")
      .mockImplementation(mockServiceplementation);
    await act(async () => {
      await render(<NftSlider collection={collectionAddress} />);
    });
    expect(screen.getAllByText(res.nfts[0].name).length).toEqual(
      res.nfts.length,
    );
  });

  test("Should render get nfts by owner", async () => {
    jest
      .spyOn(ApiService, "createService")
      .mockImplementation(mockServiceplementation);
    await act(async () => {
      await render(<NftSlider showNftsBy="owner" owner={ownerAddress} />);
    });
    screen.getAllByText(nftsByOwnerRes.nfts[0].name);
  });

  test("Should load more when next page exsits for owner nfts", async () => {
    jest
      .spyOn(ApiService, "createService")
      .mockImplementation(mockServiceplementation);
    await act(async () => {
      render(<NftSlider showNftsBy="owner" owner={ownerAddress} />);
    });
    await act(async () => {
      const element = screen.getByTestId("slider-cards");
      userEvent.click(element);
      userEvent.click(element);
      userEvent.click(element);
      userEvent.click(element);
      userEvent.click(element);
      userEvent.click(element);
    });
    expect(byOwnerMock).lastCalledWith(
      ownerAddress,
      "ETHEREUM",
      nextPageLink,
      25,
    );
  });

  test("Should load more when next page exsits for collection nfts", async () => {
    jest
      .spyOn(ApiService, "createService")
      .mockImplementation(mockServiceplementation);
    await act(async () => {
      render(<NftSlider collection={collectionAddress} />);
    });
    await act(async () => {
      const element = screen.getByTestId("slider-cards");
      userEvent.click(element);
      userEvent.click(element);
      userEvent.click(element);
      userEvent.click(element);
      userEvent.click(element);
      userEvent.click(element);
    });
    expect(byCollectionMock).lastCalledWith(
      collectionAddress,
      "ETHEREUM",
      nextPageLink,
      25,
    );
  });
});
