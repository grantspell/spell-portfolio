import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    `
const Content = styled.div`
    color: white;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    width: 600px;
    height: 350px;
    border: double 5px;
    box-shadow: 5px 5px 3px blue;
    background-image: url('https://i.imgur.com/d9vRi9b.png');
    background-size: 1200px;
    
    h1 {
        font-family: 'Rozha One', serif;
        font-size: 40px;
        letter-spacing: 1px;
        margin: 8px;
    }
    p {
        font-family: 'Roboto Mono', monospace;
        font-size: 10px;
        letter-spacing: 5.5px;
        margin-top: -15px;
    }  

    @media (max-width: 768px) {

    }
`
const Header = styled.div`
    margin: -121.8px;
`
const Links = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: -60px;

    .aLink {
        font-family: 'Roboto Mono', monospace;
        font-size: 17px;
        color: white;
        text-decoration: none;
        margin: 5px;
        letter-spacing: 10px;
        line-height: 1.5;
        
        -webkit-animation: text-flicker-in-glow 4s linear both;
        animation: text-flicker-in-glow 4s linear both;
    }
    .ex {
        letter-spacing: 16px;
    }
    .co {
        letter-spacing: 29px;
        margin-left: 16px;
    }
    .na {
        letter-spacing: 19.1px;
    }
`

class Home extends Component {
    render() {
        return (
            <Wrapper>
                <Content>
                    <Header>
                        <h1>GRANT SPELL</h1>
                        <p>FULL STACK WEB DEVELOPER</p>
                    </Header>
                    <Links>
                        <Link to='/experience' className='aLink ex'>EXPERIENCE</Link>
                        <Link to='/connect' className="aLink co">CONNECT</Link>
                        <Link to='/narrative' className='aLink na'>NARRATIVE</Link>                        
                    </Links>
                </Content>
            </Wrapper>
        );
    }
}

export default Home;