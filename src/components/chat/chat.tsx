import React, {FC} from 'react';
import {Container} from "./styles";
import Flex from "../../ui/flex";

const Chat:FC = (props) => {
    return (
        <Container>
            <div className="container cont position-relative">
                <Flex className="icon" direction={"column"}>
                    <em className={"icon-chat"}></em>
                </Flex>
            </div>
        </Container>
    )
}

export default React.memo(Chat);