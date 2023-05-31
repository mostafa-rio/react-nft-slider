import React, { useState } from 'react';

// import { shouldRenderAudioTag, shouldRenderVideoTag } from "../utils/media";
// import { mergeRefs } from "../utils/react";
// import {
//   CarbonDocumentAudio,
//   CarbonDocumentUnknown,
//   CarbonPauseFilled,
//   CarbonPlayFilledAlt,
// } from "./Icons";
// import { useQuery } from "@tanstack/react-query";
// import {
//   resolveIpfsUri,
//   resolveMimeType,
//   useStorage,
// } from "@thirdweb-dev/react-core";
// import React, {
//   ReactNode,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
//   lazy,
//   Suspense,
// } from "react";

// const ModelViewer = lazy(() => import("./ModelViewer"));

// export interface SharedMediaProps {
//   className?: string;
//   style?: React.CSSProperties;
//   width?: HTMLIFrameElement["width"];
//   height?: HTMLIFrameElement["height"];
//   /**
//    * Require user interaction to play the media. (default false)
//    */
//   requireInteraction?: boolean;
//   /**
//    * Show the media controls (where applicable) (default false)
//    */
//   controls?: HTMLVideoElement["controls"];

//   children?: ReactNode;

//   mimeType?: string;
// }

// /**
//  *
//  * The props for the {@link MediaRenderer} component.
//  * @public
//  */
// export interface MediaRendererProps extends SharedMediaProps {
//   /**
//    * The media source uri.
//    */
//   src?: string | null;
//   /**
//    * The alt text for the media.
//    */
//   alt?: string;
//   /**
//    * The media poster image uri. (if applicable)
//    */
//   poster?: string | null;
//   /**
//    * The IPFS gateway URL to use
//    */
//   gatewayUrl?: string;
//   width?: string;
//   height?: string;
// }
 

// const VideoPlayer = React.forwardRef<HTMLVideoElement, MediaRendererProps>(
//   (
//     {
//       src,
//       alt,
//       poster,
//       requireInteraction,
//       style,
//       width,
//       height,
//       controls,
//       ...restProps
//     },
//     ref,
//   ) => {
    

//     return  <video controls style={{}} className={''}>
//               <source src={src ?? undefined} type="video/mp4" />
//               {/* Add more <source> elements for different video formats if needed */}
//               Sorry, your browser doesn't support embedded videos.
//           </video>
//   },
// );

// VideoPlayer.displayName = "VideoPlayer";

// const AudioPlayer = React.forwardRef<HTMLAudioElement, MediaRendererProps>(
//   ({ src, alt, poster, style, height, width, ...restProps }, ref) => {
    

//     return (
//        <audio controls style={{}} className={''}>
//           <source src={src ?? undefined} type="audio/mpeg" />
//           {/* Add more <source> elements for different audio formats if needed */}
//           Sorry, your browser doesn't support embedded audio.
//         </audio>
//     );
//   },
// );

// AudioPlayer.displayName = "AudioPlayer";

// const IframePlayer = React.forwardRef<HTMLIFrameElement, MediaRendererProps>(
//   ({ src, alt, poster, requireInteraction, style, ...restProps }, ref) => {
//     const [playing, setPlaying] = useState(!requireInteraction);

//     return (
//         <iframe
//           src={src ?? undefined}
//           ref={ref}
//           style={{
//             objectFit: "contain",
//             zIndex: 1,
//             height: "100%",
//             width: "100%",
//             transition: "opacity .5s",
//             opacity: !poster ? 1 : playing ? 1 : 0,
//           }}
//           sandbox="allow-scripts"
//           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//         />
//     );
//   },
// );

// IframePlayer.displayName = "IframePlayer";

// const ExternalLink = React.forwardRef<HTMLAnchorElement, MediaRendererProps>(
//   ({ src, alt, style, ...restProps }, ref) => {
//     return (
//       <div style={{ position: "relative", ...style }} {...restProps}>
//         <div
//           style={{
//             width: "100%",
//             height: "100%",
//             display: "grid",
//             placeItems: "center",
//             backgroundColor: "#fff",
//             color: "rgb(138, 147, 155)",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "8px",
//               alignItems: "center",
//               flexWrap: "nowrap",
//             }}
//           >
//             <CarbonDocumentUnknown
//               style={{
//                 maxWidth: "128px",
//                 minWidth: "48px",
//                 width: "50%",
//                 aspectRatio: "1",
//               }}
//             />
//             <a
//               rel="noopener noreferrer"
//               style={{
//                 textDecoration: "underline",
//                 color: "rgb(138, 147, 155)",
//               }}
//               href={src ?? undefined}
//               target="_blank"
//               ref={ref as unknown as React.LegacyRef<HTMLAnchorElement>}
//             >
//               {alt || "File"}
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   },
// );

// ExternalLink.displayName = "ExternalLink";


