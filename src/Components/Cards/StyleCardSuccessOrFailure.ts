import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`
export const CardContainer = styled.div` 
    width: 408px;
    height: 255px;

    margin: auto;
    border-radius: 8px;
    border: 1px solid #DF8686;
    padding: 20px 35px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: rgba(223, 134, 134, 0.04);

    h2{
       font-size:20px ;
       font-weight: 700;
       color: #1D1D1D;
    }
    p{
        text-align: center;
        font-size: 14px;
        font-weight: 400;
        color: #747474;
    }
    button{
        width: 197px;
        height: 42px;
        border: none;
        border-radius: 30px;

        background-color: #E40F0F;
        color: #fff;
        font-size:14px;
        font-weight: 700;
    }
`