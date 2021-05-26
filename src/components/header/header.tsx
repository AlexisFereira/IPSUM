import React, {FC} from 'react';
import Flex from "../../ui/flex";
import {Container} from "./styles";
import Logo2 from "./../../img/logo2.png";

type Props = {
    name:string;
    buildings:number;
    users:number;
    amount:string;
}

const Header:FC<Props> = (props) => {
    let {name, buildings, users, amount} = props

    return (
        <Container >
            <div className="container px-sm-0">
                <Flex className={"wc py-3"} alg={"flex-end"} jc={"space-between"}>
                    <Flex className="left-side mb-3 mb-lg-0  col-12 col-lg-7" jc={"flex-start"} >
                        <Flex className="logo" flex={"0 0 57px"}>
                            <img src={Logo2} alt=""/>
                        </Flex>
                        <Flex className="text ps-2 ps-sm-3" flex={"1 0 60%"}>
                            <div className="title wc">
                                {name}
                            </div>
                            <Flex className="details wc " jc={"flex-start"} flex={"1 0 "}>
                                <div className={"data-item"}>
                                    <em className={"icon-grua"}></em>
                                    {buildings}
                                </div>
                                <div className={"data-item"}>
                                    <em className={"icon-user"}></em>
                                    {users}
                                </div>
                                <div className={"data-item"}>
                                    <em className={"icon-dollar"}></em>
                                    {amount}
                                </div>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className="right-side col-12 col-lg-5 " jc={"flex-end"}>
                        <div className="search mb-3  mb-sm-0 mb-lg-0 col-sm-7 me-sm-3">
                            <input type="text" placeholder={"Buscar"}/>
                            <div className="icon">
                                <em className={"fa fa-search"}></em>
                            </div>
                        </div>
                        <div className="create col-12 col-sm-5">
                            <button className={"btn-primary wc"}>
                                <em className={"icon-plus"}></em>
                                <span className={"ms-3"}>Crear proyecto</span>
                            </button>
                        </div>
                    </Flex>
                </Flex>
            </div>
        </Container>
    )
}

export default React.memo(Header);