// export const MediaRenderer = React.forwardRef<
//   HTMLMediaElement,
//   MediaRendererProps
// >(
//   (
//     {
//       src,
//       poster,
//       alt,
//       gatewayUrl,
//       requireInteraction = false,
//       width = "300px",
//       height = "300px",
//       style,
//       mimeType,
//       ...restProps
//     },
//     ref,
//   ) => {
//     const mergedStyle: React.CSSProperties = {
//       objectFit: "contain",
//       width,
//       height,
//       ...style,
//     };
//     const videoOrImageSrc = useResolvedMediaType(
//       src ?? undefined,
//       mimeType,
//       gatewayUrl,
//     );
//     const possiblePosterSrc = useResolvedMediaType(
//       poster ?? undefined,
//       undefined,
//       gatewayUrl,
//     );

//     if (!videoOrImageSrc.mimeType) {
//       return (
//         <img
//           style={mergedStyle}
//           {...restProps}
//           ref={ref as unknown as React.LegacyRef<HTMLImageElement>}
//           alt={alt}
//         />
//       );
//     } else if (videoOrImageSrc.mimeType === "text/html") {
//       return (
//         <IframePlayer
//           style={mergedStyle}
//           src={videoOrImageSrc.url}
//           poster={possiblePosterSrc.url}
//           requireInteraction={requireInteraction}
//           {...restProps}
//         />
//       );
//     } else if (videoOrImageSrc.mimeType.startsWith("model")) {
//       return (
//         <Suspense
//           fallback={
//             poster ? (
//               <img
//                 style={mergedStyle}
//                 src={poster}
//                 alt={alt}
//                 ref={ref as unknown as React.LegacyRef<HTMLImageElement>}
//                 {...restProps}
//               />
//             ) : null
//           }
//         >
//           <ModelViewer
//             style={mergedStyle}
//             src={videoOrImageSrc.url || ""}
//             poster={poster}
//             alt={alt}
//             {...restProps}
//           />
//         </Suspense>
//       );
//     } else if (shouldRenderVideoTag(videoOrImageSrc.mimeType)) {
//       return (
//         <VideoPlayer
//           style={mergedStyle}
//           src={videoOrImageSrc.url}
//           poster={possiblePosterSrc.url}
//           requireInteraction={requireInteraction}
//           {...restProps}
//         />
//       );
//     } else if (shouldRenderAudioTag(videoOrImageSrc.mimeType)) {
//       return (
//         <AudioPlayer
//           style={mergedStyle}
//           src={videoOrImageSrc.url}
//           poster={possiblePosterSrc.url}
//           requireInteraction={requireInteraction}
//           {...restProps}
//         />
//       );
//     } else if (videoOrImageSrc.mimeType.startsWith("image/")) {
//       return (
//         <img
//           style={mergedStyle}
//           src={videoOrImageSrc.url}
//           alt={alt}
//           ref={ref as unknown as React.LegacyRef<HTMLImageElement>}
//           {...restProps}
//         />
//       );
//     }
//     return (
//       <ExternalLink
//         style={mergedStyle}
//         src={videoOrImageSrc.url}
//         alt={alt}
//         ref={ref as unknown as React.Ref<HTMLAnchorElement>}
//         {...restProps}
//       />
//     );
//   },
// );

// MediaRenderer.displayName = "MediaRenderer";

// export interface MediaType {
//   url?: string;
//   mimeType?: string;
// }

// export function useResolvedMediaType(
//   uri?: string,
//   mimeType?: string,
//   gatewayUrl?: string,
// ) {
//   const storage = useStorage();

//   const resolvedUrl = useMemo(
//     () =>
//       resolveIpfsUri(
//         uri,
//         gatewayUrl
//           ? { gatewayUrl }
//           : storage
//           ? { gatewayUrl: storage.gatewayUrls["ipfs://"][0] }
//           : undefined,
//       ),
//     [uri, storage, gatewayUrl],
//   );
//   const resolvedMimType = useQuery(
//     ["mime-type", resolvedUrl],
//     () => resolveMimeType(resolvedUrl),
//     {
//       enabled: !!resolvedUrl && !mimeType,
//       initialData: mimeType,
//     },
//   );

//   return {
//     url: resolvedUrl,
//     mimeType: resolvedMimType.data,
//   };
// }


 
type Props = {}

const url = 'https://openseauserdata.com/files/1981624501133b44613e9fc1fc952f46.scg'

export default function NFTMedia({}: Props) {
  return (
    // <div>HI: {url.substring(url.lastIndexOf('/')+1)}</div>
    <Slider>
      <div>Card 1</div>
      <div>Card 2</div>
      <div>Card 3</div>
      {/* Add more cards as needed */}
    </Slider>
  )
}

const Slider = ({ children }: {children: any}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <div className="slider__cards">
        {children.map((child: any, index: any) => (
          <div
            key={index}
            className={`slider__card ${index === currentIndex ? 'active' : ''}`}
          >
            {child}
          </div>
        ))}
      </div>
      <button className="slider__arrow left" onClick={goToPrevSlide}>
        &lt;
      </button>
      <button className="slider__arrow right" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

// export default Slider;