"use client";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

interface ImageProps {
  height?: number;
  img: File | string | undefined;
  setStateAction: React.Dispatch<React.SetStateAction<any>>;
  index?: number;
}

const heightClasses = {
  32: "h-32",
  40: "h-40",
  48: "h-48",
};

export default function ImagePick({
  height = 32,
  img,
  setStateAction,
  index,
}: ImageProps) {
  const handleUpload = (file: File) => {
    if (typeof index === "number") {
      setStateAction((prev: (File | undefined)[]) => {
        const updatedFiles = [...prev];
        updatedFiles[index] = file;
        return updatedFiles;
      });
    } else {
      setStateAction(file);
    }
  };

  const handleRemove = () => {
    if (typeof index === "number") {
      setStateAction((prev: (File | undefined)[]) => {
        const updatedFiles = [...prev];
        updatedFiles[index] = undefined;
        return updatedFiles;
      });
    } else {
      setStateAction(undefined);
    }
  };

  return (
    <div className="h-auto relative rounded-md">
      <div
        className={`relative rounded-md border-4 border-dotted mb-2 ${
          heightClasses[height as keyof typeof heightClasses]
        }`}
        style={
          img
            ? {
                backgroundImage: `url(${
                  img instanceof File ? URL.createObjectURL(img) : img
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        {!img && (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                  handleUpload(selectedFile);
                }
              }}
              className="w-full h-full opacity-0 cursor-pointer absolute z-10"
            />
            <p className="absolute inset-0 flex items-center justify-center">
              No File Chosen
            </p>
          </>
        )}
        {img && (
          <CrossCircledIcon
            className="w-5 h-5 cursor-pointer text-red-500 absolute -top-2 -right-2"
            onClick={handleRemove}
          />
        )}
      </div>
    </div>
  );
}
