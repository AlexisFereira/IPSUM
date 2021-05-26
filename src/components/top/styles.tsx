import styled from "@emotion/styled";
import {COLORS} from "./../../ui/colors";

export const Container = styled.div`
    width:100%;
    background:${COLORS.secondary};
    
    .top-right{
        button{
            position:relative;
            width:40px;
            height:40px;
            background:transparent;
            color:white;
            border-right:1px solid #214C52;
            border-left:1px solid #214C52;
            margin-right:1-px;
            padding:0;
            text-align:center;
            
            
            .user{
                width:26px;
                height:26px;
                overflow:hidden;
                border-radius:50%;
            }
            
            &:hover{
            background:rgba(0,0,0,.2)
            }
            
            .question{
                border:2px solid white;
                border-radius:6px;
                width:20px;
                display:inline-block;
                padding:0;
                height:20px;
                line-height:15px;
                text-align:center;
                font-size:14px
            }
            .active{
                position:absolute;
                bottom:10px;
                right:8px;
                width:10px;
                height:10px;
                border-radius:50%;
                background:#FB8631;
            }
        }
    }
`