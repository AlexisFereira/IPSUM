import React, {FC} from 'react';
import Flex from "../../../ui/flex";
import {Collapse} from 'react-collapse';
import {Container} from "./styles";

type Props = {
    open: boolean;
    handler:()=> void;
}

const FilterForm: FC<Props> = (props) => {
    return (

        <Container className={"wc"}>
            <Collapse isOpened={props.open}>
                <div className="container  py-4 px-sm-0">
                    <Flex className={"wc"}>
                        <Flex className="title" flex={"1 0 80%"} jc={"flex-start"}>
                            <em className={"icon-filter me-2"}></em>
                            Filtros y orden
                            <span className={"ms-2 grey"}>(Iniciado, De la a a la Z)</span>
                        </Flex>
                        <Flex flex={"0 0 auto"}>
                            <button  className={"btn-primary"} onClick={()=> props.handler()}>
                                <em className={"icon-close"}></em>
                            </button>
                        </Flex>
                    </Flex>
                    <form
                        action=""
                        className={"wc"}
                        onSubmit={(e:any)=>{
                            e.preventDefault();
                        }}>
                        <div className={"row py-3 py-lg-4"}>
                            <Flex className={"col-12 col-sm-6 col-lg-3 mb-2 mb-lg-0 field"}>
                                <label htmlFor="">Estado:</label>
                                <select name="" id=""></select>
                            </Flex>
                            <Flex className={"col-12 col-sm-6 col-lg-3 mb-2 mb-lg-0 field"}>
                                <label htmlFor="">Nombre:</label>
                                <select name="" id=""></select>
                            </Flex>
                            <Flex className={"col-12 col-sm-6 col-lg-3 mb-2 mb-lg-0 field"}>
                                <label htmlFor="">Fecha:</label>
                                <select name="" id=""></select>
                            </Flex>
                            <Flex className={"col-12 col-sm-6 col-lg-3 mb-2 mb-lg-0 field"}>
                                <label htmlFor="">Tamaño:</label>
                                <select name="" id=""></select>
                            </Flex>
                        </div>
                        <div className={"row justify-content-end"}>
                            <Flex  className={"col-12 col-sm-6 col-lg-4 col-xl-3 pe-sm-2 mb-2 mb-sm-0"}>
                                <button className={"btn-line wc"}>
                                    <em className={"icon-clear me-2"}></em>
                                    Limpiar Filtros
                                </button>
                            </Flex>
                            <Flex className={"col-12 col-sm-6 col-lg-4 col-xl-3 ps-sm-2"}>
                                <button className={"btn-primary wc"}>
                                    <em className={"icon-filter me-2"}></em>
                                    Aplicar Filtros
                                </button>
                            </Flex>
                        </div>
                    </form>
                </div>
            </Collapse>
        </Container>

    )
}

export default React.memo(FilterForm);