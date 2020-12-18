import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  Input,
} from "@material-ui/core";
import { DeleteForever, Edit } from "@material-ui/icons";
import db from "./firebase";
import "./Todo.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "400",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo({ todo }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const updateTodo = () => {
    db.collection("todos").doc(todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );

    setOpen(false);
  };

  return (
    <>
      <Modal
        className="todo__modal"
        open={open}
        onClose={(e) => setOpen(false)}
      >
        <div className={classes.paper}>
          <h1>Edit Todo</h1>
          <Input
            placeholder={todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            className="todo__button"
            variant="outlined"
            onClick={updateTodo}
          >
            Update Todo
          </Button>
        </div>
      </Modal>
      <List className="todo">
        <ListItem>
          <ListItemText primary={todo.todo} secondary="Your list 📝" />
        </ListItem>
        <IconButton>
          <Edit className="todo__editIcon" onClick={(e) => setOpen(true)} />
        </IconButton>
        <IconButton>
          <DeleteForever
            className="todo__deleteIcon"
            onClick={(event) => db.collection("todos").doc(todo.id).delete()}
          />
        </IconButton>
      </List>
    </>
  );
}

export default Todo;
