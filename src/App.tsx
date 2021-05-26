import React from 'react';
import Top from "./components/top/top";
import Header from "./components/header/header";
import Filters from "./components/filters/filters";
import RenderPrjects from "./components/renderProjects/renderProjects";
import Footer from "./ui/footer";
import {Projects} from "./projects";
import Chat from "./components/chat/chat";


function App() {


  return (
    <div className="main-container">
        <Top/>
        <Header
            name={"Quierocasa"}
            buildings={25}
            users={71}
            amount={'891.308.499.537 MXN'}
        />
        <Filters/>

        <div className="content">
            <RenderPrjects projects={Projects}/>
        </div>

        <Chat/>
        <Footer/>
    </div>
  );
}

export default App;
