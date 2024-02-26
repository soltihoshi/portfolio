import styled from "styled-components";

const Footer = () => {
    return(
        <Fborder>
            <Flex className="mail">
                <Email>메일</Email>
                <Font>mumukang8524@gmail.com</Font>
            </Flex>
        </Fborder>
    );
};

export default Footer;

const Fborder = styled.div`
    margin-top : 100px;
    height : 60px;
    background-color : #333;
`
const Email = styled.div`
    background-image: url(./img/icon_mail.png);
    width: 30px;
    height: 30px;
    padding-top : 27px;
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
    text-indent: -9999px;
`
const Font = styled.div`
    color:#fff;
    margin-left : 10px;
    font-size : 15px;
    font-weight : 600;
    line-height: 3.6em;
`
const Flex = styled.div`
    display: flex;
    justify-content: center;
`