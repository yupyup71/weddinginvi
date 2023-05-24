import { ImageGallery } from "react-image-gallery";

export default function Gallery() {
  const images = [
    {
      original: "/KakaoTalk_2.jpg",
      thumbnail: "/KakaoTalk_2.jpg",
    },
  ];
  return (
    <div>
      <ImageGallery items={images} />;
    </div>
  );
}
