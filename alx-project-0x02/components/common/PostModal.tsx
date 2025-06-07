import { ModalProps } from "@/interfaces";
import React, { useState } from "react";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const submitForm = () => {
    onSubmit({ title, content });
    setTitle("");
    setContent("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        <div >
          <form className="flex flex-col gap-4">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your name"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type content"
            />
            <button
              onClick={submitForm}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
