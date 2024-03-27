import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../component/Project.css';

import ProjectModal from './ProjectModal';
import {ProjectData} from '../App.js'

const Project = () => {

    const Pjdata = useContext(ProjectData);

    const [ismodal, setIsmodal] = useState(false); 
    const [projectselect, setProjectselect] = useState({}); 


    const opneModal = (project) => {
        setIsmodal(true);
        setProjectselect(project);
    };

    const settings = {
        customPaging: function(i) {
        return (
            <a className="sliderBtn">
            <img src={`img/project_0${i+1}.png`} />
            </a>
        );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const responsiveSettings = [
        {
          breakpoint: 1439,
          settings: 'unslick', 
        },
        {
          breakpoint: 99999,
          settings: settings,
        },
      ];

    return(
        <div className="Project">
            <h2 className="contentTitle">프로젝트</h2>
            <div className="subjectWrap">
                <Slider responsive={responsiveSettings}>
                    {
                        Pjdata.map((it)=>(
                            <div key = {it.id} className='pjWrap'>
                                <p className='pjName'>{it.id + 1}.{it.name}</p>
                                <div className='pjImg'>
                                    <img
                                        src={it.img}
                                        onClick={()=>{opneModal(it)}}
                                    />
                                    <p className="on pconly" onClick={()=>{opneModal(it)}}><button><span className="btnName">{it.name}</span> <br/> 자세히보기 </button></p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            {ismodal && <ProjectModal {...projectselect} setIsmodal={setIsmodal}/>}
        </div>
    );
};

export default Project;