import { useEffect, useState } from "react";
import './My.css';

const Header =({myRef, pjRef, caRef, skRef, siRef}) => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        window.scrollY >= 50 ? setScroll(true) : setScroll(false);
    };

    const moveMyRef = () => {
        if (myRef.current) {
          myRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };
    const movePjRef = () => {
        if (pjRef.current) {
            pjRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };
    const moveCaRef = () => {
        if (caRef.current) {
            caRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };
    const moveSkRef = () => {
        if (skRef.current) {
            skRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    return(
        <div className="HeaderWrap">
            <div className={scroll ? 'Header wh' : 'Header'} >
                <div className = {scroll ? 'HeaderLogo wh' : 'HeaderLogo'}>
                    KMJ's <br/> FE Portfolio
                </div>    
                <div className="iconmo mo">아이콘</div>
                <div className="mobmenu mo">
                    <div className="menuCate" onClick={moveMyRef}>자아심상</div>
                    <div className="menuCate" onClick={moveSkRef}>구현능력</div>
                    <div className="menuCate" onClick={movePjRef}>작업 결과물</div>
                    <div className="menuCate" onClick={moveCaRef}>자격 및 수료</div>
                </div>
            </div>
            <div className="headerMenu pc">
                <div className={scroll ? 'menuIn' : 'menuIn wh' }>
                    <div className="menuCate" onClick={moveMyRef}>자아심상</div>
                    <div className="menuCate" onClick={moveSkRef}>구현능력</div>
                    <div className="menuCate" onClick={movePjRef}>작업 결과물</div>
                    <div className="menuCate" onClick={moveCaRef}>자격 및 수료</div>
                </div>
            </div>
            
        </div>
    );
};
export default Header;