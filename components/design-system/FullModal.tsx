import Image from "next/image";
import { CloseIcon } from "./Icons";

interface ModalProps {
    isOpen: boolean | null;
    onClose: () => void;
    children?: React.ReactNode;
  }

export function FullModal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;
  
    return (
      <div
        className="fixed inset-0 z-50 overflow-hidden flex justify-center items-center"
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg"
          onClick={onClose}
        ></div>
        <div
          className="bg-white dark:bg-[#030910] text-[#030910] dark:text-white relative w-full h-full mx-auto my-8 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-[#030910] dark:text-white"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
          <div className="p-8">
            {children}
          </div>
        </div>
      </div>
    );
  };
  