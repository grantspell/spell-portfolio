import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// COMPONENTS
import NavBar from '../navBar/NavBar'

// STYLES
const ProjectWrapper = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: center;
`
const Project = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 20px;
`
const ProjectDisplay = styled.div`
    // background-image: url(https://i.imgur.com/AnGTD8V.png);
    background-size: cover;
    border: 5px double white;
    padding: 5px;
    text-align: center;
    width: 300px;
    height: 300px;

    h3 {
        font-family: 'Roboto Mono', monospace;
        font-size: 11px;
        padding: 1px;
        letter-spacing: 1px;
        margin: 8px;
        background-color: yellow;
    }
    p {
        font-family: 'Roboto Mono', monospace;
        font-size: 9px;
        color: white;
    }
`
const ProjectLinks = styled.div`
    display: flex;
    justify-content: space-around;

    a {
        font-family: 'Roboto Mono', monospace;
        font-size: 9px;
        color: white;
        text-decoration: none;
        margin: 11px;
        letter-spacing: 7px;
        text-align: center;
        padding: 5px;
        background-color: blue;
    }
`

class Experience extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <ProjectWrapper>

                <Project>
                    <ProjectDisplay>
                        <h3>Project : Dilettante</h3>
                        <p>This application is my fourth applicaiton.</p>
                    </ProjectDisplay>
                    <ProjectLinks>
                        <a href="https://github.com/grantspell/project-four">GitHub</a>
                        <a href="https://project-four.herokuapp.com/">LIVE</a>
                    </ProjectLinks>
                </Project>

                <Project>
                    <ProjectDisplay>
                        <h3>Project : What(n.) to What(v.)</h3>
                        <p>This application is my third applicaiton.</p>
                    </ProjectDisplay>
                    <ProjectLinks>
                        <a href="https://github.com/grantspell/project-iii">GitHub</a>
                        <a href="https://project-iii.herokuapp.com/">LIVE</a>
                    </ProjectLinks>
                </Project>

                <Project>
                    <ProjectDisplay>
                        <h3>Project : BMC</h3>
                        <p>This application is my second applicaiton.</p>
                    </ProjectDisplay>
                    <ProjectLinks>
                        <a href="https://github.com/grantspell/project_two">GitHub</a>
                        <a href="https://agile-caverns-43314.herokuapp.com/">LIVE</a>
                    </ProjectLinks>
                </Project>

                <Project>
                    <ProjectDisplay>
                        <h3>Project : Hangman</h3>
                        <p>This application is my first applicaiton.</p>
                    </ProjectDisplay>
                    <ProjectLinks>
                        <a href="https://github.com/grantspell/project_one">GitHub</a>
                        <a href="http://designer-beaver-25308.bitballoon.com/">LIVE</a>
                    </ProjectLinks>
                </Project>

            </ProjectWrapper>
            </div>
        );
    }
}

export default Experience;