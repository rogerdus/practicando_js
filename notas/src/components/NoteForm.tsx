"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useNotes } from "@/context/NoteContext";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState<string | null>("");
  const titleRef = useRef<HTMLInputElement>(null);

  const { createNote, selectedNote, setSelectedNote, updateNote } = useNotes();

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content || "");
    }
  }, [selectedNote]);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (selectedNote) {
          await updateNote(selectedNote.id, { title, content });
          setSelectedNote(null);
        } else {
          await createNote({ title, content });
        }
        setTitle("");
        setContent("");
        titleRef.current?.focus();
      }}
    >
      <input
        type="text"
        name="title"
        value={title}
        ref={titleRef}
        placeholder="Title"
        className="w-full px-4 py-2 text-black bg-white rounded-md
          focus:outline-none focus:ring-2 focus:ring-blue-600 my-2"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        name="content"
        value={content}
        placeholder="Content"
        className="w-full px-4 py-2 text-black bg-white rounded-md
          focus:outline-none focus:ring-2 focus:ring-blue-600 my-2"
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex justify-end gap-x-2">
        <button
          type="submit"
          className="px-5 py-2 text-white bg-blue-600 rounded-md
          hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!title || !content}
        >
          {selectedNote ? "Update" : "Create"}
        </button>
        {selectedNote && (
          <button
            className="px-5 py-2 text-white bg-slate-500 rounded-md
          hover:bg-slate-700"
            onClick={() => {
              setSelectedNote(null);
              setTitle("");
              setContent("");
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;
