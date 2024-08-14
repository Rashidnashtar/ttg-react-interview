import { Box, createStyles, makeStyles, PaletteType } from '@material-ui/core';
import React from 'react';
import logo from '../assets/img/logo.png';
import ThemeToggler from './Todo/components/theme-toggler';

interface Props {
  setTheme: React.Dispatch<React.SetStateAction<PaletteType>>;
}
const useStyles = makeStyles(() =>
  createStyles({
    root: { display: 'flex', justifyContent: 'space-between', alignContent: 'center' },

    logo: {
      width: 120,
    },
  })
);

export default function Header({ setTheme }: Props) {
  const classes = useStyles();
  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  return (
    <Box className={classes.root}>
      <img className={classes.logo} src={logo} alt="TabTabGo Logo" />
      <ThemeToggler toggleTheme={handleToggleTheme} />
    </Box>
  );
}
