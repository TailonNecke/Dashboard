import styled, {css} from "styled-components";
import logo from "../../imagens/weg-logo.png";
import wms from "../../imagens/wms.png";
import grafico from "../../imagens/background-prod.png";
import graficoNumero from "../../imagens/graficoNumeros.png";

interface ScreenProps {
  tamanho: boolean,
  tamanhoMax: boolean,
};


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

export const Dash = styled.div<ScreenProps>`
${(props) =>
    !props.tamanho &&
    css`   
  
  @keyframes voar {
    0% {
      margin-top: -50px;
    }
    100% {
      margin-top: 30px;
    }
  } 

 flex: 1;
  position: absolute;
  display: none;

  .divSuperior {
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    width: 100%;
    height: 8.5vh;
  }
  .divCentral{
  position: absolute;
  top: 9vh;
    left: 0;
    right: 0;
    margin: auto;
  width: 100%;
  height: 70vh;
}
.CircularProgressbar {
  margin-top: 4%;
  height: 60%;
  float: left;
}

.CircularProgressbar-trail {
  stroke: rgba(140, 140, 140, 0.2);
  stroke-linecap: round;
  
}

.CircularProgressbar-path {

  -webkit-transition: stroke-dashoffset 0s ease 0s;
  transition: stroke-dashoffset 0s ease 0s;
}



.CircularProgressbar .CircularProgressbar-text {
  
  font-size: 150%;
  dominant-baseline: middle;
  text-anchor: middle;
}
  /* DIV SUPERIOR >>>>> */
.WMS{
  position: absolute;
  top: 2vh;
  left: 1vh;
  height: 35%;
  width: 20%;
  background-image: url(${wms});
  background-size: contain;
  background-repeat: no-repeat;
}
.status {
  position: absolute;
  left: 0;
  right: 0;
  top: 5.5vh;
  margin: auto;
  color: #00ff04;
  text-align: center;
  text-shadow: 0 0 0.6em #00ff04, 0 0 0.6em #00ff04;
  height: 5%;
}
.horario{
  display: none;
  position: absolute;
  top: 0.7vh;
  right: 10vh;
  height: 80%;
  width: 11.5%;
}
.relogio{
  position: absolute;
  margin-top:1.4vh;
  font-size: 2.5vh;
}
.logo{
  position: absolute;
  top: 0.7vh;
  right: 1vh;
  height: 65%;
  width: 10%;
  background-image: url(${logo});
  background-size: contain;
  
  background-repeat: no-repeat;

}
/* <<<<< DIV SUPERIOR */
/* DIV CENTRAL >>>>> */

