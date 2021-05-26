import styled from "@emotion/styled";

export const Container = styled.div`
    width:100%;
    position:fixed;
    bottom:0;
    right:0;
    
    .cont{
        position-relative;
    }
    .icon{
        position:absolute;
        right:0;
        bottom:50px;
        background: #4ABFCE;
        border-radius: 10px;
        height:60px;
        width:60px;
        color:white;
        line-height:50px;
        text-align:center;
        font-size:30px;
        
        @media all and (max-width:768px){
            right:15px;
            bottom:65px;
        }
    }
    
`