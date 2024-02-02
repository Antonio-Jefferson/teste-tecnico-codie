import styled from "styled-components";

export const Session = styled.div`
    margin-bottom:32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        display: flex;
        flex-direction: column;
        gap:8px ;
        label{
            font-size: 12px;
            font-weight: 700;
            color: #1D1D1D;
        }
        input{
           width:265px;
           height: 45px;
           padding: 4px 8px;
           border: 1px solid #D5D5D5;
           border-radius: 8px;
           color:#747474 ;
           ::placeholder{
             font-size: 14px;
             font-weight: 500;
           }
        }
        input:focus {
            outline: none;
        }
        select{
           width:265px;
           height: 45px;
           padding: 4px 8px;
           border: 1px solid #D5D5D5;
           border-radius: 8px;
           color:#747474 ;
        }
        p{
            font-size: 14px;
            color: red;
            font-weight: 400;
        }
        
    }
`