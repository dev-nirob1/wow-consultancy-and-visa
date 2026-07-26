// components/GalleryCard.jsx
import Image from "next/image";

const GalleryCard = ({ image, caption }) => {
  return (
    <div className="group relative aspect-square rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={caption}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <p className="absolute bottom-4 left-4 right-4 text-white font-medium">{caption}</p>
    </div>
  );
};

export default GalleryCard;