"use client";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface ImageProps {
  height?: number;
}

const heightClasses = {
  32: "h-32",
  40: "h-40",
  48: "h-48",
};

export default function ImagePick({ height }: ImageProps) {
  if (!height) {
    height = 32;
  }

  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [fileExtension, setFileExtension] = useState<string>("");

  const handleUpload = (file: File) => {
    setFile(file);
    const filenamespilt = file.name.split(".");
    const ext = filenamespilt.pop();
    const removedExtMame = filenamespilt;
    if (ext) {
      setFileExtension(ext);
    }
    if (removedExtMame) {
      setFileName(removedExtMame.join());
    }
  };

  return (
    <div className="h-auto relative rounded-md">
      <div
        className={`relative rounded-md border-4 border-dotted mb-2 ${
          heightClasses[height as keyof typeof heightClasses]
        }`}
        style={
          file
            ? {
                backgroundImage: `url(${URL.createObjectURL(file)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        {!file && (
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
        {file && (
          <CrossCircledIcon
            className="w-5 h-5 cursor-pointer text-red-500 absolute -top-2 -right-2"
            onClick={() => setFile(null)}
          />
        )}
      </div>
      <div className="w-full border rounded-md flex flex-row items-center gap-1">
        <input
          type="text"
          name="file-name"
          id="file-name"
          placeholder="file name"
          className="border-none flex-3 rounded-md"
          value={fileName || ""}
          readOnly
        />
        <p>.{fileExtension || "jpg"}</p>
      </div>
    </div>
  );
}
