import { Box, createStyles, makeStyles, useTheme } from '@material-ui/core';
import React, { ReactNode } from 'react';
import Header from '../views/header';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
      flexDirection: 'column',
      padding: '1.2rem',
      boxSizing: 'border-box',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    },
    content: {
      display: 'flex',
    },
  })
);
interface ILayoutProps {
  children: ReactNode;
  setTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}
export default function Layout({ children, setTheme }: ILayoutProps) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header setTheme={setTheme} />
      <Box flex={1}>{children}</Box>
    </Box>
  );
}
