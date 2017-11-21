import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS
import NavBar from '../navBar/NavBar'

// STYLES
const NarrativeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`
const Content = styled.div`

`

class Narrative extends Component {
    render() {
        return (
            <NarrativeWrapper>
                <NavBar />

                <Content>
                </Content>
                
            </NarrativeWrapper>
        );
    }
}

export default Narrative;