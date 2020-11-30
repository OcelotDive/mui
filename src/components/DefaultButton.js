import React from 'react';
import { Button, Typography, Grid, Paper } from '@material-ui/core/';
import { makeStyles } from "@material-ui/styles";
import classNames from 'classnames';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    buttonStyles: {
        color: props => props.primary ? "green" : "purple"
    },
    buttonBackground: {
        background: 'red'
    }

});
const DefaultButton = (props) => {

    const handleClick = () => {

        props.setUser({ firstName: "Redux", lastName: 'Works' })
    }

    const classes = useStyles(props);
    console.log("this is props", props)
    return (
        <Button className={classNames(classes.buttonStyles, props.primary && classes.buttonBackground)} onClick={handleClick}>
            {props.currentUser.firstName + " " + props.currentUser.lastName}
        </Button>
    )

}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (userObj) => {
            return dispatch({ type: "setUser", payload: userObj });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultButton);