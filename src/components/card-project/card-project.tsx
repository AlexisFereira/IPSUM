import React, {FC} from 'react';
import {Container} from "./syles";
import Flex from "../../ui/flex";
import Photo from "./../../img/building.jpg"
import {COLORS} from "../../ui/colors";

type Props = {
    project : {
        state:number;
        favorite:boolean;
        date:string;
        users:number;
        name:string;
        address:string;
        amount:string;
        mesures:string;
        photo:string;
        ppc:string;
        pcr:string;
        completed:string;
    }
}

const CardProyeject:FC<Props> = (props) => {

    let {
        state,
        favorite,
        date,
        users,
        name,
        address,
        amount,
        mesures,
        photo,
        ppc,
        pcr,
        completed,
    } = props.project

    let states:any = {
        1: {name:"Iniciado",color:COLORS.state.iniciado},
        2: {name:"No iniciado",color:COLORS.state.noiniciado},
        3: {name:"Detenido",color:COLORS.state.detenido},
        4: {name:"Finlizado",color:COLORS.state.finalizado},
    }



    return (
        <div className={"col-12 col-sm-6 col-md-4 col-lg-3 mb-4 "}>
            <Container photo={Photo} state={states[state].color}>
                <Flex className={"wc"} jc={"flex-start"} direction={"column"}>
                    <Flex className="wc photo p-3 p-lg-4" direction={"column"} flex={"1 0 auto"} jc={"space-between"}>
                        <div className="sombra"></div>
                        <Flex className={"wc "} alg={"flex-start"}>
                            <Flex jc={"flex-start"} flex={"1 0 80%"}>
                                <div className="state wc">{states[state].name}</div>
                                <div className={"wc pt-2"}>
                                    <span className={"me-3"}>
                                    <em className={"icon-calendar me-1"}></em>
                                        {date}
                                </span>
                                    <span>
                                    <em className={"icon-user me-1"}></em>
                                        {users}
                                </span>
                                </div>
                            </Flex>
                            <Flex flex={"0 0 20px"}>
                                <em className={`icon-start-${favorite ? 'solid':'line' } `}></em>
                            </Flex>
                        </Flex>
                        <Flex className={"wc"} jc={"flex-start"}>
                            <div className="name">{name}</div>
                            <div className="address">{address}</div>
                        </Flex>
                    </Flex>
                    <Flex className="details p-3 px-lg-4 wc" jc={"space-between"} flex={"0 0 auto"}>
                        <Flex>
                           <em className={"icon-dollar"}></em>
                            {amount}
                        </Flex>
                        <Flex>
                            <em className={"icon-rules"}></em>
                            {mesures}
                        </Flex>
                        <div className="line wc"></div>
                        <Flex flex={"0 0 30%"}>
                            <em className={"icon-check"}></em>
                            {completed}
                        </Flex>
                        <Flex flex={"0 0 30%"}>
                            <em className={"icon-ppc"}></em>
                            {ppc}
                        </Flex>
                        <Flex flex={"0 0 30%"}>
                            <em className={"icon-pcr"}></em>
                            {pcr}
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </div>
    )
}

export default React.memo(CardProyeject);