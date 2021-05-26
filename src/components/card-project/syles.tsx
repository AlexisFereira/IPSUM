import styled from "@emotion/styled";
import {COLORS} from "../../ui/colors";


type Props = {
    state:string;
    photo:string;
}

export const Container = styled.div<Props>`
    background: #FFFFFF;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow:hidden;
    
    .photo{
        min-height:229px;
        background-image:url(${props => props.photo});
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;
        color:white;
        position:relative;
        
        .sombra{
            top:0;
            left:0;
            position:absolute;
            background-color:rgba(0,0,0,.3);
            width:100%;
            height:100%;
        }
    }
    .state{
        width:100%;
        background:${props=> props.state};
        border-radius:4px;
        text-center;
        max-width:80px;
        text-align:center;
        font-size:11px;
        line-height:20px;
        font-weight:600;
    }
    
    .details{
        em{
            color:${COLORS.primary};
            margin-right:5px;
        }
    }
    
    .name{
        font-size:18px;
        font-weight:600;
    }
    .line{
        border-bottom:1px solid #999999; 
        margin:10px 0;
    }
`