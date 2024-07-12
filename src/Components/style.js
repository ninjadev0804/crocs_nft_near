import styled from 'styled-components';

export const IcoGrp = styled.div`
    img {
        width: 50px;
        margin: 0 20px;
    }
    @media only screen and (max-width: 1000px) {
        img {
            width: 40px;
            margin: 0 15px;
        }
    }
`;

export const NavigationStyled = styled.nav`
    background: #fff;
    padding: 20px 150px;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100%;
    display: flex;
    height: 160px;
    justify-content: space-between;
    align-items: center;
    color: white;
    @media only screen and (max-width: 1000px) {
        padding: 20px 20px;
        height: 130px;
    }
`

export const BodyContent = styled.div`
    background: url('../assets/background.png');
    padding: 0 150px 130px 150px;
    @media only screen and (max-width: 1000px) {
        padding: 30px;
    }
`;

export const ImgWrap = styled.div`
    width: 190px;
    height: 100%;
    @media only screen and (max-width: 1000px) {
        width: 150px;
    }
`

export const Footer = styled.div`
    padding: 0px 150px;
    font-size: 20px;
    p{
        color: white;
    }
    @media only screen and (max-width: 1000px) {
        padding: 20px 30px;
    }
`

export const ContentWrap = styled.div`
    display: flex;
    color: white;
    justify-content: space-between;
    @media only screen and (max-width: 1000px) {
        display: block;
    }
`

export const BtnWrap = styled.div`
    padding-top: 30px;
    text-align: center;
    @media only screen and (max-width: 1000px) {
        padding: 10px;
    }
`

export const ItemWrap = styled.div`
    width: 45%;
    margin: 50px 0;
    @media only screen and (max-width: 1000px) {
        width: 100%;
        margin: 30px 0;
    }
`

export const TotalTitle = styled.div`
    line-height: 96px;
    text-align: right;
    font-size: 40px;
    font-weight: 900;
    margin: 30px 0;
    @media only screen and (max-width: 1000px) {
        font-size: 30px;
        text-align: left;
    }
`

export const Title = styled.div`
    font-size: 50px;
    font-weight: 900;
    line-height: 96px;
    @media only screen and (max-width: 1000px) {
        font-size: 30px;
    }
`

export const Text = styled.div`
    font-size: 23px;
    margin: 20px 0;
`

export const ConnectBtn = styled.button`
    // font-size: 20px;
    width: fit-content;
    background: white;
    color: #098D16;
    height: 60px;
    border-radius: 50px;
    font-family: 'Poppins';
    font-style: normal;
    border: none;
    cursor: pointer;
    padding: 0 50px;
    font-weight: 800;
    font-size: 25px;
    line-height: 45px;
    &:hover {
        transition: all 0.2s ease-in-out 0s;
        transform: scale(1.05);
    }
`

export const MintSupply = styled.div`
    background: #3db1374d;
    border-radius: 50px;
    width: 400px;
    font-size: 50px;
    color: #3DB137;
    padding: 10px 20px;
    text-align: center;
    font-weight: bold;
    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`

export const SupplyWrap = styled.div`
    display: flex;
    justify-content: right;
`