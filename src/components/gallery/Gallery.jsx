import { useEffect, useState } from "react";


const Gallery = () => {
     const [photos, setPhotos] = useState([]);


     useEffect(() => {
          const fetchPhotos = async () => {
               const response = [
                    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
                    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
               ];
               setPhotos(response);
          };

          fetchPhotos();
     }, []);


     const rows = 4;
     const columns = Math.ceil(photos.length / rows);
     const grid = Array.from({ length: rows }, (_, rowIndex) =>
          photos.filter((_, imgIndex) => imgIndex % rows === rowIndex)
     );

     return (
          <div className="grid grid-cols-4 gap-4">
               {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="grid gap-4">
                         {row.map((src, colIndex) => (
                              <div
                                   key={colIndex}
                                   className={`overflow-hidden rounded-lg w-full ${(rowIndex % 2 === 0 && colIndex % 2 === 1) ||
                                        (rowIndex % 2 === 1 && colIndex % 2 === 0)
                                        ? "h-[390px]"
                                        : "h-[468px]"
                                        }`}
                              >
                                   <img
                                        className="w-full h-full object-cover"
                                        src={src}
                                        alt={`Gallery item ${rowIndex * columns + colIndex}`}
                                   />
                              </div>
                         ))}
                    </div>
               ))}
          </div>
     );
};

export default Gallery;