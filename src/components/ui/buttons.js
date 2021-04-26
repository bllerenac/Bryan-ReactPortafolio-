import styled from '@emotion/styled';

export const ButtonHeader = styled.button`
    display: flex;
    margin: 0px;
    padding: 0px;
    padding-bottom: 8px;
    border: none;
    background-color: transparent;
    color: #f7484e;
    font-family: 'Proxima Nova Bold';
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    :hover{
        background-size: 100% 2px;
    }
    :focus {
        background-size: 100% 2px;
    }
`

