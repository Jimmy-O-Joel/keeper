import styled from "styled-components"

export const Button = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--borderColor);
    color: var(--mainColor);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 20px 0;
    transition: all 0.5s ease-in-out;
    width: 100px;
    &:hover{
        background: var(--borderColor);
        color: var(--mainColor);
    }
    &:focus {
        outline:none;
    }
`
