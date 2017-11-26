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
    }

    a {
        text-decoration:  none;
    }
`

class Connect extends Component {
    render() {
        return (
            <div>
                <NavBar />
                
                <Wrapper>

                    <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="grantspell"><a class="LI-simple-link" href='https://www.linkedin.com/in/grantspell?trk=profile-badge'>Grant Spell | LinkedIn</a></div>

                    <EmailStyles>
                        <h3>EMAIL ME</h3>
                        <a href="mailto: spellgrant@gmail.com">SPELLGRANT@GMAIL.COM</a>
                    </EmailStyles>
                    
                </Wrapper>
            </div>
        );
    }
}

export default Connect;