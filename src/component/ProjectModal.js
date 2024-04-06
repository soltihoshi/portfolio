import '../component/ProjectModal.css';

const ProjectModal = ({id, name, img, goal, aim, use, feel, setIsmodal, member, url, git}) => 
{
    return(
        <div className="ProjectModal">
            <div className="pjmWrap">
                <div className="pjContent">
                    <p className="name">{name}</p>
                    <div className="modalImg">
                        <img src={img}/>
                    </div>
                    <div className="member">작성인원 : {member}</div>
                    <div className="goal">
                        <p className="textTitle">기획 의도</p>
                        <p className="textContent">&nbsp;&nbsp;{goal}</p>
                    </div>
                    <div className="aim">
                        <p className="textTitle">제작 목표</p>
                        <p className="textContent">&nbsp;&nbsp;{aim}</p>
                    </div>
                    <div className="use">
                        <p className="textTitle">사용 언어</p>
                        <p className="textContent">&nbsp;&nbsp;{use}</p>
                    </div>
                    <div className="feel">
                        <p className="textTitle">느낀점</p>
                        <p className="textContent">&nbsp;&nbsp;{feel}</p>
                    </div>
                    <div className="pjLink">
                        <p className="textTitle">배포링크</p>
                        <div className="textContent">
                            <p>&nbsp;&nbsp;깃 : <a href={git}>{git}</a></p>
                            <p>&nbsp;&nbsp;배포 : <a href={url}>{url}</a></p>
                        </div>
                    </div>
                    <div className="closeBtn" onClick={()=>{setIsmodal(false)}}>
                        X
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProjectModal;