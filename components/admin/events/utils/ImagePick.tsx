"use client";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

interface ImageProps {
  height?: number;
  url?: string;
}

const heightClasses = {
  32: "h-32",
  40: "h-40",
  48: "h-48",
};

export default function ImagePick({ height = 32, url }: ImageProps) {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [fileExtension, setFileExtension] = useState<string>("");

  // Load the image from the URL if provided
  useEffect(() => {
    if (url) {
      // Extract the file name and extension from the URL if possible
      const urlParts = url.split("/").pop()?.split(".");
      if (urlParts && urlParts.length > 1) {
        const [name, ext] = [urlParts.slice(0, -1).join("."), urlParts.pop()];
        setFileName(name);
        setFileExtension(ext || "");
      }
    }
  }, [url]);

  const handleUpload = (file: File) => {
    setFile(file);
    const filenamesplit = file.name.split(".");
    const ext = filenamesplit.pop();
    const removedExtName = filenamesplit.join(".");
    if (ext) {
      setFileExtension(ext);
    }
    if (removedExtName) {
      setFileName(removedExtName);
    }
  };

  return (
    <div className="h-auto relative rounded-md">
      <div
        className={`relative rounded-md border-4 border-dotted mb-2 ${
          heightClasses[height as keyof typeof heightClasses]
        }`}
        style={
          file || url
            ? {
                backgroundImage: `url(${
                  file ? URL.createObjectURL(file) : url
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        {!file && !url && (
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
        {(file || url) && (
          <CrossCircledIcon
            className="w-5 h-5 cursor-pointer text-red-500 absolute -top-2 -right-2"
            onClick={() => {
              setFile(null);
              setFileName("");
              setFileExtension("");
            }}
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
