import React, { useState } from 'react';
import './App.css';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';
import Header from './components/Header';
import { Switch, Button, Typography, Grid, Paper } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import DefaultButton from './components/DefaultButton';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import GridContainer from './components/GridContainer';
import Para from './components/Para';
import InfoCard from './components/InfoCard'







function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    },


  });

  const handleChange = () => {
    setDarkMode(!darkMode);
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        {/*} <Paper>
          <Grid container >
            <Typography variant="h6">Switch Theme</Typography>
            <Button variant="contained" color="primary" >Light</Button>
            <Button variant="contained" color="secondary" >Dark</Button>
            <Switch checked={darkMode} onChange={handleChange} />
          </Grid>
          <DefaultButton />
          <GridContainer />
          <Para />
        </Paper>
  */}
        <Switch checked={darkMode} onChange={handleChange} />

        <Grid container justify="flex-end" spacing={2} >
          <Grid item xs={12} sm={6} md={4} lg={3} container justify="center">
            <InfoCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} container justify="center">
            <InfoCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} container justify="center">
            <InfoCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} container justify="center">
            <InfoCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} container justify="center">
            <InfoCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} container justify="center">
            <InfoCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} container justify="center">
            <InfoCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} container justify="center">
            <InfoCard />
          </Grid>
        </Grid>

      </ThemeProvider>
    </>
  );
}




export default App;
