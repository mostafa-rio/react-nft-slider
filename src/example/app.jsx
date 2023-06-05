import React from "react";
// import { NftSlider } from "react-nft-slider";
import { NftSlider } from "../../dist/esm/index";

function App() {
  return (
    <NftSlider
      chain="SOLANA"
      collection="6Rk3N5qRR2tZSwhCXZ5MsBJTRkhioYH1bSc4g5qBf2rh"
    />
  );
}
export default App;
