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
    margin: 15px;
`
const ProjectDisplay = styled.div`
    //background-image: url(https://i.imgur.com/AnGTD8V.png);
    //background-size: cover;
    border: 5px double white;
    padding: 5px;
    text-align: center;
    width: 250px;
    height: 250px;

    h3 {
        font-family: 'Roboto Mono', monospace;
        font-size: 10px;
        padding: 1px;
        letter-spacing: 1px;
        margin: 8px;
        background-color: yellow;
        text-align: center;
    }
    p {
        font-family: 'Roboto Mono', monospace;
        font-size: 9px;
        color: white;
        text-align: center;
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
        box-shadow: -2px 2px 0px red;
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
                        <p>
                            Dilettante is an art fusion application designed to allow users to create vision/mood boards that pair visual and audio art pieces. The user can also create an entry for each collection that can be used for research, self-expression or just for fun. <br/><br/>
                            Built primarily using React on Rails and PostgreSQL, this application has powerful functionality. Using additional tools such as iTunes Search API and Axios allowed me to incorporate large amounts of data without weighing down my server. <br/><br/>
                        </p>
                    </ProjectDisplay>
                    <ProjectLinks>
                        <a href="https://github.com/grantspell/project-four" target="_blank" >GitHub</a>
                        <a href="https://project-four.herokuapp.com/" target="_blank" >LIVE</a>
                    </ProjectLinks>
                </Project>

                {/* <Project>
                    <ProjectDisplay>
                        <h3>Project : What(n.) to What(v.)</h3>
                        <p>This application is my third applicaiton.</p>
                    </ProjectDisplay>
                    <ProjectLinks>
                        <a href="https://github.com/grantspell/project-iii" target="_blank" >GitHub</a>
                        <a href="https://project-iii.herokuapp.com/" target="_blank" >LIVE</a>
                    </ProjectLinks>
                </Project>

                <Project>
                    <ProjectDisplay>
                        <h3>Project : BMC</h3>
                        <p>This application is my second applicaiton.</p>
                    </ProjectDisplay>
                    <ProjectLinks>
                        <a href="https://github.com/grantspell/project_two" target="_blank" >GitHub</a>
                        <a href="https://agile-caverns-43314.herokuapp.com/" target="_blank" >LIVE</a>
                    </ProjectLinks>
                </Project> */}

                <Project>
                    <ProjectDisplay>
                        <h3>Project : Hangman</h3>
                        <p>
                            This interactive hangman application was built using HTML, CSS and vanilla JavaScript. It is themed around the rock anthem 'Renegade' by Styx. <br/><br/>
                            Abiding by the simple rules of hangman, the player guesses, letter by letter, what the hidden word is for each round. All of the game's graphics were designed by hand and then illustrated using 'Affinity Photo', an iPad application. <br/><br/>
                            The biggest struggles with this project were the logic and the hangman animation. I used several if statements to compare the player's guess to each letter in the hidden word chosen for the round. I used if statements for the animation as well, telling the application to render certain images according to the player's wrong guesses.
                        </p>
                    </ProjectDisplay>
                    <ProjectLinks>
                        <a href="https://github.com/grantspell/project_one" target="_blank" >GitHub</a>
                        <a href="http://styx-hangman.bitballoon.com/" target="_blank" >LIVE</a>
                    </ProjectLinks>
                </Project>

            </ProjectWrapper>
            </div>
        );
    }
}

export default Experience;