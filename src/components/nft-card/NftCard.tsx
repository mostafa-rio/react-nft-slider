import React from "react";
// import { ArrowRight } from "react-bootstrap-icons";
// import tickMark from "../../assets/tick-mark.png";
import "./NftCard.css";
import ChevronRight from "../icons/ChevronRight";

export type NftCardProps = {
  title: string;
  image: string;
};

function NftCard({ image, title, ...restProps }: NftCardProps) {
  return (
    <div {...restProps} className="m-auto nft-card">
      {/* card header */}
      <div className="nft-card__header d-flex">
        <div className="ms-0">
          <h3 className="title">{title}</h3>
          {/* <p className="creator">
            <span>by: </span>
            {creatorAddress}
          </p> */}
        </div>
        <div className="m-auto me-0 profiles">
        </div>
      </div>

      {/* card content */}
      <div
        className="nft-card__content d-flex"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      >
        {/* <div className="mt-auto content-mint-wrapper"> */}
        {/* <div
          className="content-mint 
            mt-auto
                w-100 d-flex justify-content-between"
        > */}
          {/* price */}
          {/* <div className="ml-0">
            <div className="nft-card__content_badge">Latest Bid</div>
            <div className="nft-card__content_price">{bid}4ETH</div>
          </div> */}
        {/* </div> */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default NftCard;
