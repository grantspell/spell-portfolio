import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS
import NavBar from '../navBar/NavBar'

// STYLES
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 50vh;
    color: white;
    font-family: 'Roboto Mono', monospace;
    font-size: 10px;
    letter-spacing: 5px;
`
const EmailStyles = styled.div`
    text-align: center;

    h3 {
        font-size: 10px;
        color: black;
        background: yellow;
    }

    .linkedIn {
        font-size: 10px;
        color: black;
        background: yellow;
    }
    
    a {
        text-decoration:  none;
    }
`
const Resume = styled.div`

`

class Connect extends Component {
    render() {
        return (
            <div>
                <NavBar />
                
                <Wrapper>

                    <EmailStyles>
                        <h3>LINKED IN</h3>
                        <a href="https://www.linkedin.com/in/grantspell/">GRANT SPELL | PROFILE</a>
                        <br/><br />
                        <h3>EMAIL ME</h3>
                        <a href="mailto: spellgrant@gmail.com">SPELLGRANT@GMAIL.COM</a>
                    </EmailStyles>
                    
                </Wrapper>

            </div>
        );
    }
}

export default Connect;