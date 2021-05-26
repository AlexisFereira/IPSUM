import React, {FC} from 'react';
import CardProyeject from "../card-project/card-project";

type Props ={
    projects:any;
}

const RenderPrjects:FC<Props> = (props) => {
    return (
        <div className={"container px-sm-0"}>
            <div className={"row align-start "} >
                {props.projects.length &&
                props.projects.map((ele:any,key:number)=>
                    <CardProyeject key={key} project={ele}/>
                )}
                <div className="py-5">

                </div>
            </div>
        </div>
    )
}

export default React.memo(RenderPrjects);