import { makeStyles, createStyles } from '@material-ui/core/styles';
import AddTodo from '../components/AddTodo';
import { useDispatch, useSelector } from 'react-redux';
import { TodoActions } from '../actions';
import { selectTodos } from '../selectors';
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: '100%',
      marginTop: '20%',
    },
    listItem: {
      marginBottom: '10px',
    },
    paper: {
      padding: '10px',
      marginTop: '4px',
    },
    itemText: { maxWidth: '90%' },
    title: {
      fontWeight: 'bold',
    },
    deleteButton: {
      marginLeft: 'auto',
    },
  })
);

const actions = new TodoActions();
const TodoList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const handleAddTodo = (title: string) => {
    dispatch(actions.addTodo(title));
  };
  const handleDeleteTodo = (id: number) => {
    dispatch(actions.removeTodo(id));
  };
  return (
    <Box className={classes.root}>
      <AddTodo onAddTask={handleAddTodo} />
      <List>
        {React.Children.toArray(
          todos.map(item => (
            <Paper className={classes.paper}>
              <ListItem className={classes.listItem}>
                <ListItemText
                  className={classes.itemText}
                  primaryTypographyProps={{ className: classes.title }}
                  primary={item.title}
                />
                <ListItemSecondaryAction>
                  <Button
                    variant="contained"
                    aria-label="delete"
                    onClick={() => handleDeleteTodo(item.id)}
                  >
                    delete
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
            </Paper>
          ))
        )}
      </List>
    </Box>
  );
};

export default TodoList;
