import React, {useContext} from "react";
import {ProgressContext} from '../../context/ProgressContext';
import styled from "styled-components";
import {intro, logo} from "../../constants/images";


const Wrapper = styled.div`
  padding: 160px 70px 0 40px;
  white-space: pre-line;
  @media screen and (max-height: 700px){
    padding-top: 125px;
  }
  @media screen and (max-width: 360px){
    padding-top: 100px;
  }
  @media screen and (min-width: 640px) {
    padding-top: 130px;
  }
`
const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
`
const Background = styled.img`
    width: 100%;
    height: 100%;
`
const Title = styled.h1`
   text-transform: uppercase;
   font-weight: 500;
   line-height: 100%;
   @media screen and (max-height: 700px){
     font-size: 20px;
   }
   @media screen and (min-width: 640px) {
      font-size: 25px;
   }
`
const BoldTitle = styled(Title)`
    margin: 15px 0 30px;
    font-weight: 600;
    @media screen and (max-height: 700px){
         margin: 10px 0 20px;
    }
    @media screen and (max-width: 360px){
         margin: 10px 0 10px;
    }
`

const Text = styled.p`
    @media screen and (max-height: 700px){
         font-size: 12px;
    }
    @media screen and (max-width: 360px){
        font-size: 10px;
    }
    
    @media screen and (min-width: 640px) {
      font-size: 14px;
    }
`
const ButtonStyled = styled.button`
    color: white;
    padding: 10px 20px;
    background-color: #005691;
    border: none;
    margin-top: 25px;
    @media screen and (max-width: 360px){
         margin-top: 15px;
    }
`
const LogoWrapper = styled.div`
      position: absolute;
      top:0;
      left: 40px;
      width: 150px;
      @media screen and (min-width: 640px) {
        width: 170px;
      }
      @media screen and (max-width: 360px){
        width: 130px;
      }
`

const Logo = styled.img`
  width: 100%;
`

const Intro = () => {
    const { setNext } = useContext(ProgressContext);

    return (
        <Wrapper>
            <LogoWrapper>
                <Logo src={logo} />
            </LogoWrapper>
            <BackgroundWrapper>
                <Background src={intro}/>
            </BackgroundWrapper>
            <Title>{'Тест: \n'} </Title>
            <BoldTitle> {'Кто ты \n из техники \n Bosch?'} </BoldTitle>
            <Text>{'10 ситуаций, в которых может \n оказаться любой стажер.\n Ответь на вопросы и узнай, \n кто ты из техники Bosch!'}</Text>
            <ButtonStyled onClick={setNext}> Начать </ButtonStyled>
        </Wrapper>
    )
}

export default Intro;