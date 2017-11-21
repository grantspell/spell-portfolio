import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS
import NavBar from '../navBar/NavBar'

// STYLES
const NarrativeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 60vh;
`
const Content = styled.div`
    margin-top: -50px;
    width: 700px;
    height: 50vh;
    background-image: url(https://i.imgur.com/100gwAO.png);
    background-size: 700px;
    background-repeat: no-repeat;
    background-position: center;
`
const Text = styled.div`
    color: white;
    font-family: 'Roboto Mono', monospace;
    font-size: 10px;
    letter-spacing: 5px;
    margin-left: 10px;

    span {
        background-color: yellow;
        color: black;
        padding: 5px;
    }
`

class Narrative extends Component {
    render() {
        return (
            <div>
            <NavBar />

            <NarrativeWrapper>
                <Content>
                    <Text>
                        <p>
                            Hello, World! <br /><br />
                            My name is <span>Grant Spell</span>. <br /><br />
                            Thank you for visiting! <br />
                        </p>
                    </Text>
                </Content>
            </NarrativeWrapper>
            </div>
        );
    }
}

export default Narrative;