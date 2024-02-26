import { useEffect, useRef, useState } from 'react';
import '../component/My.css';

const My = () => {
    return(
        <div className="My">
            <div className="content">
                <h2 className="contentTitle">자아심상</h2>
                <div className="myCatch">생각하는 것을 멈추지 않는다면 해답은 반드시 찾을 수 있다. 때때로 노력에 배신당한다 해도 그것이 노력하지 않을 이유가 되지 않는다. 그렇게 앞길로 향하는 것에 두려움이 없고 새로운 것을 찾아 떠나는 일에 망설임이 없습니다.<br/><br/>  길을 따라 걸음을 옮길 줄 아는, <br/>  저는 <span className="bold">반드시 끝을 보는 프론트엔드 개발자</span> 입니다.</div>
            </div>
            <div className="myKindly">
                <img src="./img/My_type.png"/>
            </div>
        </div>
    );
};

export default My;