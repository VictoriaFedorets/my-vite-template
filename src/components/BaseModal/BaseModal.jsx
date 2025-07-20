import { useEffect } from "react";
import ReactDOM from "react-dom";
import CloseIcon from "@/assets/icons/close.svg?react";
import css from "./BaseModal.module.css";

export default function BaseModal({ onClose, children, className = "" }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={`${css.modal} ${className}`}>
        <button className={css.closeButton} onClick={onClose}>
          <CloseIcon className={css.iconClose} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
