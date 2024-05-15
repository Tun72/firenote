import { useState } from "react";

function CreateNote() {
  const [note, setNote] = useState("");
  return (
    <form className="flex items-center flex-col gap-2">
      <h2 className="color-purple-400 text-xl">Create Note</h2>
      <div className="flex items-center gap-4">
        <label>Note</label>
        <input
          type="text"
          value={note}
          className="px-[1rem] py-[0.5rem] outline-none shadow-lg border-none rounded-sm"
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Create Note
        </button>
      </div>
    </form>
  );
}

export default CreateNote;
