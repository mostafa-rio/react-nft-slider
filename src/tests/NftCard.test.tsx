import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NftCard from "../components/nft-card/NftCard";
const nftTitle = "my nft title";
const nftImage =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fadvisor%2Finvesting%2Fcryptocurrency%2Fbored-ape-nfts%2F&psig=AOvVaw2ngq1kCUKoBIFbbpyfrIlQ&ust=1685617484086000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPidpc-0n_8CFQAAAAAdAAAAABAE";
const nftVideo =
  "https://ipfs.io/ipfs/QmTUDDb67YxHaERRbkmpYSUGtSbNNwkaKm8rBcZFAau23E";
describe("NftCard component", () => {
  test("should load image and the name of nft", () => {
    render(
      <NftCard
        content={{ "@type": "IMAGE", mimeType: "image/png", url: nftImage }}
        title={nftTitle}
      />,
    );
    const imageEl = screen.getByRole("img");
    screen.getByText(nftTitle);
    expect(imageEl).toHaveAttribute("src", nftImage);
  });

  test("should load Video and the name of nft", () => {
    const { container } = render(
      <NftCard
        content={{ "@type": "VIDEO", mimeType: "video/mp4", url: nftVideo }}
        title={nftTitle}
      />,
    );
    screen.debug(container);
    const videoEl = container.getElementsByTagName("video");
    expect(videoEl.length).toEqual(1);
    expect(videoEl[0]).toHaveAttribute("src", nftVideo);
    screen.getByText(nftTitle);
  });
});
