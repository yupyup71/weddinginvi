"use client";

import ImageGallery from "react-image-gallery";

export const images = [
  {
    original: "/KakaoTalk.jpg",
    thumbnail: "/KakaoTalk.jpg",
  },
  {
    original: "/KakaoTalk_2.jpg",
    thumbnail: "/KakaoTalk_2.jpg",
  },
];
export function Gallery() {
  return <ImageGallery items={images} />;
}
