import styled from "@emotion/styled";
import {COLORS} from "../../ui/colors";

export const Container = styled.div`
    width:100%;
    background: #FFFFFF;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    
    
    .left-side{
        .logo{
            border:4px solid ${COLORS.primary};
            border-radius:13px;
        }
    
        .title{
            font-size:24px;
            font-weight:600;
            padding-bottom:8px;
        }
       
        
        .data-item{
            flex:0 0 auto;
            margin-right:10px;
            display:inline-block;
            em{
                color:${COLORS.primary};
                margin-right:5px;
            }  
        }
    }
    
    
    .right-side{
        .search{
            flex:1 0 195px;
            position:relative;
            
            input{
                width:100%;
                height:36px;
                background: #FFFFFF;
                border: 0.5px solid #333333;
                box-sizing: border-box;
                box-shadow: inset 2px 2px 6px rgba(0, 0, 0, 0.07);
                border-radius: 5px;
                padding: 0 30px 0 15px;
            }
            
            .icon{
                position:absolute;
                right:10px;
                top:0;
                height:100%;
                width:20px;
                color:#333333;
                line-height:30px;
                font-size:20px;
            }
            
        }
       
    }
`