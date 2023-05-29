'use client';

import ImageGallery from "react-image-gallery";

export
 const images = [
  {
   original: '/KakaoTalk.jpg',
   thumbnail: '/KakaoTalk.jpg',
 },
 {
   original: '/KakaoTalk_2.jpg',
   thumbnail: '/KakaoTalk_2.jpg',
 },
 {
   original: 'https://picsum.photos/id/1019/1000/600/',
   thumbnail: 'https://picsum.photos/id/1019/250/150/',
 },
];
export function Gallery (){
    return <ImageGallery items={images} />;
  }
