import '../component/Certificate.css'

const Certificate = () => {
    return(
        <div className="certificate">
            <h2 className="contentTitle">자격 및 수료</h2>
            <ul className="cerList">
                <li><span className="listBold">·</span>JLPT N1</li>
                <li><span className="listBold">·</span>1종 보통 운전면허</li>
                <li><span className="listBold">·</span>도쿄 JCLI 일본어학교 <br />&nbsp;워킹코스 수료 </li>
                <li><span className="listBold">·그린컴퓨터 아카데미</span> <br />&nbsp;반응형 웹&프론트엔드 개발 실무양성 과정 수료 </li>
                <li><span className="listBold">·TEO&#39;s SPRINT</span> <br /> &nbsp;17기 수료</li>
            </ul>
        </div>
    );
};

export default Certificate;