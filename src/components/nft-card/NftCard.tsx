import React, { FC } from "react";
// import { ArrowRight } from "react-bootstrap-icons";
// import tickMark from "../../assets/tick-mark.png";
import "./NftCard.css";
import ChevronRight from "../icons/ChevronRight";
import Tooltip from "../Tooltip";
import { nftContentType } from "../../types";

export type NftCardProps = {
  title: string;
  content: nftContentType;
};

const imageContent = (src: string, alt: string) => (
  <img src={src} alt={alt} className="nft-card__image" />
);

const videoContent = (src: string, alt: string) => {
  return (
    <div style={{ position: "relative" }}>
      <video
        aria-label={alt}
        src={src}
        loop
        className="nft-card__video"
        playsInline
        controlsList="nodownload"
        width={300}
        height={300}
        controls
        style={{
          objectFit: "cover",
          transition: "opacity .5s",
          opacity: 1,
        }}
      />
    </div>
  );
};

const NftCard: FC<NftCardProps> = ({ content, title, ...restProps }) => {
  const trimedTitle =
    title.length > 25 ? (
      <Tooltip text={title}>{title.slice(0, 25) + "..."}</Tooltip>
    ) : (
      title
    );
  return (
    <div {...restProps} className="m-auto nft-card">
      {/* card header */}
      <div className="nft-card__header d-flex">
        <div className="ms-0">
          <div className="title">{trimedTitle}</div>
          {/* <p className="creator">
            <span>by: </span>
            {creatorAddress}
          </p> */}
        </div>
        <div className="m-auto me-0 profiles"></div>
      </div>

      {/* card content */}
      <div className="nft-card__content d-flex">
        {content["@type"] === "IMAGE" && imageContent(content.url, title)}
        {content["@type"] === "VIDEO" && videoContent(content.url, title)}
        {/* {content["@type"] === "IMAGE" && audioContent(content.url, title)} */}
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
};

export default React.memo(NftCard);
