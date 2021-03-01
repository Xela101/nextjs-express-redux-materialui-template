import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from "react";

export default function HomeLayout({ children }) {
  return (
    <>
        <Head>
          <title>NextJs - Express - Redux - Material UI - Template</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar style={{background: `#18181b`}} position="static">
          <Toolbar>
            <Typography color="primary" variant="h3">
              NextJs - Express - Redux - Material UI - Template
            </Typography>
          </Toolbar>
        </AppBar>
        {children}
      </ThemeProvider>
    </>
  )
}

export function withHomeLayout(component){
  component.Layout = HomeLayout;
  return component;
}