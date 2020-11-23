import React from "react";
import {useResult} from "../../utils/useResult";
import styled from 'styled-components';


const Wrapper = styled.div`
  padding: 35px 33px 0;
  
  @media screen and (max-width: 360px){
      padding: 25px 55px 0 20px;
  }
`

const Title = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  @media screen and (max-width: 360px){
    font-size: 10px;
  }
  
  @media screen and (max-height: 600px){
         font-size: 12px;
  }
`

const Result = styled.p`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 1px;
    white-space: pre-line;
    
  @media screen and (max-width: 360px){
    font-size: 12px;
  }
  @media screen and (max-height: 600px){
         font-size: 16px;
  }
  
`

const Text = styled.p`
   font-size: 12px;
   white-space: pre-line;
   margin-bottom: 20px;
  @media screen and (max-width: 360px){
    font-size: 9px;
    margin-bottom: 10px;

  }
  @media screen and (max-height: 600px){
         font-size: 10px;
  }
  
`

const ImageWrapper = styled.div`
    height: 270px;
    margin: 10px 0 10px -33px;
    overflow: hidden;
    @media screen and (max-height: 600px){
      height: 220px;
    }
    @media screen and (max-width: 350px){
         margin: 5px 0 5px -25px;
         height: 160px;
    }
    @media screen and (max-height: 640px) and (orientation: landscape){
        height: 0;
    }
`

const Image = styled.img`
    max-height: 100%;
`

const Link = styled.a`
    color: #000;
    font-size: 12px;
    text-decoration: underline;
    
      @media screen and (max-width: 360px){
        font-size: 9px;
      }
      @media screen and (max-height: 600px){
        font-size: 10px;
      }
`

const Final = () => {
    const result = useResult();
    return (
        <Wrapper>
            <Title>Ты как</Title>
            <Result>{result.title}</Result>
            <ImageWrapper >
                <Image src={result.image} alt={''}/>
            </ImageWrapper>
            <Text>{result.description}</Text>
            <Link href={'https://www.bosch.ru/'} target={'_blank'}> Перейти на сайт компании </Link>
        </Wrapper>
    )
}

export default Final;