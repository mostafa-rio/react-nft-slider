import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NftCard from "../components/nft-card/NftCard";
const nftTitle = "my nft title";
const nftImage =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fadvisor%2Finvesting%2Fcryptocurrency%2Fbored-ape-nfts%2F&psig=AOvVaw2ngq1kCUKoBIFbbpyfrIlQ&ust=1685617484086000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPidpc-0n_8CFQAAAAAdAAAAABAE";

describe("NftCard component", () => {
  render(<NftCard image={nftImage} title={nftTitle} />);

  test("should load image and name of nft", () => {
    // expect(screen.getByRole("img").getAttribute("src")).toEqual(nftImage);
    // expect(screen.getByRole("paragraph")).toEqual(nftImage);
  });
});
