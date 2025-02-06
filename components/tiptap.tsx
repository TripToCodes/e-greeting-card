"use client";
import { useCurrentEditor, EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function EditMenuBar() {
  const { editor } = useCurrentEditor();
  if (!editor) {
    return null;
  }
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold")
            ? "flex gap-2 border-gray-50 border items-center justify-center rounded-lg px-2 py-1 bg-white"
            : "flex gap-2 border-gray-50 border items-center justify-center rounded-lg px-2 py-1"
        }
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic")
            ? "flex gap-2 border-gray-50 border items-center justify-center rounded-lg px-2 py-1 bg-white"
            : "flex gap-2 border-gray-50 border items-center justify-center rounded-lg px-2 py-1"
        }
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike")
            ? "flex gap-2 border-gray-50 border items-center justify-center rounded-lg px-2 py-1 bg-white"
            : "flex gap-2 border-gray-50 border items-center justify-center rounded-lg px-2 py-1"
        }
      >
        strike
      </button>
    </div>
  );
}

const Tiptap = ({ content }: { content: string }) => {
  const extensions = [StarterKit];

  return (
    <div className="p-4">
      <EditorProvider
        slotBefore={<EditMenuBar />}
        extensions={extensions}
        content={content}
      ></EditorProvider>
    </div>
  );
};

export default Tiptap;
