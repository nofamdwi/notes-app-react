import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

/* eslint-disable react/prop-types */
export default function EditForm({ noteToEdit, editNote, onClose }) {
  const [notes, setNotes] = useState({
    title: '',
    titleLength: 0,
    body: ''
  });

  useEffect(() => {
    setNotes({
      title: noteToEdit.title,
      titleLength: noteToEdit.title.length,
      body: noteToEdit.body
    });
  }, [noteToEdit]);

  const onTitleChangeHandler = (e) => {
    e.preventDefault();
    if (e.target.value.length <= 50) {
      setNotes((prevNotes) => ({
        ...prevNotes,
        title: e.target.value,
        titleLength: e.target.value.length
      }));
    } else {
      toast.error('Panjang maksimal judul adalah 50 karakter');
    }
  };

  const onBodyChange = (e) => {
    setNotes((prevNotes) => ({
      ...prevNotes,
      body: e.target.value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (notes.title === '') {
      toast.error('Judul tidak boleh kosong!');
    } else if (notes.body === '') {
      toast.error('Isi catatan tidak boleh kosong!');
    } else {
      const editedNote = {
        ...noteToEdit,
        title: notes.title,
        body: notes.body
      };
      const result = editNote(editedNote);
      if (!result) {
        toast.success('Catatan diperbarui');
        onClose();
      } else {
        toast.error('Gagal memperbarui catatan!');
      }
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm bg-black/10'>
      <form className="w-2/4 h-2/4 px-4 flex flex-col justify-center bg-white gap-3 border border-slate-600 rounded-md sm:min-w-max dark:bg-black">
        <h1 className="font-bold text-3xl dark:text-slate-50">Edit Notes</h1>
        <p className="font-light dark:text-slate-50">characther left: {50 - notes.titleLength}</p>
        <input
          className="block h-12 px-3 shadow-md bg-white border border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          type="text"
          placeholder="title for notes..."
          value={notes.title}
          onChange={onTitleChangeHandler}
        />
        <textarea
          className="block p-2.5 h-2/5 text-md bg-white border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          placeholder="write notes at here..."
          value={notes.body}
          onChange={onBodyChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          type="submit"
          onClick={onSubmit}
        >
          SAVE
        </button>
        <button
          className="bg-slate-100 px-4 py-2 rounded hover:bg-slate-300 hover:border-white"
          onClick={handleClose}
        >
          CLOSE
        </button>
      </form>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}
