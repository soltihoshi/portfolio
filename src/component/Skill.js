const Skill = () => {
    return(
        <div className="Skill">
            <div className="mySkill">
                <h2 className="contentTitle">구현능력</h2>
                <div className="skillFlex">
                    <div><img src="./img/skill_html.png"/></div>
                    <div><img src="./img/skill_css.png"/></div>
                    <div><img src="./img/skill_js.png"/></div>
                    <div><img src="./img/skill_jq.png"/></div>
                    <div><img src="./img/skill_node.png"/></div>
                    <div><img src="./img/skill_ts.png"/></div>
                    <div><img src="./img/skill_git.png"/></div>
                    <div><img src="./img/skill_ps.png"/></div>
                    <div className="react">
                        <img className="mo"src="./img/skill_react.png"/>
                        <img className="pc"src="./img/skill_react_pc.png"/>
                    </div>
                    <div className="figma">
                        <img className="mo"src="./img/skill_figma.png"/>
                        <img className="pc"src="./img/skill_figma_pc.png"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;