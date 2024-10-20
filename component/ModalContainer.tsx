import React from "react";
import Modal from "./Modal";
import ModalForm from "./ModalForm";

const ModalContainer = () => {
  return (
    <div>
      {/* teacher-modal */}
      <Modal
        modalId={"add-teacher-modal"}
        modalTitle={"Teacher Modal"}
        utitlityText={"Press ESC key or click the button below to close"}
        modalWidth="800px"
      >
        <ModalForm />
      </Modal>
      {/* teacher-modal */}
      <Modal
        modalId={"add-department-modal"}
        modalTitle={"Department Modal"}
        utitlityText={"Press ESC key or click the button below to close"}
        modalWidth="800px"
      >
        <form action="">Hello</form>
      </Modal>
    </div>
  );
};

export default ModalContainer;
