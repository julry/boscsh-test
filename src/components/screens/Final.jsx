import React from "react";
import {useResult} from "../../utils/useResult";
import styled from 'styled-components';
import {resolve} from "url";
import {VkIcon} from "../customIcon/VkIcon";



const Wrapper = styled.div`
  padding: 35px 33px 0;
  white-space: pre-line;
  
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
   margin-bottom: 15px;
  @media screen and (max-width: 360px){
    font-size: 9px;
    margin-bottom: 10px;

  }
  @media screen and (max-height: 600px){
         font-size: 10px;
  }
  
`

const ImageWrapper = styled.div`
    height: 240px;
    margin-left: -33px;
    overflow: hidden;
    @media screen and (max-height: 700px){
      height: 200px;
    }
    @media screen and (max-width: 350px){
         margin-left: -25px;
         height: 140px;
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
    display: inline-block;
    line-height: 100%;
    
      @media screen and (max-width: 360px){
        font-size: 9px;
      }
      @media screen and (max-height: 600px){
        font-size: 10px;
      }
`

const ShareBox = styled.div`
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;
`
const ShareVKIcon = styled(VkIcon)`
    width: 42px;
    margin-left: 10px;
    @media screen and (max-height: 600px){
         width: 30px;
    } 
`


const Final = () => {
    const result = useResult();

    const url = [
        window.location.protocol,
        "//",
        window.location.host,
        window.location.pathname,
    ].join("");


    const shareText = `#IAmBosch`;
    const shareImage = result.shareImage;

    const image = resolve(url, shareImage);


    const queryParams = new URLSearchParams();
    queryParams.append("url", url);
    queryParams.append("title", shareText);
    queryParams.append("image", image);
    queryParams.append('description', shareText);
    queryParams.append("comment", shareText);

    const link = `http://vk.com/share.php?${queryParams.toString()}`;

    const onShare = () => {
        window.open(link, "mywindow");
    };

    return (
        <Wrapper>
            <Title>Ты как</Title>
            <Result>{result.title}</Result>
            <ImageWrapper >
                <Image src={result.image} alt={''}/>
            </ImageWrapper>
            <Text>{result.description}</Text>
            <ShareBox onClick={onShare}>
                <p>Поделиться</p>
                <ShareVKIcon />
            </ShareBox>
            <Link href={'https://www.bosch.ru/'} target={'_blank'}> {'Узнать больше о компании \nи карьерных возможностях'} </Link>
        </Wrapper>
    )
}

export default Final;