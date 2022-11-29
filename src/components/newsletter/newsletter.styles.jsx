import styled from 'styled-components';

import { 
    mainColor, 
    secondaryColor,
    tertiaryColor, 
    strokeColor 
} from '../../styles';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${strokeColor};
    padding: 30px 0;    
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1100px;

    @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const H1 = styled.h1`
    font-size: 36px;  
    color: ${mainColor};
    text-align: center;
`;

export const SignUpForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Email = styled.input`
    width: 300px;
    height: 60px;
    font-size: 20px;
    border: none;
    border-radius: 5px 0 0 5px;
`;

export const Button = styled.button`
    width: 100px;
    height: 60px;
    font-size: 20px;
    padding: 0;
    background-color: ${secondaryColor};
    color: ${mainColor};
    border: none;
    border-radius: 0 5px 5px 0;
    transition: all 0.4s ease-in-out; 

    &:hover {
        background-color: ${tertiaryColor};
        
    }
`;