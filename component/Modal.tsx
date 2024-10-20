import React from "react";

type Modal = {
  modalId: string;
  modalTitle: string;
  utitlityText: string;
  modalWidth: string;
  children: React.ReactNode;
};
const Modal = ({
  modalId,
  modalTitle,
  utitlityText,
  modalWidth,
  children,
}: Modal) => {
  return (
    <dialog id={modalId} className="modal">
      <div className={`modal-box ${modalWidth}`}>
        {modalTitle && <h3 className="font-bold text-lg">{modalTitle}</h3>}
        {utitlityText && <p className="py-4">{utitlityText}</p>}{" "}
        {/*Press ESC key or click the button below to close */}
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