.graficoCentral {
  height: 35%;
  width: 35%;
  position: absolute;
  top: 15%;
  left: 1.5vh;
};
.graficoPreparacao {
  margin-top: 13vh;
  height: 35vh;
  width: 62vh;
  position: absolute;
  top: 8%;
  left: 30%;
  transform: translate(-50%, -50%) 
};
.circlePreparacao1 {
  position: absolute;
  right: 0;
  height: 17.5vh;
  width: 17.5vh;
  border: 0.2vh;
  border-style: dashed solid dashed solid;
  border-radius: 50%;
  box-shadow: 0em 0em 2vh 1vh rgba(255, 255, 255, 0.2);
 }
 .circlePreparacao2 {
  position: absolute;
  right: 0.5vh;
  top: 0.5vh;
  height: 16.5vh;
  width: 16.5vh;
  border: 0.8vh;
  border-style: double;
  border-radius: 50%;
  border-color: rgb(255 0 0 / 100%) rgb(255 0 0 / 100%) rgb(46 204 0 / 100%) transparent;
  transform: rotate( 270deg);
  box-shadow: 0vh 0.8vh 2vh 0.1vh rgba(255, 0, 0, 0.5) inset, 0vh -0.8vh 2vh 0.1vh rgba(0, 255, 0, 0.5) inset ;

 }
 .progressGraficoPreparacao{
  overflow:hidden;
  position: absolute;
  right: 0.5vh;
  top: 0.5vh;
  width: 16.5vh;
  height: 16.5vh;
  border-radius: 50%;
  transform: rotate( -135deg);
}
.progressBarPreparacao {
   margin-top: -0.7vh;
   margin-left: -0.7vh;
   position: absolute;
   border-radius: 50%;
   height: 17.8vh;
 }
 .divBarraPreparacao {
  right: 0;
  position: absolute;
  border-radius: 50%;
  height: 17.5vh;
  width: 17.5vh;
  background-color: rgba(0, 255, 0, 0);
}
.barraPreparacao{
  box-shadow: 0vh 0em 1vh 0.3vh rgba(194, 251, 252, 0.6);
  height: 2.5vh;
  width: 0.3vh;
  border-radius: 10vh;
  background-color: white;
  position: absolute;
  left: 50%;
    margin-right: -50%;
    margin-top: 1.6vh;
    transform: translate(-50%, -50%) 
}
.preparacaoPorcento{
   font-size: 4vh;
   position: absolute;
   left: 50%;
    margin-right: -50%;
    margin-top: 45%;
    transform: translate(-50%, -50%) 
 }
 .preparacaoPorcentoDesc{
   font-size: 1vh;
   position: absolute;
   color: rgba(99, 99, 99, 1);
   left: 50%;
    margin-right: -50%;
    margin-top: 60%;
    transform: translate(-50%, -50%) 
 }
 .circle1 {
  justify-content: center;
  position: absolute;
  margin: auto;
  height: 100%;
  width: 100%;
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
    transform: rotate( 270deg);
 }

