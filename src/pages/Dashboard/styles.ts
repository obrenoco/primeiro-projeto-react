import styled, {css} from 'styled-components'
import {shade} from 'polished'

interface FromProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 470px;
    line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form<FromProps>`
    max-width: 700px;
    margin-top: 40px;
    display: flex;
    height: 70px;
    input {
        flex: 1;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;
        ${(props)=> props.hasError && css`
            border-color: #c53030;
        `}

        &::placeholder {
            color: #a8a8b3;
        }
    }
    
    button {
        width: 210px;
        background: #04d361;
        border: 0;
        color: #fff;
        font-weight: bold;
        border-radius: 0 5px 5px 0;
        transition: background-color 0.4s;

        &:hover {
            background: ${shade(0.2, '#04d361')};
        }        
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;
        & + a {
            margin-top: 16px;
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin-left: 16px;
            strong {
                font-size: 20px;
                color: #3d3d4d;
            }
            
            p{
                font-size: 20px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }

        &:hover{
            transform: translateX(10px);
        }
    }
`
