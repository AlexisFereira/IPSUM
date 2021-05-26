import styled from "@emotion/styled";

export const Container = styled.div`
    width:100%;
    background:white;
    position:absolute;
    top:0;
    left:0;
    z-index:99999;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    
    .grey{
        color:#999999;
        font-weight:400;
    }
    .title{
        font-size:18px;
        font-weight:600;
    }
    
    button{
        em{
            font-size:18px;
        }
    }
    
    .field{
           justify-content:flex-end;
        label{
            flex:0 0 auto;
            margin-right:15px;
            font-weight:600;
        }
        select{
            height:36px;
            flex:1 0 60%;
            background: #FFFFFF;
            max-width:220px;
            border: 1px solid #4ABFCE;
            box-sizing: border-box;
            border-radius: 5px;
        }
    }
`