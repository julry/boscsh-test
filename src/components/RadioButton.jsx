import React from 'react';
import styled from 'styled-components';


const InputStyled = styled.input`
  display: none;
`;

const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  margin-top: 2px;
  width: 13px;
  height: 13px;
  border: 2px solid #000000;
  border-radius: 50%;
  margin-right: 12px;

`;

const LabelStyled = styled.label`
  display: flex;
  cursor: pointer;
  
  & ${InputStyled}:checked + ${RadioIconStyled}:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #000000;
  }
`;

const TextWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
`;


const WrapperStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  @media screen and (max-width: 360px){
    margin-top: 5px;
  }
`;

export const RadioButton = (props) => {
    const {name, value, checked, children, onChange, className} = props;
    return (
        <WrapperStyled>
            <LabelStyled className={className}>
                <InputStyled
                    type='radio'
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={() => onChange(value)}
                />
                <RadioIconStyled/>
                <TextWrapperStyled>
                    <p>{children}</p>
                </TextWrapperStyled>
            </LabelStyled>
        </WrapperStyled>
    )
};
