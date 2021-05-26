import React, {FC, useState} from 'react';
import {Container} from "./styles";
import Flex from "../../ui/flex";
import FilterForm from "./filter-form/filter-form";

const Filters:FC = (props) => {

    let [state,set]= useState(false)

    return (
        <Container>
            <FilterForm open={state} handler={()=> set(false) } />
            <div className="container px-sm-0 py-4">
                <Flex className={"wc"} jc={"space-between"}>
                    <Flex className={"left-side mb-3 mb-sm-0"} flex={"1 0 60%"} jc={"flex-start"}>
                        <p className={"proyectos mb-0"}>
                            <span className={"icon-grua icon"}></span>
                            Proyectos
                            <span className={"ms-2"}>(Todos)</span>
                        </p>
                    </Flex>
                    <Flex className={"right-side"} jc={"flex-end"} flex={"1 0 150px"}>
                        <button className={"btn-primary filter"} onClick={()=> set(true)}>
                            <em className={"icon-filter"}></em>
                        </button>
                        <Flex className="grid-controls ms-4">
                            <button className={"btn-primary"}>
                                <em className={"icon-grid-scuare"}> </em>
                            </button>
                            <button className={"btn-primary"}>
                                <em className={"icon-grid-list"}> </em>
                            </button>
                        </Flex>
                    </Flex>
                </Flex>
            </div>
        </Container>
    )
}

export default React.memo(Filters);