import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { number } from "yup/lib/locale";
import { Container, Dash } from './styles';
import { CircularProgressbar } from 'react-circular-progressbar';
import { padding } from "polished";

const Dashboard: React.FC = () => {
    var data = new Date();

    var horario = addZero(data.getDate()) + "/" + (addZero(data.getMonth() + 1)) + "/" + data.getFullYear() + " ";

    horario = horario + addZero(data.getHours()) + ":" + addZero(data.getMinutes()) + ":" + addZero(data.getSeconds())


    const [relogio, setRelogio] = useState(horario);
    const [programado, setProgramado] = useState(0);
    const [previsto, setPrevisto] = useState(0);
    const [fabricado, setFabricado] = useState(0);
    const [manutencao, setManutencao] = useState(0);
    const [produ1, setProdu1] = useState(0);
    const [produ2, setProdu2] = useState(0);
    const [produ3, setProdu3] = useState(0);
    const [fontStatus, setFontStatus] = useState(2);
    const [porcentGraficoProdu, setPorcentGraficoProdu] = useState(0);
    const [porcentGraficoBar, setPorcentGraficoBar] = useState(-135);
    const [colorGraficoProdu, setColorGraficoProdu] = useState("255, 0, 0");
    const [custoTotal, setCustoTotal] = useState([0, 0]);
    const [ineficiencia, setIneficiencia] = useState("");

    function addZero(horario: Number) {
        if (horario < 10) {
            const i = "0" + horario;
            return i;
        } else {
            return horario
        }

    }

    const timer = () => {
        var producaoPorcento = 50
        var valortotal = 1200.75
        setInterval(() => {

            producaoPorcento = producaoPorcento + 2
        }, 1000);
        setInterval(() => {



            setRelogio((previousRelogio) => {
                var data = new Date();
                var previousRelogio = addZero(data.getDate()) + "/" + (addZero(data.getMonth() + 1)) + "/" + data.getFullYear() + " ";

                previousRelogio = previousRelogio + addZero(data.getHours()) + ":" + addZero(data.getMinutes()) + ":" + addZero(data.getSeconds())

                return previousRelogio

            })
            setProgramado((previousProgramado) => {

                previousProgramado = 50;

                return previousProgramado

            })
            setPrevisto((previousPrevisto) => {

                previousPrevisto = 50;

                return previousPrevisto

            })
            setFabricado((previousFabricado) => {

                previousFabricado = 50;

                return previousFabricado

            })
            setManutencao((previousManutencao) => {

                previousManutencao = 28.01;

                return previousManutencao

            })
            setProdu1((previousProdu1) => {

                previousProdu1 = 20;

                return previousProdu1

            })
            setProdu2((previousProdu2) => {

                previousProdu2 = 20;

                return previousProdu2

            })
            setProdu3((previousProdu3) => {

                previousProdu3 = 20;

                return previousProdu3

            })


            setPorcentGraficoProdu((previousPorcentGraficoProdu) => {

                previousPorcentGraficoProdu = producaoPorcento;
                if (previousPorcentGraficoProdu <= 0) {
                    previousPorcentGraficoProdu = 0
                }
                if (previousPorcentGraficoProdu >= 150) {
                    previousPorcentGraficoProdu = 150
                }
                return previousPorcentGraficoProdu;
            })
            setPorcentGraficoBar((previousPorcentGraficoBar) => {
                var cont = producaoPorcento / 2;
                if (cont >= 75) {
                    cont = 75
                }
                if (cont <= 0) {
                    cont = 0
                }
                cont = (360 / 100) * cont
                previousPorcentGraficoBar = cont - 135;
                return previousPorcentGraficoBar;
            })
            setColorGraficoProdu((previousColorGraficoProdu) => {
                var cont = producaoPorcento / 2;
                if (cont <= 0) {
                    cont = 0
                }
                if (cont < 50) {
                    previousColorGraficoProdu = "255, 0, 0"
                } else {
                    previousColorGraficoProdu = "0, 255, 0"
                }

                return previousColorGraficoProdu;
            })
            setCustoTotal((previousCustoTotal) => {

                previousCustoTotal[0] = Math.trunc(valortotal)
                previousCustoTotal[1] = Math.trunc((valortotal - previousCustoTotal[0]) * 100)
                return previousCustoTotal;
            })

        }, 1000);
        setInterval(() => {
            setFontStatus((previousFontStatus) => {
                if (previousFontStatus == 1.7) {
                    previousFontStatus = 2

                } else {
                    previousFontStatus = 1.7
                }
                return previousFontStatus

            })
        }, 600);
    };
    window.onload = timer;

    return (
        <>
            <Container>
                <Dash>
                    <div className="divSuperior">
                        <div className="WMS" />
                        <p className="status" style={{ fontSize: `${fontStatus}vw` }}>00:03:00 | OPERANDO | 1123585320</p>
                        <div className="horario">
                            <p className="relogio">{relogio}</p>
                        </div>
                        <div className="logo" />
                    </div>
                    <div className="divMid">
                        <div className="divsLaterais" style={{ left: "0" }}>

                            <div className="producaoDia">
                                <p className="Titleshine">PRODUÇÃO DO DIA</p>
                                <div className="producao">
                                    <CircularProgressbar className="progress1" value={programado} text={"PRO"} />
                                    <div style={{ width: "60%" }}>
                                        <p className="producaoTitle">PROGRAMADO</p>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <p className=" producaoNumber">1654 (1)</p>
                                            <p className=" producaoDesc">pçs.(ord.)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="producao">
                                    <CircularProgressbar className="progress2" value={previsto} text={"PRE"} />
                                    <div style={{ width: "60%" }}>
                                        <p className=" producaoTitle">PREVISTO</p>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <p className=" producaoNumber progress2">1654 (0)</p>
                                            <p className=" producaoDesc">pçs.(ord.)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="producao">
                                    <CircularProgressbar className="progress3" value={fabricado} text={"FAB"} />
                                    <div style={{ width: "60%" }}>
                                        <p className=" producaoTitle">FABRICADO</p>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <p className=" producaoNumber progress3">1654 (0)</p>
                                            <p className=" producaoDesc">pçs.(ord.)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="producaoTurno">
                                <p className="Titleshine">PRODUÇÃO/PREPARAÇÃO TURNO</p>
                                <div className="producao">
                                    <CircularProgressbar className="colorAtrasado" value={produ1} text={"1°T"} />
                                    <div style={{ width: "60%" }}>
                                        <div className=" produzidoTurno1">
                                            <p className=" fontProducaoTurno colorProgramado" >410</p><p className="separacao" > | </p><p className="fontProducaoTurno colorAtrasado" >0</p>
                                        </div>
                                        <div className=" produzidoTurno2 ">
                                            <p className=" fontProducaoTurno">0.00</p><p className=" separacao"> | </p><p className="fontProducaoTurno">0.00 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="producao">
                                    <CircularProgressbar className="colorEmDia" value={produ2} text={"2°T"} />
                                    <div style={{ width: "60%" }}>
                                        <div className="produzidoTurno1">
                                            <p className="fontProducaoTurno colorProgramado" >0</p><p className="separacao" > | </p><p className="fontProducaoTurno colorEmDia" >0</p>
                                        </div>
                                        <div className="produzidoTurno2 ">
                                            <p className="fontProducaoTurno">0.00</p><p className="separacao"> | </p><p className="fontProducaoTurno">0.00 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="producao">
                                    <CircularProgressbar className="colorEmDia" value={produ3} text={"3°T"} />
                                    <div style={{ width: "60%" }}>
                                        <div className="produzidoTurno1">
                                            <p className="fontProducaoTurno colorProgramado" >0</p><p className="separacao" > | </p><p className="fontProducaoTurno colorEmDia" >0</p>
                                        </div>
                                        <div className="produzidoTurno2 ">
                                            <p className="fontProducaoTurno">0.00</p><p className="separacao"> | </p><p className="fontProducaoTurno">0.00 </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="divCentral ">
                            <div className="divCentralSup">
                                <div className="graficoPreparacao">
                                    <div className="circlePreparacao1" >
                                        <b className="preparacaoPorcento" style={{ color: `rgb(${colorGraficoProdu})`, textShadow: `-0.2vh 0.2vh 0.4vh rgba(${colorGraficoProdu}, 0.5 ), 0vh 0vh 2.5vh rgba(${colorGraficoProdu}, 0.5)` }}>0</b>
                                        <b className="preparacaoPorcentoDesc">PREPARAÇÃO (%)</b>
                                    </div>
                                    <div className="circlePreparacao2" />
                                    <div className="progressGraficoPreparacao" style={{ stroke: `rgb(${colorGraficoProdu})` }}>
                                        <CircularProgressbar className=" progressBarPreparacao" value={0} />
                                    </div>
                                    <div className="divBarraPreparacao" style={{ transform: `rotate(-135deg)` }}>
                                        <div className="barraPreparacao"></div>
                                    </div>
                                </div>
                                <div className="graficoCentral ">
                                    <div className="circle1" />
                                    <div className="imgNumeros"></div>

                                    <div className="progressGraficoMaior" style={{ stroke: `rgb(${colorGraficoProdu})` }}>
                                        <CircularProgressbar className=" progressBarCenterMaior" value={porcentGraficoProdu / 2} />
                                    </div>
                                    <div className="circle2" style={{ borderColor: `rgb(${colorGraficoProdu}, 100%) rgb(${colorGraficoProdu}, 100%) rgb(0, 255, 0, 100%) transparent` }} />

                                    <div className="progressGraficoMenor" style={{ stroke: `rgb(${colorGraficoProdu})` }}>
                                        <CircularProgressbar className=" progressBarCenterMenor" value={porcentGraficoProdu / 2} />

                                    </div>
                                    <div className="circle3" style={{ borderColor: `rgb(${colorGraficoProdu}, 100%) rgb(0, 255, 0, 100%) rgb(86, 202, 245, 100%) rgb(${colorGraficoProdu}, 100%)` }} />
                                    <div className="divBarra" style={{ transform: `rotate(${porcentGraficoBar}deg)` }}>
                                        <div className="barra"></div>
                                    </div>
                                    <b className="producaoPorcento" style={{ color: `rgb(${colorGraficoProdu})`, textShadow: `-0.4vh 0.4vh 0.4vh rgba(${colorGraficoProdu}, 0.5 ), 0vh 0vh 2.5vh rgba(${colorGraficoProdu}, 0.5)` }}>{porcentGraficoProdu.toFixed(0)}</b>
                                    <b className="producaoPorcentoDesc">PRODUÇÃO (%)</b>
                                    <div className="imagemGrafico" />
                                </div>
                            </div>
                            <div className="divCentralInf">
                                <div className="custosLaterais">
                                    <div  className="ineficienciaCusto" >
                                        <b className="custoTitle">Ineficiência por tempo de ciclo</b>
                                        <div style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"space-around", width:"40%"}}>
                                            <b className="custoDesc1">1°T R$1000,00</b>
                                            <b className="custoDesc2">2°T R$1000,00</b>
                                            <b className="custoDesc3">3°T R$1000,00</b>
                                        </div>
                                    </div>
                                    <div  className="preparacaoCusto">
                                        <b className="custoTitle">Preparação</b>
                                        <div style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"space-around", width:"40%"}}>
                                            <b className="custoDesc1">1°T R$1000,00</b>
                                            <b className="custoDesc2">2°T R$1000,00</b>
                                            <b className="custoDesc3">3°T R$1000,00</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="custosCentral">
                                    <div className="custoTotal">
                                        <div className="bordaInterna">
                                            <p className="custoTotalTop">BRL</p>
                                            <div style={{display:"flex"}}><p className="custoTotalNumero">{custoTotal[0]},</p><p className="custoTotalDecimal">{custoTotal[1]}</p></div>
                                            <p className="custoTotalBottom">CUSTOS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="custosLaterais" style={{ alignItems: "flex-end" }}>
                                    <div  className="paradaCusto">
                                        <b className="custoTitle">Paradas de maquinas</b>
                                        <div style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"space-around", width:"40%"}}>
                                            <b className="custoDesc1">1°T R$1000,00</b>
                                            <b className="custoDesc2">2°T R$1000,00</b>
                                            <b className="custoDesc3">3°T R$1000,00</b>
                                        </div>
                                    </div>
                                    <div className="naoQualidadeCusto">
                                        <b className="custoTitle">Não Qualidade</b>
                                        <div style={{height:"100%",display:"flex", flexDirection:"column", justifyContent:"space-around", width:"40%"}}>
                                            <b className="custoDesc1">1°T R$1000,00</b>
                                            <b className="custoDesc2">2°T R$1000,00</b>
                                            <b className="custoDesc3">3°T R$1000,00</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divsLaterais" style={{ right: 0 }}>

                            <div className="preparacaoDoDia ">
                                <p className="Titleshine">PREPARAÇÃO PROGRAMADA DO DIA</p>
                                <div className="preparacoes">
                                    <div className="preparacao">
                                        <p className="preparacaoTempo">00:38:00 (1)</p><p className=" preparacaoDesc">horas (qtd) programadas</p>
                                    </div>
                                    <div className="preparacao">
                                        <p className=" preparacaoTempo">00:00:00 (0)</p><p className=" preparacaoDesc">horas (qtd) realizadas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="motivosParadasDia ">
                                <p className="Titleshine ">PRINCIPAIS MOTIVOS DE PARADAS DO DIA</p>
                                <div className="divMotivos">
                                    <div className="divMotivo">
                                        <p className="motivo">MANUTENÇÃO CORRETIVA</p>
                                        <p className="motivo">00:35:02   |   R$ 104,56   |   28.01%   |   1x</p>
                                        <div className="motivo progresso progresso-pai">
                                            <div className="progresso-barra" style={{ width: `${manutencao}%` }}></div>
                                        </div>
                                    </div>
                                    <div className="divMotivo">
                                        <p className="motivo">MANUTENÇÃO CORRETIVA</p>
                                        <p className="motivo">00:35:02   |   R$ 104,56   |   28.01%   |   1x</p>
                                        <div className="motivo progresso progresso-pai">
                                            <div className="progresso-barra" style={{ width: `${manutencao}%` }}></div>
                                        </div>
                                    </div>
                                    <div className="divMotivo">
                                        <p className="motivo">MANUTENÇÃO CORRETIVA</p>
                                        <p className="motivo">00:35:02   |   R$ 104,56   |   28.01%   |   1x</p>
                                        <div className="motivo progresso progresso-pai">
                                            <div className="progresso-barra" style={{ width: `${manutencao}%` }}></div>
                                        </div>
                                    </div>
                                    <div className="divMotivo">
                                        <p className="motivo">MANUTENÇÃO CORRETIVA</p>
                                        <p className="motivo">00:35:02   |   R$ 104,56   |   28.01%   |   1x</p>
                                        <div className="motivo progresso progresso-pai">
                                            <div className="progresso-barra" style={{ width: `${manutencao}%` }}></div>
                                        </div>
                                    </div>
                                    <div className="divMotivo">
                                        <p className="motivo">MANUTENÇÃO CORRETIVA</p>
                                        <p className="motivo">00:35:02   |   R$ 104,56   |   28.01%   |   1x</p>
                                        <div className="motivo progresso progresso-pai">
                                            <div className="progresso-barra" style={{ width: `${manutencao}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="divInferio">
                        <div className="desdobramentoEventosDia">
                            <p className="Titleshine margin0">DESDOBRAMENTO DE EVENTOS DO DIA</p>
                        </div>
                    </div>

                </Dash>
            </Container>

        </>

    );


}
export default Dashboard;

