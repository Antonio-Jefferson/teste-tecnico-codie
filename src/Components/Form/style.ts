import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    
`
export const ContainerForm = styled.div` 
    width: 660px;
    height: auto;

    margin: 20px auto;
    h1{
        margin-bottom:43px;
        font-size:24px;
        font-weight: 600;
        color: #1D1D1D;
    }
    select {
        width: 265px;
        height: 83px;
        padding: 8px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.09);
        border: 1px solid #D5D5D5;
    }

    option{
        width: 265px; 
        height: 83px; 
        padding: 8px;
        border-bottom: 1px solid #D5D5D5;
    }
    
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #D5D5D5;
`

export const Total = styled.div` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    div{
        font-size: 24px;
        font-weight: 600;
        color: #1D1D1D;
    }
    button{
        cursor: pointer;
        width: 183px;
        height: 42px;
        border: none;
        border-radius: 30px;
        background-color: #E40F0F;

        font-size: 14px;
        font-weight: 700;
        color: #fff;
    }
`

