import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// STYLES
const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    width: 100vw;
    height: auto;

`
const Content = styled.div`
margin: 10px;
text-align: center;
width: 350px;
height: 300px;
border: double 5px white;
background-image: url(https://i.imgur.com/9fxpuyI.png);
background-size: cover;

h1 {
    padding-top: 180px;
    color: white;
    text-shadow: 2px 2px 0px blue, -2px -2px 0px red;
    font-family: 'Rozha One', serif;
    font-size: 40px;
    letter-spacing: 4px;
    margin: 8px;
}
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px;

    .Button {
        font-family: 'Roboto Mono', monospace;
        font-size: 9px;
        color: white;
        text-decoration: none;
        margin: 10px;
        letter-spacing: 5px;
        text-align: center;
    }
`

class NavBar extends Component {
    render() {
        return (
            <NavWrapper>
                <Content>
                <h1>Grant Spell</h1>
                </Content>
                <Buttons>
                    <Link className="Button" to="/experience">EXPERIENCE</Link>
                    <Link className="Button" to="/connect">CONNECT</Link>
                    <Link className="Button" to="/narrative">NARRATIVE</Link>
                </Buttons>
            </NavWrapper>
        );
    }
}

export default NavBar;