import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
    padding: 2rem 1rem 10rem;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        border: 0;
        height: 3rem;
        border-radius: 0.25rem;
        padding: 0 2rem;
        color: var(--shapes);
        background: var(--blue-light);

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;