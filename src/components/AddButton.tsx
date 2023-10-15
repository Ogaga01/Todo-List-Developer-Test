import { useState } from "react";
import CreateTodo from "./CreateTodo";

const AddButton = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <button onClick={handleShow}>+</button>
      {show && <CreateTodo />}
    </div>
  );
};

export default AddButton;
