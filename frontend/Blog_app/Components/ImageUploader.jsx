import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { HiTrash } from "react-icons/hi";
import { BsCamera } from "react-icons/bs";

export default function ImageUploader() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="mt-[12px]">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => (
          // write your building UI
          <div className="flex flex-col gap-[12px]">
            <div className="w-full grid grid-cols-3 gap-[12px]">
              {imageList.map((image, index) => (
                <div className="relative h-fit rounded-lg overflow-hidden" key={index}>
                  <img className="w-full hover:opacity-60" src={image.data_url} />
                  <div className="absolute top-0 flex items-center justify-center hover:bg-gray-500/30 w-full h-full opacity-0 hover:opacity-100">
                    <span
                      className="flex items-center justify-center p-[8px] rounded-full hover:bg-slate-50/80 cursor-pointer"
                      onClick={() => onImageRemove(index)}
                    >
                      <HiTrash className="text-[40px]" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
              className="flex items-center gap-[5px] bg-[#f4f4f4] rounded-xl h-[40px] px-[12px] py-[8px] hover:bg-[#5596e6] hover:text-white cursor-pointer w-fit"
            >
              <BsCamera className="text-xl" />
              <span>Ảnh hoặc video</span>
            </button>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
