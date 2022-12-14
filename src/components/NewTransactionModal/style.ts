import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`
    h2{
        color: var(--title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        background-color: #e7e9ee;
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        padding: 0 1.5rem;
        font-weight: 400;
        font-size: 1rem;

        & + input{
            margin-top: 1.5rem;
        }

        &::placeholder{
            color: var(--text);
        }
    }

    button[type="submit"]{
        width: 100%;
        background: var(--green);
        color: #FFF;
        padding: 0 1.5rem;
        height: 4rem;
        margin-top: 1.5rem;
        border: 0;
        font-size: 1rem;
        border-radius: 0.25rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.25rem;
    margin: 1rem 0;
`;

interface RadioBoxProps{
    isActive: boolean;
    colorBox: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#E62E4D'
};

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;

    background: ${(props) => 
        props.isActive 
        ?  transparentize(0.8, colors[props.colorBox])
        : 'transparent'
    };

    transition: border-color 0.2s;

    &:hover{
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img{
        width: 20px;
        height: 20px;
    }

    span{
        display: inline-block;
        font-size: 1rem;
        margin-left: 1rem;
        color: var(--title);
    }
`;