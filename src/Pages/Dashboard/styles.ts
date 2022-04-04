import styled from "styled-components";
import logo from "../../imagens/weg-logo.png";
import wms from "../../imagens/wms.png" ;
import grafico from "../../imagens/background-prod.png" ;
import val from "../Dashboard/index";



export const Container = styled.div`
@-webkit-keyframes listras-anim {
from {background-position:40px 0}
to {background-position:0 0}
}
@-moz-keyframes listras-anim {
from {background-position:40px 0}
to {background-position:0 0}
}
@-o-keyframes listras-anim {
from {background-position:40px 0}
to {background-position:0 0}
}
@keyframes listras-anim {
from {background-position:40px 0}
to {background-position:0 0}
}


 
`;
export const Dash = styled.div`
height: 95%;
width: 99%;
position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.3);
    
  


.float-right{
  float: right;
}
.float-left{
  float: left;
}
.divsLaterais{
  width: 27.5%;
  height: 80%;
}
.divCentral{
  width: 45%;
  height: 80%;
}
.divInferior{
  width: 100%;
  height: 20%;
}
.horario{
  width:  82%;
  height: 6%;
  padding-right: 2.5%;
}
.relogio{
  margin-top:1.4vh;
  font-size: 2vh;
}
.logo{
  margin-top: 1%;
  margin-left: 0.5%;
  height: 6%;
  width: 17%;
  background-image: url(${logo});
  background-size: contain;
  
  background-repeat: no-repeat;

}
.Titleshine{
  text-align: center;
  font-size: 1.5vh;
  text-shadow: 0 0 0.6em rgb(168, 226, 255), 0 0 0.6em rgb(168, 226, 255);
  margin-bottom: 1vh;
}
.WMS{
  margin-top: 4%;
  margin-left: 2%;
  height: 6%;
  width: 17%;
  background-image: url(${wms});
  background-size: contain;
  
  background-repeat: no-repeat;

}
.colorAtrasado {
  stroke: red;
  fill: red;
  color: red;
}
.colorEmDia {
  stroke: #00ff04;
  fill: #00ff04;
  color: #00ff04;
}
/* PRODUÇÃO DO DIA >>>>> */
.producaoDia{
  margin-top: 3%;
  height: 50%;
  width: 95%;
  border-radius: 1.5vh;
  margin-left: 2.5%;
  padding-top: 2%;
  border-right: 0.3vh solid rgba(201, 201, 201, 0.3);
  border-left: 0.3vh solid rgba(201, 201, 201, 0.3);
}
.producao{
  width: 100%;
  height: 30%;
  padding-left: 5%;
  
  .CircularProgressbar {
  margin-top: 4%;
  height: 60%;
  float: left;
}

.CircularProgressbar .CircularProgressbar-trail {
  stroke: rgba(140, 140, 140, 0.2);
  stroke-linecap: round;
  
}

.CircularProgressbar-path {

  stroke-linecap: round;
  -webkit-transition: stroke-dashoffset 0.5s ease 0s;
  transition: stroke-dashoffset 0.5s ease 0s;
}



.CircularProgressbar .CircularProgressbar-text {
  
  font-size: 150%;
  dominant-baseline: middle;
  text-anchor: middle;
}

.progress1 {
  color: #ffffff;
  stroke: #ffffff;
  fill: #3e98c7;
}
.progress2 {
  stroke: #3e98c7;
  color: #3e98c7;
  fill: #3e98c7;
}
.progress3 {
  stroke: #ff0000;
  color: #ff0000;
  fill: #3e98c7;
}

.producaoTitle {
  width: 65%;
  height: 30%;
  padding-top: 5%;
font-size: 1.3vh;
margin-left: 2vh;
}
.producaoNumber {
  font-size: 3.8vh;
  margin-left: 1.6vh;
}
.producaoDesc {
  font-size: 1.2vh;
  margin-top: 2.8vh;
  margin-left: 2%;
  color: rgba(99, 99, 99, 1);
}

/* <<<<< PRODUÇÃO DO DIA */

/* PRODUÇÃO/PREPARAÇÃO TURNO >>>>> */
.producaoTurno{
  margin-top: 4%;
  height: 35%;
  width: 95%;
  border-radius: 1.5vh;
  margin-left: 2.5%;
  border-right: 0.3vh solid rgba(201, 201, 201, 0.3);
  border-left: 0.3vh solid rgba(201, 201, 201, 0.3);
}

.produzidoTurno1 {
  width: 26vh;
  height: 40%;
  margin-top: 3%;
  padding-left: 25%;

}
.produzidoTurno2 {
  width: 26vh;
  height: 40%;
  padding-left: 25%;
}
.fontProducaoTurno {
  font-size: 2.5vh;
  margin-right: 5%;
  width: 5vh;
}
.separacao {
  width: 1vh;
  padding-left: 3%;
  font-size: 2.5vh;
  margin-right: 5%;
}
.colorProgramado{
  color: #3e98c7;
}

/* <<<<< PRODUÇÃO/PREPARAÇÃO TURNO */

/* DIV CENTRAL >>>>> */

.status {
  color: #00ff04;
  text-align: center;
  margin-top: 3%;
  text-shadow: 0 0 0.6em #00ff04, 0 0 0.6em #00ff04;
  height: 5%;
}
.graficoCentral {
  margin-top: 5%;
  height: 35vh;
  width: 35vh;
  position: absolute;
        top: 20%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%) }
};
 .circle1 {
  position: absolute;
  margin: auto;
  height: 35vh;
  width: 35vh;
  border: 0.2vh;
  border-style: dashed solid dashed solid;
  border-radius: 50%;
  box-shadow: 0em 0em 2vh 1vh rgba(255, 255, 255, 0.2);
 }
 .circle2 {
  position: absolute;
  margin-top: 0.4vh;
  margin-left: 0.6vh;
  height: 34vh;
  width: 34vh;
  border: 0.8vh;
  border-style: double;
  border-radius: 50%;
  border-color: rgb(255 0 0 / 100%) rgb(255 0 0 / 100%) rgb(46 204 0 / 100%) transparent;
    transform: rotate( 270deg);
  box-shadow: -3vh 0em 3vh 0.5vh rgba(255, 0, 0, 0.4) inset ;
 }
 .graficoCentral {
   position: absolute;
 }

 
 .progressBarCenter {
   background-color: red;
   margin-top:0.5vh;
   margin-left:0.5vh;
   border-radius: 50%;
   position: absolute;
   height: 34vh;
   width: 34vh;
 }
 .circle3 {
  position: absolute;
  margin-top: 4.5vh;
  margin-left: 4.5vh;
  height: 26vh;
  width: 26vh;
  border: 0.8vh;
  border-style: double;
  border-radius: 50%;
  border-color: rgb(255 0 0 / 100%) rgb(46 204 0 / 100%) rgb(86 202 245 /100%) rgb(255 0 0 / 100%);
  box-shadow: 0vh 0em 4vh 0.6vh rgba(255, 255, 255, 0.4) inset ;

}
.imagemGrafico {
  background-image: url(${grafico});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  margin-top: 5.5vh;
  margin-left: 5.5vh;
  height: 24vh;
  width: 24vh;
  border: 0.8vh;
  border-radius: 50%;
  
}


/* <<<<< DIV CENTRAL */

/* PREPARAÇÃO PROGRAMADA DO DIA >>>>> */

.preparacaoDoDia{
  margin-top: 10%;
  height: 18%;
  width: 95%;
  border-radius: 1.5vh;
  margin-left: 2.5%;
  border-right: 0.3vh solid rgba(201, 201, 201, 0.3);
  border-left: 0.3vh solid rgba(201, 201, 201, 0.3);
}

.preparacao{
  height: 32%;
  padding-left: 2.5%;
}
.preparacaoTempo{
  font-size: 3vh;
}
.preparacaoDesc{
  font-size: 1.2vh;
  margin-top: 2vh;
  margin-left: 2%;
  color: rgba(99, 99, 99, 1);
}

/* <<<<< PREPARAÇÃO PROGRAMADA DO DIA */

/* PRINCIPAIS MOTIVOS DE PARADAS DO DIA >>>>>*/

.motivosParadasDia{
  margin-top: 5%;
  height: 48vh;
  width: 95%;
  border-radius: 1vh;
  margin-left: 2.5%;
  border: 0.3vh solid rgba(201, 201, 201, 0.3);
  box-shadow: 0em 0em 2vh 0.4vh rgba(255, 255, 255, 0.6);
  padding-top: 3%;
}
.divMotivo{
  margin-bottom: 1.5vh;
}
.motivo{
  font-size: 2vh;
  margin-left: 2vh;
}
.progresso.ativa .progresso-barra {
	-webkit-animation: listras-anim 2s linear infinite;
	-moz-animation: listras-anim 2s linear infinite;
	-ms-animation: listras-anim 2s linear infinite;
	-o-animation: listras-anim 2s linear infinite;
	animation: listras-anim 2s linear infinite
}
.progresso {
	overflow: hidden;
	height: 2vh;
  width: 90%;
	background-color: rgba(231, 231, 231, 0.1) ;
  
}
.progresso-barra {
	height: 100%;
	background-color: rgb(156, 0, 0);
	-webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,.15);
	box-shadow: inset 0 -1vh 0 rgba(0,0,0,.15);
	-webkit-transition: width .6s ease;
	transition: width .6s ease;
  border-radius: 0.3vh;
  border: 0.12vh solid rgba(255, 0, 0, 0.6);
  box-shadow: 0em 0em 2vh 0.5vh rgba(255, 0, 0, 0.6);
}
.progresso-pai .progresso-barra {
	background-image: linear-gradient(45deg, rgba(255,255,255,.3), transparent 25%, transparent 50%, rgba(255,255,255,.3), rgba(255,255,255,.3), transparent 75%, transparent);
	background-size: 2vh 2vh;
}

/* <<<<< PRINCIPAIS MOTIVOS DE PARADAS DO DIA */

/* DESDOBRAMENTO DE EVENTOS DO DIA >>>>>*/
.desdobramentoEventosDia{
  margin-top: 1%;
  height: 85%;
  width: 98%;
  margin-left: 1%;
  border-radius: 2vh;
  border: 0.3vh solid rgba(201, 201, 201, 0.3);
  box-shadow: 0em 0em 2vh 0.4vh rgba(255, 255, 255, 0.6);
}


`
