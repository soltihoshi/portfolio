import { useRef, useState } from "react";
import Certificate from "./Certificate";
import My from "./My";
import Project from "./Project";
import Header from "./Header";
import Mainpicture from "./Mainpicture";
import Skill from "./Skill";
import styled from "styled-components";
import Footer from "./Footer";


const Home = () => {
    const myRef = useRef();
    const pjRef = useRef();
    const caRef = useRef();
    const skRef = useRef();

    return(
        <div className="Home">
            <Header myRef={myRef} pjRef={pjRef} caRef={caRef} skRef={skRef} />
            <div><Mainpicture /></div>
            <Boxwrap ref={myRef}><My /></Boxwrap>
            <Boxwrap ref={skRef}><Skill /></Boxwrap>
            <Boxwrap ref={pjRef}><Project /></Boxwrap>
            <Boxwrap ref={caRef}><Certificate /></Boxwrap>
            <div><Footer /></div>
        </div>
    );
};

export default Home;

const Boxwrap = styled.div`
padding-top : 80px;
`