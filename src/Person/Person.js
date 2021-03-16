import React from 'react';
//import Radium from 'radium'; RADIUM
//import styled from 'styled-components'; STYLED COMPONENTS

import classes from './Person.module.css'; //CSS MODULES

/*
STYLED COMPONENTS ELEMENT
const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width: 450px;
    }
`;
*/

const person = (props) => {
    /* RADIUM
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    */

    return (
        //<div className='Person' style={style}> -> STYLED COMPONENTS
        // RADIUM -> <StyledDiv>
        <div className={classes.Person}>
            <p onClick={props.click} >I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
        //RADIUM -> </StyledDiv>
        //</div>
    )
};

//RADIUM -> export default Radium(person);
export default person;