import OpenModalTrigger from "./OpenModalTrigger";

export default function Navbar() {
  return (
    <div className=" flex p-[30px] bg-base-200 justify-between">
      <div className=" text-3xl">Cu-management</div>
      <div className=" flex gap-3">
        <OpenModalTrigger
          color="btn-secondary"
          size="btn-sm"
          modalId="add-teacher-modal"
          triggerName={"Add Teacher"}
        />
        <OpenModalTrigger
          color="btn-secondary"
          size="btn-sm"
          modalId="add-department-modal"
          triggerName={"Add Department"}
        />
      </div>
    </div>
  );
}
