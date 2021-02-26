// import Radium from 'radium';
import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        padding: 16px;
        box-shadow: 0 2px 3px #ccc;
        text-align: center;

    @media (min-width: 500px) {
        .person {
            width: 450px;
        }
    }
    `

const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}> I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
};


export default person;