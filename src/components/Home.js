import React from 'react'
import styled from 'styled-components'
import Button from './Button';
import dineLogo from '../images/logo.svg'
import bgMobile from '../images/homepage/hero-bg-mobile.jpg';

const Background = styled.div`
    // background: url(${bgMobile});
    // background-repeat: no-repeat;
`
const Content = styled.div`
    // margin-top: 200px;
`

const Home = () => {
    return (
        <Background>
            <Content>
                <img src={dineLogo} alt="" />
                <h1>Exquisite dining since 1989</h1>
                <p>Experience our seasonal menu in beautiful 
                    country surroundings. 
                    Eat the freshest produce from the 
                    comfort of our farmhouse.</p>
                <Button title={"BOOK A TABLE"} />
            </Content>
        </Background>
    )
}
export default Home;