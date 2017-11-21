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
    height: 100vh;
`
const Content = styled.div`
    margin-top: -50px;
    width: 100vw;
    height: 50vh;
    background-image: url(https://i.imgur.com/100gwAO.png);
    background-size: 700px;
    background-repeat: no-repeat;
    background-position: center;
`

class Narrative extends Component {
    render() {
        return (
            <NarrativeWrapper>
                <NavBar />

                <Content>
                    <p>
                        Thank you for visiting!
                    </p>
                </Content>
                
            </NarrativeWrapper>
        );
    }
}

export default Narrative;