.imgNumeros{
  background-image: url(${graficoNumero});
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
  position: absolute;
  height: 38vh;
  width: 38vh;
  margin-left: -1.4vh;
  margin-top: -0.6vh;
}

 .progressGraficoMaior{
  overflow:hidden;
  background-color: rgba(0, 255, 0, 0);
  position: absolute;
  width: 97%;
  height: 97%;
  border-radius: 50%;
  transform: rotate( -135deg);
  margin-top: 0.45vh;
  margin-left: 0.7vh;
}

 .producaoPorcento{
   font-size: 8vh;
   position: absolute;
   left: 50%;
    margin-right: -50%;
    margin-top: 45%;
    transform: translate(-50%, -50%) 
 }
 .producaoPorcentoDesc{
   font-size: 2vh;
   position: absolute;
   color: rgba(99, 99, 99, 1);

   left: 50%;
    margin-right: -50%;
    margin-top: 60%;
    transform: translate(-50%, -50%) 
 }
 .progressBarCenterMaior {
    stroke-width:10vh ;
   margin-top: -2.3vh;
   margin-left:-2.3vh;
   position: absolute;
   height: 38.5vh;
 }
 .progressGraficoMenor{
  overflow:hidden;
  position: absolute;
  width: 74.5%;
  height: 74.5%;
  border-radius: 50%;
  transform: rotate( -135deg);
  margin-top: 4.45vh;
  margin-left: 4.5vh;
}

 
 .progressBarCenterMenor {
   margin-top: -1.5vh;
   margin-left:-1.5vh;
   text-transform: rotate( 135deg);
   position: absolute;
   height: 29vh;
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
  box-shadow: 0vh 0em 4vh 0.6vh rgba(255, 255, 255, 0.4) inset ;

}
.divBarra {
  background-color: red;
  position: absolute;
  height: 100%;
  width: 100%;
}
.barra{
  box-shadow: 0vh 0em 1vh 0.3vh rgba(194, 251, 252, 0.6);
  height: 5vh;
  width: 0.8vh;
  border-radius: 10vh;
  background-color: white;
  position: absolute;
  left: 50%;
  margin-right: -50%;
  margin-top: 3vh;
  transform: translate(-50%, -50%) 
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

.botaoCustosEsquerda{
  position:absolute;
  bottom: 3.5vh;
  left: 0;
  border-bottom-right-radius: 3vh;
  border-top-right-radius: 3vh;
  height: 15vh;
  width: 5vh;
  background-color: rgba(255, 255, 255, 0.3);
}
.botaoCustosDireita{
  position:absolute;
  bottom: 3.5vh;
  right: 0;
  border-bottom-left-radius: 3vh;
  border-top-left-radius: 3vh;
  height: 15vh;
  width: 5vh;
  background-color: rgba(255, 255, 255, 0.3);
}
.ineficienciaCusto {
  display: none;
  position: absolute;
  bottom: 12.5vh;
  left: 0.5vh;
  height: 11vh;
  width: 37%;
  border-radius: 1vh;
  border-left: 0.3vh solid rgba(201, 201, 201, 0.3);
}
.preparacaoCusto {
  display: none;
  position: absolute;
  bottom: 1vh;
  left: 0.5vh;
  height: 11vh;
  width: 37%;
  border-radius: 1vh;
  border-left: 0.3vh solid rgba(201, 201, 201, 0.3);
}
.custoTotal{
  position: absolute;
  bottom: 5.2vh;
  left: 0;
  right: 0;
  margin: auto;
  height: 12vh;
  width: 15vh;
  border-radius: 3vh;
  border: 0.35vh dashed rgba(255, 0, 0, 1);
}
.bordaInterna{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 11vh;
  width: 14vh;
  border-radius: 3vh;
  border: 0.7vh double rgba(255, 0, 0, 1);
  box-shadow: 0vh 0em 2vh 0.5vh rgba(255, 0, 0, 1);
}
.custoTitle{
  text-shadow: 0 0 0.6em rgb(255, 0, 0), 0 0 0.6em rgb(255, 0, 0),
              -0.2vh -0.2vh 0vh black, 
              -0.2vh 0.2vh 0vh black,                    
              0.2vh -0.2vh 0vh black,                  
              0.2vh 0vh 0vh black;
  color: red;
  position: absolute;
  top: 0;
  bottom:0;
  margin: auto;
  width: 11vh;
  height: 30%;
  font-size: 1.5vh;
}
.custoDesc1{
  text-shadow: 0 0 0.6em rgb(255, 0, 0), 0 0 0.6em rgb(255, 0, 0),
              -0.2vh -0.2vh 0vh black, 
              -0.2vh 0.2vh 0vh black,                    
              0.2vh -0.2vh 0vh black,                  
              0.2vh 0vh 0vh black;
  color: red;
  position: absolute;
  top: 2vh;
  right: 0;
  margin: auto;
  width: 11vh;
  height: 1.5vh;
  font-size: 1.6vh;
}
.custoDesc2{
  text-shadow: 0 0 0.6em rgb(255, 0, 0), 0 0 0.6em rgb(255, 0, 0),
              -0.2vh -0.2vh 0vh black, 
              -0.2vh 0.2vh 0vh black,                    
              0.2vh -0.2vh 0vh black,                  
              0.2vh 0vh 0vh black;
  color: red;
  position: absolute;
  top: 0;
  bottom:0;
  right: 0;
  margin: auto;
  width: 11vh;
  height: 1.5vh;
  font-size: 1.6vh;
}
.custoDesc3{
  text-shadow: 0 0 0.6em rgb(255, 0, 0), 0 0 0.6em rgb(255, 0, 0),
              -0.2vh -0.2vh 0vh black, 
              -0.2vh 0.2vh 0vh black,                    
              0.2vh -0.2vh 0vh black,                  
              0.2vh 0vh 0vh black;
  color: red;
  position: absolute;
  bottom:2vh;
  right: 0;
  margin: auto;
  width: 11vh;
  height: 1.5vh;
  font-size: 1.6vh;
}
.custoTotalTop{
  font-size: 1.5vh;
  text-align: center;
  color: rgba(99, 99, 99, 1);
  width: 5vh;
  height: 1.5vh;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
}
.custoTotalNumero{
  text-shadow: 0 0 0.6em rgb(255, 0, 0), 0 0 0.6em rgb(255, 0, 0),
              -0.2vh -0.2vh 0vh black, 
              -0.2vh 0.2vh 0vh black,                    
              0.2vh -0.2vh 0vh black,                  
              0.2vh 0vh 0vh black;
  font-size: 2.5vh;
  text-align: end;
  color: red;
  width: 7vh;
  height: 2.5vh;
  position: absolute;
  left: 0.2vh;
  top: 0;
  bottom: 0;
  margin: auto;
}
.custoTotalDecimal{
  text-shadow: 0 0 0.6em rgb(255, 0, 0), 0 0 0.6em rgb(255, 0, 0),
              -0.2vh -0.2vh 0vh black, 
              -0.2vh 0.2vh 0vh black,                    
              0.2vh -0.2vh 0vh black,                  
              0.2vh 0vh 0vh black;
  font-size: 1.5vh;
  padding-top: 1vh;
  color: red;
  width: 5vh;
  height: 2.5vh;
  position: absolute;
  right: 0vh;
  top: 0;
  bottom: 0;
  margin: auto;
}
.custoTotalBottom{
  color: rgba(99, 99, 99, 1);
  font-size: 1.5vh;
  text-align: center;
  width: 10vh;
  height: 1.5vh;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1vh;
  margin: auto;
}
.paradaCusto{
  display: none;
  position: absolute;
  bottom: 12.5vh;
  right: 0.5vh;
  height: 11vh;
  width: 37%;
  border-radius: 1vh;
  border-right: solid;
  border-right: 0.3vh solid rgba(201, 201, 201, 0.3);
}
.naoQualidadeCusto{
  display: none;
  position: absolute;
  bottom: 1vh;
  right: 0.5vh;
  height: 11vh;
  width: 37%;
  border-radius: 1vh;
  border-right: 0.3vh solid rgba(201, 201, 201, 0.3);
}
/* <<<<< DIV CENTRAL */
`}

/* ============================================================================================








===============================================================================================*/

${(props) =>
    props.tamanho &&
    css`
            
          


    height: 98vh;
width: 99vw;
position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.3);
    display:flex;

    flex-direction: column;

