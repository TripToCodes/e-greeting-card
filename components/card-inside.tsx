"use client";
import { useState } from "react";
import Tiptap from "./tiptap";

export default function CardInside() {
  const [preview, setPreview] = useState(false);

  return (
    <div className="flex flex-col justify-between bg-red-200 max-h-full w-[300px] ">
      <div>
        <Tiptap content="Type here" preview={preview} />
      </div>
      <div className="flex flex-row justify-end gap-6 p-4">
        {!preview ? (
          <button onClick={() => setPreview(true)} className="border rounded-full p-2 min-w-20">
            Preview
          </button>
        ) : (
          <button onClick={() => setPreview(false)} className="border rounded-full p-2 min-w-20">
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
