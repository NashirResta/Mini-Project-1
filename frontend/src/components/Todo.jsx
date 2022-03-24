import React, { useState, useEffect } from "react";
import Input from "./Input";

const Todo = props => {
  const addTodoHandler = () => {
    props.addTodo();
  };

  return (
    <div>
      <form>
        <div className="add-todo">
          <Input
            value={props.disableButton}
            type="text"
            placeholder="Add Task..."
            onChange={props.changeTodo}
          />
          <button
            disabled={!props.disableButton}
            type="button"
            name="addTodo"
            onClick={addTodoHandler}
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default Todo;