.divMid{
  display: flex;
  width: 100%;
  height: 73%;
  flex-direction: row;
}
.divSuperior {
  width: 100%;
  display:flex;
  align-items: center;
  height: 7%;
}
.divsLaterais{
  display: flex;
  justify-content: space-between;
  width: 27.5%;
  height: 100%;
  flex-direction: column;
}
.divCentral{
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
}
.divInferior{
  display: flex;
  width: 100%;
  height: 20%;
}

.Titleshine{
  text-align: center;
  font-size: 1.2vw;
  text-shadow: 0 0 0.6em rgb(168, 226, 255), 0 0 0.6em rgb(168, 226, 255);
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
.CircularProgressbar {
    display: flex;
    align-items: center;
    height: 3.2vw;
  }
  
  .CircularProgressbar-trail {
    stroke: rgba(140, 140, 140, 0.2);
    stroke-linecap: round;
    
  }
  
  .CircularProgressbar-path {
  
    -webkit-transition: stroke-dashoffset 0s ease 0s;
    transition: stroke-dashoffset 0s ease 0s;
  }
  
  
  
  .CircularProgressbar .CircularProgressbar-text {
    
    font-size: 150%;
    dominant-baseline: middle;
    text-anchor: middle;
  }
/* DIV SUPERIOR >>>>> */
.WMS{
  display: flex;
  height: 50%;
  width: 15.5%;
  background-image: url(${wms});
  background-size: contain;
  background-repeat: no-repeat;
}
.status { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  color: #00ff04;
  text-align: end;
  text-shadow: 0 0 0.6em #00ff04, 0 0 0.6em #00ff04;
  height: 100%;
}
.horario{
  display: flex;
  height: 80%;
  width: 11.5%;
}
.relogio{
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1.2vw;
}

.logo{
  display: flex;
  justify-content: end;
  height: 80%;
  width: 5%;
  max-width: 80%;
  background-image: url(${logo});
  background-position: center;
  background-size: contain;  
  background-repeat: no-repeat;

}
/* <<<<< DIV SUPERIOR */

/* PRODUÇÃO DO DIA >>>>> */
.producaoDia{
  height: 53.75%;
  width: 95%;
  border-radius: 1.5vh;
  margin-left: 2.5%;
  padding-top: 2%;
  border-right: 0.3vh solid rgba(201, 201, 201, 0.3);
  border-left: 0.3vh solid rgba(201, 201, 201, 0.3);
}
.producao{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 30%;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 65%;
  height: 30%;
  font-size: 1vw;
}
.producaoNumber {
  font-size: 2.8vw;
}
.producaoDesc {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 1vw;
  color: rgba(99, 99, 99, 1);
}

/* <<<<< PRODUÇÃO DO DIA */

/* PRODUÇÃO/PREPARAÇÃO TURNO >>>>> */
.producaoTurno{
  height: 39.55%;
  width: 95%;
  border-radius: 1.5vh;
  margin-left: 2.5%;
  border-right: 0.3vh solid rgba(201, 201, 201, 0.3);
  border-left: 0.3vh solid rgba(201, 201, 201, 0.3);
}

.produzidoTurno1 {
  width: 60%;
  height: 40%;
  display: flex;
}
.produzidoTurno2 {
  width: 60%;
  height: 40%;
  display: flex;
}
.fontProducaoTurno {
  font-size: 1.5vw;
  width: 2.5vw;
}
.separacao {
  width: 1.5vw;
  text-align: center;
  font-size: 1.5vw;
}
.colorProgramado{
  color: #3e98c7;
}

/* <<<<< PRODUÇÃO/PREPARAÇÃO TURNO */

/* DIV CENTRAL >>>>> */

.graficoCentral {
  height: 16.85vw;
  width: 16.85vw;
  position: absolute;
  top: 35%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%) 
};
.graficoPreparacao {
  margin-top: 13vh;
  height: 35vh;
  width: 40vw;
  position: absolute;
  top: 15%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%) 
};
.circlePreparacao1 {
  position: absolute;
  right: 0;
  height: 17.5vh;
  width: 17.5vh;
  border: 0.2vh;
  border-style: dashed solid dashed solid;
  border-radius: 50%;
  box-shadow: 0em 0em 2vh 1vh rgba(255, 255, 255, 0.2);
 }
 .circlePreparacao2 {
  position: absolute;
  right: 0.5vh;
  top: 0.5vh;
  height: 16.5vh;
  width: 16.5vh;
  border: 0.8vh;
  border-style: double;
  border-radius: 50%;
  border-color: rgb(255 0 0 / 100%) rgb(255 0 0 / 100%) rgb(46 204 0 / 100%) transparent;
  transform: rotate( 270deg);
  box-shadow: 0vh 0.8vh 2vh 0.1vh rgba(255, 0, 0, 0.5) inset, 0vh -0.8vh 2vh 0.1vh rgba(0, 255, 0, 0.5) inset ;

 }
 .progressGraficoPreparacao{
  overflow:hidden;
  position: absolute;
  right: 0.5vh;
  top: 0.5vh;
  width: 16.5vh;
  height: 16.5vh;
  border-radius: 50%;
  transform: rotate( -135deg);
}
.progressBarPreparacao {
   margin-top: -0.7vh;
   margin-left: -0.7vh;
   position: absolute;
   height: 17.8vh;
 }
 .divBarraPreparacao {
  border-radius: 50%;
  right: 0;
  position: absolute;
  height: 17.5vh;
  width: 17.5vh;
  background-color: rgba(0, 255, 0, 0);
}
.barraPreparacao{
  border-radius: 50%;
  box-shadow: 0vh 0em 1vh 0.3vh rgba(194, 251, 252, 0.6);
  height: 2.5vh;
  width: 0.3vh;
  border-radius: 10vh;
  background-color: white;
  position: absolute;
  left: 50%;
    margin-right: -50%;
    margin-top: 1.6vh;
    transform: translate(-50%, -50%) 
}
.preparacaoPorcento{
   font-size: 4vh;
   position: absolute;
   left: 50%;
    margin-right: -50%;
    margin-top: 45%;
    transform: translate(-50%, -50%) 
 }
 .preparacaoPorcentoDesc{
   font-size: 1vh;
   position: absolute;
   color: rgba(99, 99, 99, 1);
   left: 50%;
    margin-right: -50%;
    margin-top: 60%;
    transform: translate(-50%, -50%) 
 }
 .circle1 {
  position: absolute;
  margin: auto;
  height: 16.85vw;
  width: 16.85vw;
  border: 0.2vh;
  border-style: dashed solid dashed solid;
  border-radius: 50%;
  box-shadow: 0em 0em 2vh 1vh rgba(255, 255, 255, 0.2);
 }
 .circle2 {
  position: absolute;
  margin-top: 0.2vw;
  margin-left: 0.3vw;
  height: 16.3vw;
  width: 16.3vw;
  border: 0.8vh;
  border-style: double;
  border-radius: 50%;
    transform: rotate( 270deg);
 }

