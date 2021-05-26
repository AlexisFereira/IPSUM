import React, {FC} from 'react';
import {Container} from "./styles";

const Chat:FC = (props) => {
    return (
        <Container className={"ro"}>
            <div className="container cont position-relative">
                <div className="icon">
                    <em className={"icon-chat"}></em>
                </div>
            </div>
        </Container>
    )
}

export default React.memo(Chat);