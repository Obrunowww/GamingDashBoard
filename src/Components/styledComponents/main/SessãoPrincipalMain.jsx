import styled from "styled-components";

export const JogoPopular = styled.section`
display: flex;
flex-direction: column;
align-items: center;
background-image:radial-gradient(131.12% 107.86% at 50% 33.75%, #7BE8D5 3.95%, #00544C 59.04%, #92FFFD 85.27%);
width: 60%;
height: 260px;

.jogoPopularBackgound{
    width: 100%;
    height: 100%;
    border-radius: 100px;
    position: relative;
    display: flex;
    background-image: url("/images/JogoPopularBg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.reviews img{
    width: 50px;

}
.ImagemSpaceMarine{
    position: relative;
    width: 54%;
    height: 100%;
}
.ImagemSpaceMarine img{

    bottom: 3%;
    left: 10%;
    position: absolute;
    width:100%;
    height: 100%;
    scale: 1.06;
}
`
export const InfosJogoPopular = styled.div`
display: flex;
flex-direction: column;
padding-left: 2%;
justify-content: space-around;
width: 42%;

.infos{
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 45%;
}
.infos h1{
    font-size: 25px;
}
.infos p{
    font-size: 13px;
}
`

export const Plataformas = styled.div`
height: 15%;
width: 75%;
display: flex;
gap: 5%;
.Popular{
    display: flex;
    height: 100%;
    width: 55%;
    align-items: center;
    justify-content: space-around;
    border-radius: 72px;
    background: var(--accent-07, #3DBDA7);
    color: #393939;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.fogo{
    display: flex;
    margin-left: 2%;
    align-items: center;
    font-size: 25px;
}
p{
    margin-right: 2%;

}
button{
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 1);
    justify-content: center;
    border: none;
    width: 18%;
    border-radius: 50%;
    background: var(--second-10, #1D1E22);
    font-size: 22px;
}
`