.imgNumeros{
  background-image: url(${graficoNumero});
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 50%;
  position: absolute;
  height: 18.2vw;
  width: 18.2vw;
  margin-left: -0.7vw;
  margin-top: -0.3vw;
}

 .progressGraficoMaior{
  overflow:hidden;
  background-color: rgba(0, 255, 0, 0);
  position: absolute;
  height: 16.3vw;
  width: 16.3vw;
  border-radius: 50%;
  transform: rotate( -135deg);
  margin-top: 0.225vw;
  margin-left: 0.25vw;
}

 .producaoPorcento{
   font-size: 4vw;
   position: absolute;
   left: 50%;
    margin-right: -50%;
    margin-top: 45%;
    transform: translate(-50%, -50%) 
 }
 .producaoPorcentoDesc{
   font-size: 1vw;
   position: absolute;
   color: rgba(99, 99, 99, 1);

   left: 50%;
    margin-right: -50%;
    margin-top: 60%;
    transform: translate(-50%, -50%) 
 }
 .progressBarCenterMaior {
   margin-top: -1.1vw;
   margin-left:-1.1vw;
   position: absolute;
   height: 18.5vw;
 }
 .progressGraficoMenor{
  overflow:hidden;
  position: absolute;
    width: 12.55vw;
    height: 12.55vw;
  width: 12.55vw;
  border-radius: 50%;
  transform: rotate( -135deg);
  margin-top: 2.2vw;
  margin-left: 2.2vw;
}

 
 .progressBarCenterMenor {
   margin-top: -0.75vw;
   margin-left:-0.75vw;
   text-transform: rotate( 135deg);
   position: absolute;
   height: 14vw;
 }
 .circle3 {
  position: absolute;
  margin-top: 2.2vw;
  margin-left: 2.2vw;
  height: 12.55vw;
  width: 12.55vw;
  border: 0.8vh;
  border-style: double;
  border-radius: 50%;
  box-shadow: 0vh 0em 4vh 0.6vh rgba(255, 255, 255, 0.4) inset ;

}
.divBarra {
  position: absolute;
  height: 16.85vw;
  width: 16.85vw;
}
.barra{
  box-shadow: 0vh 0em 1vh 0.3vh rgba(194, 251, 252, 0.6);
  height: 2.5vw;
  width: 0.4vw;
  border-radius: 10vh;
  background-color: white;
  position: absolute;
  left: 50%;
  margin-right: -50%;
  margin-top: 1.5vw;
  transform: translate(-50%, -50%) 
}

