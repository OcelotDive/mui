import React from 'react';
import Button from '../../components/Button/Button';

const ButtonContainer = () => {

    return (
        <section testid="buttonContainer">
            <h1>Button container</h1>
            <Button val={'click this button'}/>
        </section>
    )
}

export default ButtonContainer;