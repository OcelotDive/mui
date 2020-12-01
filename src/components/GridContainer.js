import React from 'react';
import { connect } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';


const GridContainer = (props) => {
    return (
        <Grid container justify="space-around">
            <Grid item xs={12} md={4} > 
            <Paper>
                {props.gridItemOne}
             </Paper>   
            </Grid>
            <Grid item xs={12} md={4}>
                {props.gridItemTwo}
            </Grid>
            <Grid item xs={12} md={4}>
                {props.gridItemThree}
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        gridItemOne: state.gridItemOne,
        gridItemTwo: state.gridItemTwo,
        gridItemThree: state.gridItemThree
    }
}

export default connect(mapStateToProps, null)(GridContainer);