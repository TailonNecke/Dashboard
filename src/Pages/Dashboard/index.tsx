import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { number } from "yup/lib/locale";
import { Container, Dash } from './styles';
import { CircularProgressbar } from 'react-circular-progressbar';

export const val = 100;
const Dashboard: React.FC = () => {
    var data = new Date();

    var horario = addZero(data.getDate()) + "/" + (addZero(data.getMonth() + 1)) + "/" + data.getFullYear() + " ";

    horario = horario + addZero(data.getHours()) + ":" + addZero(data.getDate()) + ":" + addZero(data.getSeconds())


    const [relogio, setRelogio] = useState(horario);
    const [programado, setProgramado] = useState(0);
    const [previsto, setPrevisto] = useState(0);
    const [fabricado, setFabricado] = useState(0);
    const [manutencao, setManutencao] = useState(0);
    const [produ1, setProdu1] = useState(0);
    const [produ2, setProdu2] = useState(0);
    const [produ3, setProdu3] = useState(0);
    const [fontStatus, setFontStatus] = useState(2.1);

    function addZero(horario: Number) {
        if (horario < 10) {
            const i = "0" + horario;
            return i;
        } else {
            return horario
        }

    }

    const timer = () => {
        setInterval(() => {
            setRelogio((previousRelogio) => {
                var data = new Date();
                var previousRelogio = addZero(data.getDate()) + "/" + (addZero(data.getMonth() + 1)) + "/" + data.getFullYear() + " ";

                previousRelogio = previousRelogio + addZero(data.getHours()) + ":" + addZero(data.getDate()) + ":" + addZero(data.getSeconds())

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

            setFontStatus((previousFontStatus) => {
                console.log("prev1", previousFontStatus)
                if (previousFontStatus == 2.1) {
                    previousFontStatus = 2.5
                    console.log("prev2", previousFontStatus)

                } else {
                    previousFontStatus = 2.1
                }
                return previousFontStatus

            })

        }, 1000);
    };
    window.onload = timer;



    return (
        <>
            <Container>
                <Dash>
                    <div className="divsLaterais float-left">
                        <div className="WMS" />
                        <div className="producaoDia">
                            <p className="Titleshine">PRODUÇÃO DO DIA</p>
                            <div className="producao">
                                <CircularProgressbar className="progress1" value={programado} text={"PRO"} />
                                <p className="float-left producaoTitle">PROGRAMADO</p>
                                <div className="float-left" style={{ width: "75%" }}>
                                    <p className="float-left producaoNumber">1654 (1)</p>
                                    <p className="float-left producaoDesc">pçs.(ord.)</p>
                                </div>
                            </div>
                            <div className="producao">
                                <CircularProgressbar className="progress2" value={previsto} text={"PRE"} />
                                <p className="float-left producaoTitle">PREVISTO</p>
                                <div className="float-left" style={{ width: "75%" }}>
                                    <p className="float-left producaoNumber progress2">1654 (0)</p>
                                    <p className="float-left producaoDesc">pçs.(ord.)</p>
                                </div>
                            </div>
                            <div className="producao">
                                <CircularProgressbar className="progress3" value={fabricado} text={"FAB"} />
                                <p className="float-left producaoTitle">FABRICADO</p>
                                <div className="float-left" style={{ width: "75%" }}>
                                    <p className="float-left producaoNumber progress3">1654 (0)</p>
                                    <p className="float-left producaoDesc">pçs.(ord.)</p>
                                </div>
                            </div>
                        </div>
                        <div className="producaoTurno">
                            <p className="Titleshine">PRODUÇÃO/PREPARAÇÃO TURNO</p>
                            <div className="producao">
                                <CircularProgressbar className="colorAtrasado" value={produ1} text={"1°T"} />
                                <div className="float-left produzidoTurno1">
                                    <p className="float-left fontProducaoTurno colorProgramado" >410</p><p className="float-left separacao" > | </p><p className="float-left fontProducaoTurno colorAtrasado" >0</p>
                                </div>
                                <div className="float-left produzidoTurno2 ">
                                    <p className="float-left fontProducaoTurno">0.00</p><p className="float-left separacao"> | </p><p className="float-left fontProducaoTurno">0.00 </p>
                                </div>

                            </div>
                            <div className="producao">
                                <CircularProgressbar className="colorEmDia" value={produ2} text={"2°T"} />
                                <div className="float-left produzidoTurno1">
                                    <p className="float-left fontProducaoTurno colorProgramado" >0</p><p className="float-left separacao" > | </p><p className="float-left fontProducaoTurno colorEmDia" >0</p>
                                </div>
                                <div className="float-left produzidoTurno2 ">
                                    <p className="float-left fontProducaoTurno">0.00</p><p className="float-left separacao"> | </p><p className="float-left fontProducaoTurno">0.00 </p>
                                </div>

                            </div>
                            <div className="producao">
                                <CircularProgressbar className="colorEmDia" value={produ3} text={"3°T"} />
                                <div className="float-left produzidoTurno1">
                                    <p className="float-left fontProducaoTurno colorProgramado" >0</p><p className="float-left separacao" > | </p><p className="float-left fontProducaoTurno colorEmDia" >0</p>
                                </div>
                                <div className="float-left produzidoTurno2 ">
                                    <p className="float-left fontProducaoTurno">0.00</p><p className="float-left separacao"> | </p><p className="float-left fontProducaoTurno">0.00 </p>
                                </div>

                            </div>

                        </div>
                    </div>
                    
                    <div className="divCentral float-left">
                        <p className="status" style={{ fontSize: `${fontStatus}vh` }}>00:03:00 | OPERANDO | 1123585320</p>
                        <div className="graficoCentral">
                            <div className="circle1" />
                            <div className="circle2" />
                            
                            <div className="circle3">             
                            </div>
                            <div className="imagemGrafico" />
                        </div>
                    </div>
                    <div className="divsLaterais float-right">
                        <div className="horario float-left">
                            <p className="relogio float-right">{relogio}</p>
                        </div>
                        <div className="logo float-left" />
                        <div className="preparacaoDoDia float-left">
                            <p className="Titleshine">PREPARAÇÃO PROGRAMADA DO DIA</p>
                            <div className="preparacao">
                                <p className="float-left preparacaoTempo">00:38:00 (1)</p><p className="float-left preparacaoDesc">horas (qtd) programadas</p>
                            </div>
                            <div className="preparacao">
                                <p className="float-left preparacaoTempo">00:00:00 (0)</p><p className="float-left preparacaoDesc">horas (qtd) realizadas</p>
                            </div>

                        </div>
                        <div className="motivosParadasDia float-left">
                            <p className="Titleshine ">PRINCIPAIS MOTIVOS DE PARADAS DO DIA</p>
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
                    <div className="divInferior float-right">
                        <div className="desdobramentoEventosDia float-left">
                            <p className="Titleshine margin0">DESDOBRAMENTO DE EVENTOS DO DIA</p>
                        </div>
                    </div>
                </Dash>
            </Container>

        </>

    );

}
export default Dashboard;

