"use client";

import ImageGallery from "react-image-gallery";

export const images = [
  {
    original: "/KakaoTalk.jpg",
    thumbnail: "/KakaoTalk.jpg",
    originalHeight: "500",
    thumbnailWidth: "100",
  },
  {
    original: "/KakaoTalk_2.jpg",
    thumbnail: "/KakaoTalk_2.jpg",
    originalHeight: "500",
    thumbnailWidth: "100",
  },
];
export function Gallery() {
  return (
    <div style={{ height: 20 }}>
      <ImageGallery items={images} />
    </div>
  );
}