.imagemGrafico {
  background-image: url(${grafico});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  margin-top: 2.75vw;
  margin-left: 2.75vw;
  height: 11.5vw;
  width: 11.5vw;
  border: 0.8vh;
  border-radius: 50%;
}
.custosLaterais{
display: flex;
flex-direction: column;
height: 100%;
width: 40%;
justify-content: flex-end;
}
.custosCentral{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;
}
.ineficienciaCusto {
  
 display: flex;
  align-items: center;
  justify-content:space-around;
 height: 11vh;
  width: 100%;
  border-radius: 1vh;
  border-left: 0.3vh solid rgba(201, 201, 201, 0.3);
}
.preparacaoCusto {
  display: flex;
  align-items: center;
  justify-content:space-around;
  height: 11vh;
  width: 100%;
  border-radius: 1vh;
  border-left: 0.3vh solid rgba(201, 201, 201, 0.3);
}
.custoTotal{
  
  
  height: 12vh;
  width: 15vh;
  border-radius: 3vh;
  border: 0.35vh dashed rgba(255, 0, 0, 1);
}
.bordaInterna{
  display:flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 11vh;
  width: 14vh;
  border-radius: 3vh;
  border: 0.7vh double rgba(255, 0, 0, 1);
  box-shadow: 0vh 0em 2vh 0.5vh rgba(255, 0, 0, 1);
}
.custoTitle{
  text-shadow: 0 0 0.6em rgb(255, 0, 0), 0 0 0.6em rgb(255, 0, 0),
              -0.2vh -0.2vh 0vh black, 
              -0.2vh 0.2vh 0vh black,                    
              0.2vh -0.2vh 0vh black,                  
              0.2vh 0vh 0vh black;
  color: red;
 
  width: 11vh;
  height: 30%;
  font-size: 1vw;
  display: flex;
  padding-left: 0.5vw;
  align-items: center;
}
.custoDesc1{
  text-shadow: 0 0 0.6em rgb(255, 0, 0), 0 0 0.6em rgb(255, 0, 0),
              -0.2vh -0.2vh 0vh black, 
              -0.2vh 0.2vh 0vh black,                    
              0.2vh -0.2vh 0vh black,                  
              0.2vh 0vh 0vh black;
  color: red;
 
  width: 8vw;
  height: 1.5vh;
  font-size: 1vw;

}
.custoDesc2{
  text-shadow: 0 0 0.6em rgb(255, 0, 0), 0 0 0.6em rgb(255, 0, 0),
              -0.2vh -0.2vh 0vh black, 
              -0.2vh 0.2vh 0vh black,                    
              0.2vh -0.2vh 0vh black,                  
              0.2vh 0vh 0vh black;
  color: red;
  width: 8vw;
  height: 1.5vh;
  font-size: 1vw;

}
.custoDesc3{
  text-shadow: 0 0 0.6em rgb(255, 0, 0), 0 0 0.6em rgb(255, 0, 0),
              -0.2vh -0.2vh 0vh black, 
              -0.2vh 0.2vh 0vh black,                    
              0.2vh -0.2vh 0vh black,                  
              0.2vh 0vh 0vh black;
  color: red;
  width: 8vw;
  height: 1.5vh;
  font-size: 1vw;

}
.custoTotalTop{
  
  font-size: 1.5vh;
  text-align: center;
  color: rgba(99, 99, 99, 1);
  width: 3vw;
  height: 1.5vh;
}
.custoTotalNumero{
  text-shadow: 0 0 0.6em rgb(255, 0, 0), 0 0 0.6em rgb(255, 0, 0),
              -0.2vh -0.2vh 0vh black, 
              -0.2vh 0.2vh 0vh black,                    
              0.2vh -0.2vh 0vh black,                  
              0.2vh 0vh 0vh black;
  font-size: 1.8vw;
  text-align: end;
  color: red;
  width: 4vw;
  height: 5vh;
  text-align: center;
  display:flex;
  justify-content: flex-end;
  align-items:flex-end
}
.custoTotalDecimal{
  text-shadow: 0 0 0.6em rgb(255, 0, 0), 0 0 0.6em rgb(255, 0, 0),
              -0.2vh -0.2vh 0vh black, 
              -0.2vh 0.2vh 0vh black,                    
              0.2vh -0.2vh 0vh black,                  
              0.2vh 0vh 0vh black;
  font-size: 1.2vw;
  color: red;
  width: 1.3vw;
  height: 5vh;
  text-align: center;
  display:flex;
  justify-content: flex-end;
  align-items:flex-end
}
.custoTotalBottom{
  
  font-size: 1.5vh;
  text-align: center;
  color: rgba(99, 99, 99, 1);
  width: 5vh;
  height: 1.5vh;
}
.paradaCusto{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-content:space-around;
  height: 11vh;
  width: 100%;
  border-radius: 1vh;
  border-right: solid;
  border-right: 0.3vh solid rgba(201, 201, 201, 0.3);
}
.naoQualidadeCusto{
  display: flex;
  align-items: center;
  justify-content:space-around;
  height: 11vh;
  width: 100%;
  border-radius: 1vh;
  border-right: 0.3vh solid rgba(201, 201, 201, 0.3);
}
.divCentralSup{
  width: 100%;
height: 70%;
}
.divCentralInf{
  display: flex;
width: 100%;
height: 30%;
}

