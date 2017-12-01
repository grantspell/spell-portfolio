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
    height: 60vh;
    width: 100vw;
`
const Content = styled.div`
    width: 75%;
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
    a {
        text-decoration: none;
        color: black;
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
                            My name is <span>Grant Spell</span>.
                            <br />
                            <br />
                            My goal is to create visually captivating and
                            comprehensive web applications that create a
                            seemingly automagical user experience. This is
                            possible through utilizing front and back-end
                            technologies to create visual and funtional components.
                            <br />
                            <br />
                            I approach each project with
                            in depth planning utilizing planning tools such as wireframes,
                            entity relationship diagrams [ERD], user stories, data modeling,
                            and lots of white-boarding to get down visual concepts. I am still
                            learning, but actively implementing, Agile Development
                            methodologies. I have primarily worked with Node.js and Ruby on Rails,
                            taking advantage of the React front-end JavaScript library. I have enjoyed
                            working with PostgreSQL databases most, because they make relational
                            data so much easier to work with, but I have also worked with Mongoose.
                            A full list of skills can be found on my <span><a href="https://drive.google.com/file/d/1eApRC5Gm2lMxphibO28OtIYXrUgfZ9cc/view" target="_blank">resumé</a></span>.
                            <br />
                            <br />
                            I wanted to get into web development because I have always
                            been inspired by technology and how it works. This, my
                            love for graphic design, and wanting to start a career
                            lead me to search for web development bootcamps. I enrolled
                            in General Assembly's Web Development Immersive course and
                            within the first week I realized that web development
                            would allow me to balance creativity and analysis and
                            form a career around both aspects. I recently graduated from
                            General Assembly and I am currently available for hire!
                            <br />
                            <br />
                            Thank you for visiting and feel free to reach out for more information!
                        </p>
                    </Text>
                </Content>
            </NarrativeWrapper>
            </div>
        );
    }
}

export default Narrative;