"use client";

import { FC, useEffect, useState } from "react";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
            <div key={url} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">

            </div>
        ))}
    </div>
  )
};

export default ImageUpload;
