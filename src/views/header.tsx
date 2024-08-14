import { Box, createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import logo from '../assets/img/logo.png';
import ThemeToggler from './Todo/components/theme-toggler';
import { useDispatch } from 'react-redux';
import { TodoActions } from './Todo/actions';

const useStyles = makeStyles(() =>
  createStyles({
    root: { display: 'flex', justifyContent: 'space-between', alignContent: 'center' },

    logo: {
      width: 120,
    },
  })
);
const todoActions = new TodoActions();
export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(todoActions.toggleTheme());
  };
  return (
    <Box className={classes.root}>
      <img className={classes.logo} src={logo} alt="TabTabGo Logo" />
      <ThemeToggler toggleTheme={handleToggleTheme} />
    </Box>
  );
}