/* <<<<< DIV CENTRAL */

/* PREPARAÇÃO PROGRAMADA DO DIA >>>>> */

.preparacaoDoDia{
  height: 20%;
  width: 95%;
  border-radius: 1.5vh;
  margin-left: 2.5%;
  border-right: 0.3vh solid rgba(201, 201, 201, 0.3);
  border-left: 0.3vh solid rgba(201, 201, 201, 0.3);
}
.preparacoes{
  display: flex;
   flex-direction: column;
   justify-content: space-around;
    width: 100%;
  height: 75%;
}
.preparacao{
  height: 43%;
  width: 100%;
  display: flex;
  padding-left: 4%;
}
.preparacaoTempo{
  height: 100%;
  font-size: 2vw;
  display: flex;
  align-items: flex-end;

}
.preparacaoDesc{
  height: 100%;

  font-size: 0.8vw;
  display: flex;
  align-items: flex-end;
  margin-left: 2%;
  color: rgba(99, 99, 99, 1);
}

/* <<<<< PREPARAÇÃO PROGRAMADA DO DIA */

/* PRINCIPAIS MOTIVOS DE PARADAS DO DIA >>>>>*/

.motivosParadasDia{
  height: 55vh;
  width: 95%;
  border-radius: 1vh;
  margin-left: 2.5%;
  border: 0.3vh solid rgba(201, 201, 201, 0.3);
  box-shadow: 0em 0em 2vh 0.4vh rgba(255, 255, 255, 0.6);
  padding-top: 3%;
}
.divMotivo{
  height: 15%;
}
.divMotivos{
  display: flex;
   flex-direction: column;
   justify-content: space-between;
    width: 100%;
  height: 80%;
}
.motivo{
  font-size: 1.4vw;
  margin-left: 2vh;
}
.progresso.ativa .progresso-barra {
	-webkit-animation: listras-anim 0s linear infinite;
	-moz-animation: listras-anim 0s linear infinite;
	-ms-animation: listras-anim 0s linear infinite;
	-o-animation: listras-anim 0s linear infinite;
	animation: listras-anim 0s linear infinite
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
	-webkit-transition: width .0s ease;
	transition: width .0s ease;
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
  width: 99%;
  margin-left: 0.5%;
  border-radius: 2vh;
  border: 0.3vh solid rgba(201, 201, 201, 0.3);
  box-shadow: 0em 0em 2vh 0.4vh rgba(255, 255, 255, 0.6);
}
  
`}
`
