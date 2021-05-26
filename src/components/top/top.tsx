import React, {FC} from 'react';
import Flex from "../../ui/flex";
import {Container} from "./styles";
import logo from "./../../img/logo.png";
import user from "./../../img/user.png";

const Top:FC = (props) => {
    return (
        <Container>
            <div className="container px-sm-0">
                <Flex className={"wc"} jc={"space-between"} alg={"stretch"}>
                    <Flex flex={"0 0 40px"} direction={"column"}>
                        <img src={logo} alt="" height={"24px"}/>
                    </Flex>
                    <Flex className={"top-right"}>
                        <button>
                            <em className={"icon-bell"}></em>
                            <span className="active"></span>
                        </button>
                        <button>
                            <em className={"icon-question"}></em>
                        </button>
                        <button>
                            <Flex className="user m-auto" direction={"column"}>
                                <img src={user} alt=""/>
                            </Flex>
                        </button>
                    </Flex>
                </Flex>
            </div>
        </Container>
    )
}

export default React.memo(Top);  


