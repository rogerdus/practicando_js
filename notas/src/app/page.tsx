"use client";
import { useContext, useEffect } from "react";
import { useNotes } from '@/context/NoteContext'
import NoteForm from "@/components/NoteForm";
import NoteCard from "@/components/NoteCard";

function HomePage() {
  const { notes, loadNotes } = useNotes();

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <NoteForm />
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
