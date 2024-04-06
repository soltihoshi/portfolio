import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import './App.css';

import Home from './component/Home';

export const ProjectData = React.createContext();

const projectText = [
    {
        id : 0,
        name : 'EZFit',
        img : './img/project_01.png',
        goal : '뜻대로 되는 건 하나도 없는 세상에서 오직 내 몸만은 나의 의지대로 통제할 수 있다던 어느 모델의 말에 큰 충격을 받았습니다. 그렇지만 평생 운동해본 적 없는 사람은 그 시작을 어떻게 해야 할지도 모르는 방황에 빠지고 맙니다. 그런 운동 초심자들의 가이드가 되는 어플을 제작하고 싶었습니다.',
        aim : '스스로의 운동량을 직관적으로 확인할 수 있도록 시각적인 지표를 우선해서 사용했습니다. 부수적으로 기초상식을 전하고, 챌린지로 운동 의욕을 북돋우면서 커뮤니티를 통해 여러 의견을 구할 수 있도록 영역을 나누어 유사SNS를 기획함으로서 어플리케이션의 사용성을 유지하는 원동력으로 삼았습니다. 이 과정에서 재촉하는 듯한 어조를 사용하거나, 강박을 부여하는 언어가 사용되지 않도록 많은 주의를 기울였습니다.',
        use : 'HTML CSS REACT',
        feel : '처음 진행해보는 팀프로젝트는 서로의 라이브러리들이 충돌하고, 데이터가 뒤섞이며, 클래스네임이 겹치는 등 엉망진창 대혼란 그 자체였습니다. 이 과정에서 서로간의 의사소통의 중요성과 깃 사용의 유용성을 체감할 수 있었습니다. 팀장으로서 서로의 작업속도를 인지하여 작업할당량을 배분하는 것과 마감기한에 맞추어 목표량을 달성할 수 있도록 상태를 조율하는 것을 배울 수 있는 기회였습니다. ',
        member : '4',
        url : 'https://ezfit-202c9.web.app/open',
        git : 'https://github.com/soltihoshi/protfolio_Ezfit.git'
    },
    {
        id : 1,
        name : '포트폴리오',
        img : './img/project_02.png',
        goal : '삶의 새로운 전환점을 맞이하는 날의 표지가 있다면 어떤 느낌일까, 어떻게 해야 보는 사람이 불편하지 않고 나 자신을 자신있게 내보일 수 있을까를 고민했습니다. 신입은 신입이라는 티를 낼 수 밖에 없으니, 헛된 깃털을 꽂아 꾸미는 까마귀가 되기 보다 비로소 백조로 되어질 미운 오리가 되려고 합니다.',
        aim : '신입 아르바이트생을 고용하던 기억을 떠올리며 어차피 신입은 모든 것을 가르쳐야 하기에 어떤 경험이 있고, 어떤 능력이 있는지를 단번에 전달할 수 있도록 간결함을 추구했습니다.',
        use : 'HTML CSS REACT',
        feel : '나를 소개한다는 것은 언제나 어렵습니다. 보이지 않는 자료를 객관적으로 판단하는 일을 해야 했고 또 그것을 타인에게 전달하기 위해 고심해야 했습니다. 이 과정에서 주변사람들이 보는 나에 대한 얘기를 들을 수 있었고, 많은 사랑을 느끼며 자신감을 얻을 수 있는 시간이었습니다.',
        member : '1',
        url : 'https://kmjportfolio.web.app',
        git : 'https://github.com/soltihoshi/portfolio'
    },
    {
        id : 2,
        name : '서브웨이',
        img : './img/project_03.png',
        goal : '건강유지를 목적으로 서브웨이를 자주 이용합니다. 그렇지만 홈페이지에서는 원하는 정보에 쉽게 접근할 수가 없었습니다. 그 불편함을 경험으로 영양성분 확인과 알레르기를 유발하는 재료의 유무를 메인 페이지에서 확인할 수 있도록 개선하고자 했습니다.',
        aim : '서브웨이의 시그니처 컬러를 넣되 혼란스럽지 않도록 깔끔하면서도 포인트가 되는 곳에만 적용하는 것을 최우선과제로 삼았습니다. 메인 배너와 샌드위치 메뉴가 전부 좌우 슬라이드가 되지만 메인 배너만 자동으로 이동하고, 메뉴는 이용자가 필요한 경우에만 이동이 되도록 했습니다.',
        use : 'HTML CSS JS',
        feel : '첫 구상이라 HTML의 구조를 작성하는데 혼선이 있었습니다. 어떤 것을 크게 묶어야 하는지 또 어떤 것을 독립적으로 두어야 하는지 고민했습니다. 덕분에 홈페이지를 구성하는 요소들의 구조를 눈에 익힐 수 있는 시간이 되었습니다.',
        member : '1',
        url : 'https://portsubway.netlify.app/',
        git : 'https://github.com/soltihoshi/protfolio_subway.git'
    },
    {
        id : 3,
        name : '미미월드',
        img : './img/project_04.png',
        goal : '어린시절 문방구 높이 걸려있는 마법소녀 장난감을 무척이나 갖고 싶어했던 기억이 있습니다. 그 추억으로 장난감 판매 사이트를 방문해보았으나 상품이 잘 부각되지 않는 점이 아쉬워서 개선해보고 싶었습니다.',
        aim : '단순히 물건이 널려있는 것과 장식장에 들어있는 것은 다르기 때문에 최대한 장난감을 진열해 둔 상품 같은 느낌을 내려고 했습니다. 가격과 소비자의 선호도처럼 구매에 직접적으로 연관되는 정보는 상세페이지로 넘어가지 않아도 확인할 수 있도록 꺼내두었습니다.',
        use : 'HTML CSS JS',
        feel : '머릿속으로 상상했던 구조를 피그마로 구현하는 것과, 피그마를 다시 CSS로 브라우저에 구현하는 것에 큰 갭이 있음을 알게 되었습니다. 원하는 모양을 만들기 위해 어떤 옵션을 어떻게, 어디에 부여해야 하는지 알 수 있는 경험이 되었습니다.',
        member : '1',
        url : 'https://portmimiworld.netlify.app/',
        git : 'https://github.com/soltihoshi/protfolio_mimiworld.git'
    },
    {
        id : 4,
        name : '울산관광',
        img : './img/project_05.png',
        goal : '대전과 울산은 노잼도시의 투톱으로 꼽힙니다. 대전에는 성심당이 있지만, 울산에는? 이라는 의문을 기반으로 울산 관광 사이트를 방문해 보았으나 통일된 색감과 자연, 경치 등 젊은이들이 향유할 수 있는 문화와 놀이거리가 주 요소로 다루어지지 않아 아쉬웠기 때문에 이 점을 개선하고자 했습니다.',
        aim : '보다 많은 사람들이 폭넓게 방문할 수 있도록 세대 전체는 물론 외국인도 이끌릴 수 있는 방안을 찾기 위해 다양한 복지와 지원을 앞세웠습니다. 그 후 여행이라는 테마를 주제로 삼고 그 속을 구경하고 싶은 사람, 호캉스를 즐기고 싶은 사람, 먹거리를 즐기고 싶은 사람처럼 큰 갈래로 나누어 그들이 원하는 것이 무엇일까? 라는 생각으로 접근해 보았습니다.',
        use : 'HTML CSS',
        feel : '한글을 모르는 사람이 지금 이 브라우저 화면을 확인하였을 때 과연 의미를 알아차릴 수 있을까? 라는 부분에 집중해서 보다 확실한 전달력을 위해 직관성을 높이는 쪽으로 구상하였습니다만, 같은 아이콘을 보더라도 다른 감상이 나오는 것을 보며 국제적으로 통용되는 사인을 알아보고, 그 의미를 고찰해볼 수 있는 기회를 얻을 수 있었습니다.',
        member : '1',
        url : 'https://portulsan.netlify.app/',
        git : 'https://github.com/soltihoshi/protfolio_ulsan.git'
    },
];


function App() {
  return (
    <ProjectData.Provider value = {projectText}>
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </div>
        </BrowserRouter>
    </ProjectData.Provider>
  );
}

export default App;
