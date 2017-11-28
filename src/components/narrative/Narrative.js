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
    line-height: 2;

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
                            My goal is to create polished and<br />
                            responsive web applications <br/>
                            through continuously improving my<br />
                            skillset and staying up to date<br />
                            on technologies, methods and <br />
                            practices in the tech industry.<br /><br />
                            I approach each project with<br/>
                            in depth planning. Visually<br />
                            mapping out the solution using<br />
                            tools such as <span>Draw IO</span> ...<br /><br />
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