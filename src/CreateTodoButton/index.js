import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={(event) => {
        console.log("dsf");
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
