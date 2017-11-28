import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS
import NavBar from '../navBar/NavBar'

// STYLES
const NarrativeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 60vh;
    width: 100vw;
`
const Content = styled.div`
    width: 100%;
    height: 100%;
`
const Text = styled.div`
    color: white;
    font-family: 'Roboto Mono', monospace;
    font-size: 11px;
    letter-spacing: 3px;
    margin-left: 10px;
    line-height: 2;
    text-align: center;

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
                            My goal is to create visually captivating and <br/>
                            comprehensive web applications
                            through continuously improving my
                            skillset and staying up to<br/> 
                            date on technologies, methods and
                            practices in the tech industry.<br /><br />
                            I approach each project with
                            in depth planning utilizing planning tools such as wireframes, <br/>
                            entity relationship diagrams [ERD], user stories, data modeling, <br/>
                            and lots of white-boarding to get down visual concepts. <br /><br />
                            I recently graduated from General Assembly's 
                            <br /><br />
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