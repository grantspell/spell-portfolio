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
    height: 40vh;
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
const LinkedIn = styled.div`
    height: 200px;
    background-color: yellow;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;

    img {
        height: 100px;
        width: 100px;
        border-radius: 100%;
    }
    .pLink {
        background-color: white;
        padding: 5px;
        border: 5px double black;
    }
`
const Text = styled.div`
    color: black;
    letter-spacing: 1px;
    line-height: .5;
    
    p {
        letter-spacing: 8px;
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
                        <LinkedIn>
                        <div>
                        <img src="https://i.imgur.com/fq0kUPi.jpg" />
                        </div>
                        <Text>
                            <h1>Grant Spell</h1>
                            <p><a href="https://www.linkedin.com/in/grantspell/" target="_blank">/grantspell</a></p>
                        </Text>
                        <a className="pLink" href="https://www.linkedin.com/in/grantspell/">PROFILE</a>
                        </LinkedIn>
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