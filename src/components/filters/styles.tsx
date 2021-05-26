import styled from "@emotion/styled";

export const Container = styled.div`
    width:100%; 
    position:relative;
    
    .left-side{
        .icon{
            font-size:30px;
            color:black!important;
        }
        .proyectos{
           font-size:18px;
           font-weight:600;
           span{
            color:#999999;
           }  
        }
    }
    .right-side{
        button{
            text-align:center;
            padding:0;
            width:36px;
            em{
              font-size:18px;
            }
        }
    
        button{
            font-size:18px;
            text-align:center;
        }
    
        .filter{
            width:36px;
        }
        .grid-controls{
                button{
                    &:first-of-type{
                       border-radius: 6px 0 0 6px;
                    }
                    &:last-of-type{
                       border-radius:0 6px 6px 0;
                    }
                }
            }    
    }
`