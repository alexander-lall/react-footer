import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

import { 
    mainColor, 
    secondaryColor, 
    strokeColor 
} from '../../styles';

export const Container = styled.footer`    
    background-color: ${secondaryColor};
    padding: 30px 60px;
`;

export const Wrapper = styled.div`
    display: grid;
    max-width: 1100px;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }    
`;

export const Column = styled.section`
    display: flex;
    flex-direction: column;
    width: 160px;
    justify-self: center;
`;

export const Title = styled.h4`
    font-size: 24px;
    font-weight: 600;
    margin: 10px 0 20px 0;
    color: ${mainColor};
`;

export const Link = styled(LinkRouter)`
    height: 24px;
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${mainColor};
    text-decoration: none;
    line-height:1;
    margin: 0 0 12px 0;    
    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${strokeColor};
    }
`;

export const LinkIcon = styled.div`
    font-size: 24px;
    margin-right: 24px;
`;