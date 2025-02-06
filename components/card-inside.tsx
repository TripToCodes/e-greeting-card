import Tiptap from "./tiptap";
export default function CardInside() {
  return (
    <div className="flex flex-col justify-between bg-red-200 max-h-full w-[300px] ">
      <div>
        <Tiptap content="Type here" />
      </div>
      <div className="flex flex-row justify-end gap-6 p-4">
        <button className="border rounded-full p-2 min-w-20">Preview</button>
        <button className="border rounded-full p-2 min-w-20">Edit</button>
      </div>
    </div>
  );
}
