import React, { useState } from "react";
import { TiTrash } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";
import "./#Component.css";
import Input from "./Input";
import { getDatabase, ref, update } from "firebase/database";

const List = props => {
  const db = getDatabase();

  const [editButton, setEditButton] = useState(false);
  const [editOption, setEditOption] = useState(false);
  const [editValue, setEditvalue] = useState(props.todo);
  const [checked, setChecked] = useState(props.isComplete);

  const checkedhandler = () => {
    if (checked === false) {
      setChecked(true);
      update(ref(db, `notes/${props.idUser}/${props.id}`), {
        complete: true,
      });
    } else {
      update(ref(db, `notes/${props.idUser}/${props.id}`), {
        complete: false,
      });
      setChecked(false);
    }
  };

  const editButtonHandler = () => {
    setEditButton(true);
    setEditOption(true);
  };

  const cancelEditHandler = () => {
    setEditButton(false);
    setEditOption(false);
    setEditvalue(props.todo);
  };

  const saveEditHandler = () => {
    update(ref(db, `notes/${props.idUser}/${props.id}`), {
      activity: editValue,
    }).then(() => {});
    setEditButton(false);
    setEditOption(false);
  };

  return (
    <div className="list">
      {!editOption ? (
        <>
          <div className="info-todo">
            <p className={props.coret}>{props.todo}</p>
          </div>

          <label class="container">
            <input type="checkbox" checked={checked} onClick={checkedhandler} />
            <span class="checkmark"></span>
          </label>
        </>
      ) : (
        <Input
          value={editValue}
          onChange={editValue => {
            setEditvalue(editValue);
          }}
        />
      )}

      {editButton ? (
        <div className="editOption">
          <h6 onClick={saveEditHandler}>Save</h6>
          <h6 onClick={cancelEditHandler}>Cancel</h6>
        </div>
      ) : (
        <div className="change-btn">
          <TiTrash className="delete-btn" onClick={props.deleted} />
          <TiEdit
            className={props.disableEdit || "edit-btn"}
            onClick={editButtonHandler}
          />
        </div>
      )}
    </div>
  );
};

export default List;
