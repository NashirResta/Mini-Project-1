import React, { useState, useEffect } from "react";
import List from "../../components/List";
import Title from "../../components/Title";
import Todo from "../../components/Todo";

import { Link } from "react-router-dom";

import { getDatabase, ref, onValue, push, remove } from "firebase/database";

import jwt from "jwt-decode";

import "./TodoList.css";

const TodoList = props => {
  const db = getDatabase();

  const token = localStorage.getItem("token");
  const decodeToken = jwt(token);

  const [getTodo, setGetTodo] = useState([]);
  const [changeTodo, setChangeTodo] = useState("");

  useEffect(() => {
    const starCountRef = ref(db, `notes/${decodeToken.ID}`);
    onValue(starCountRef, snapshot => {
      const data = [];
      Object.keys(snapshot.val()).map(key => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      setGetTodo(data);
    });
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    props.notifyLogOut();
  };

  const deleted = notesId => {
    remove(ref(db, `notes/${decodeToken.ID}/${notesId}`)).then(() => {
      console.log("berh");
    });
  };

  const addTodo = id => {
    push(ref(db, `notes/${id}`), {
      activity: changeTodo,
      complete: false,
    });
  };

  return (
    <div className="todo-list">
      <Link to="/">
        <h3 onClick={logoutHandler}>Log out</h3>
      </Link>

      <Title firstName={decodeToken.firstname} />
      <div className="todo-list-info">
        <Todo
          addTodo={() => addTodo(decodeToken.ID)}
          changeTodo={changeTodo => setChangeTodo(changeTodo)}
          disableButton={changeTodo}
        />

        {getTodo.length === 0 ? (
          <h2>You have nothing to do</h2>
        ) : (
          <div>
            <h2>On Going</h2>

            {getTodo.map(
              e =>
                e.data.complete === false && (
                  <List
                    isComplete={e.data.complete}
                    key={e.id}
                    todo={e.data.activity}
                    id={e.id}
                    idUser={decodeToken.ID}
                    deleted={() => deleted(e.id)}
                  />
                )
            )}

            <h2>Completed</h2>

            {getTodo.map(
              e =>
                e.data.complete === true && (
                  <List
                    coret={"coret"}
                    isComplete={e.data.complete}
                    key={e.id}
                    todo={e.data.activity}
                    id={e.id}
                    idUser={decodeToken.ID}
                    deleted={() => deleted(e.id)}
                    disableEdit={"disableEdit"}
                  />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
