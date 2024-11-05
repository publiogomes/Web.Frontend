"use client";
import React, { useState } from 'react';
import './style.css';

const PegadaPage = () => {
    const [resultado, setResultado] = useState(0);

    const calcularSoma = () => {
        let soma = 0;
        const selects = document.querySelectorAll('select');
        selects.forEach(select => {
            soma += parseInt(select.value);
        });

        let comparativo: string = "";
        if (soma <= 150) {
            comparativo = "É menor que 4 gha, equivalente à dos E.U.A.";
        } else if (soma <= 400) {
            comparativo = "Está entre 4 e 6 gha, equivalente à da França";
        } else if (soma <= 600) {
            comparativo = "Está entre 6 e 8 gha, equivalente à da Suécia";
        } else if (soma <= 800) {
            comparativo = "Está entre 8 e 10 gha, padrão Brasil";
        } else {
            comparativo = "É maior que 10 gha, dentro da média mundial";
        }    
    
        alert("Seu total de pontos é: " + soma + "\nPegada ecológica: " + comparativo);
        fetch('http://localhost:4000/api/user/alterar_pegada', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjcyOTYwYjVlNzE2ZmUxYzVjYTIyM2Q2In0sImlhdCI6MTczMDc2NzgxNCwiZXhwIjoxNzMwNzc3ODE0fQ.Gs8tlbl5YHb0LSpbv-0DJkKq5dfiHnjP3q6i020pajw',
            },
            body: JSON.stringify({
                token: '672960b5e716fe1c5ca223d6',
                soma_pegada: soma
            })
        }).then((response) => response.json()).then(() => {
            alert("Pegada ecológica atualizada com sucesso!");
        }).catch(() => {
            alert('Erro ao atualizar pegada ecológica:');
        });


        setResultado(soma);
    };

    return (
        <div className="container">
            <div className="container">
                <h1>Pegada Ecológica: O que é isso?</h1>
                <hr />

                <section className="pegada">
                    <div className="imagem">
                        <img src="images/footprint.png" alt="Pegada Ecológica" width="100%" />
                    </div>
                    <div className="texto">
                        <h2>Você já parou para pensar que a forma como vivemos deixa marcas no meio ambiente?</h2>
                        <p>
                            É isso mesmo, nossa caminhada pela Terra deixa “rastros”, “pegadas”, que podem ser maiores ou
                            menores, dependendo de como caminhamos.
                            A Pegada Ecológica é uma metodologia de contabilidade ambiental que avalia a pressão do consumo das
                            populações humanas sobre os recursos naturais.
                            Expressada em hectares globais (gha), permite comparar diferentes padrões de consumo e verificar se
                            estão dentro da capacidade ecológica do planeta.
                        </p>
                        <p>
                            Um hectare global significa um hectare de produtividade média mundial para terras e águas produtivas
                            em um ano.
                            Já a biocapacidade representa a capacidade dos ecossistemas em produzir recursos úteis e absorver os
                            resíduos gerados pelo ser humano.
                        </p>
                        <p>
                            Sendo assim, a Pegada Ecológica contabiliza os recursos naturais biológicos renováveis (grãos e
                            vegetais, carne, peixes, madeira e fibras, energia renovável etc.),
                            segmentados em Agricultura, Pastagens, Florestas, Pesca, Área Construída e Energia e Absorção de
                            Dióxido de Carbono (CO2).
                        </p>
                    </div>
                </section>

                <section className="questionario">
                    <h2>Calcule a sua pegada ecológica respondendo o questionário abaixo:</h2>
                    <div className="perguntas">
                        <label htmlFor="select1">01 - Quantas pessoas vivem na sua casa?</label>
                        <select id="select1">
                            <option value="30">1</option>
                            <option value="25">2</option>
                            <option value="20">3</option>
                            <option value="15">4</option>
                            <option value="10">5 ou mais</option>
                        </select>

                        <label htmlFor="select2">02 - Qual o sistema de aquecimento da casa?</label>
                        <select id="select2">
                            <option value="30">Gás natural</option>
                            <option value="40">Eletricidade</option>
                            <option value="50">Gasóleo</option>
                            <option value="0">Fontes renováveis (solar, eólica)</option>
                        </select>

                        <label htmlFor="select3">03 - Quantas torneiras tem na sua casa?</label>
                        <select id="select3">
                            <option value="5">Menos de 3</option>
                            <option value="10">De 3 a 5</option>
                            <option value="15">De 6 a 8</option>
                            <option value="20">De 9 a 10</option>
                            <option value="25">Mais de 10</option>
                        </select>

                        <label htmlFor="select4">04 - Qual o tipo de casa você vive?</label>
                        <select id="select4">
                            <option value="20">Casa</option>
                            <option value="40">Apartamento</option>
                        </select>

                        <label htmlFor="select5">05 - Quantas refeições de carne ou peixe você come na semana?</label>
                        <select id="select5">
                            <option value="0">Nenhuma</option>
                            <option value="10">1 a 3</option>
                            <option value="20">4 a 6</option>
                            <option value="35">7 a 10</option>
                            <option value="50">Mais de 10</option>
                        </select>

                        <label htmlFor="select6">06 - Quantas refeições feitas em casa você come por semana?</label>
                        <select id="select6">
                            <option value="25">Menos de 10</option>
                            <option value="20">10 a 14</option>
                            <option value="15">15 a 18</option>
                            <option value="10">Mais de 18</option>
                        </select>

                        <label htmlFor="select7">07 - Você procura comprar alimentos produzidos localmente?</label>
                        <select id="select7">
                            <option value="25">Sim</option>
                            <option value="125">Não</option>
                            <option value="50">Às vezes</option>
                            <option value="100">Raramente</option>
                        </select>

                        <label htmlFor="select8">08 - Que tipo de automóvel você tem? (se não tiver, não responda)</label>
                        <select id="select8">
                            <option value="0">Não tenho</option>
                            <option value="35">Motocicleta</option>
                            <option value="60">Baixa cilindrada (menos de 1200cc)</option>
                            <option value="75">Alta cilindrada (acima de 1200cc)</option>
                            <option value="100">Carro</option>
                            <option value="130">Veículo a diesel</option>
                        </select>

                        <label htmlFor="select9">09 - Como você vai para o trabalho?</label>
                        <select id="select9">
                            <option value="60">De carro</option>
                            <option value="30">De carona</option>
                            <option value="15">De transporte público</option>
                            <option value="0">A pé ou de bicicleta</option>
                        </select>

                        <label htmlFor="select10">10 - Quantos km de carro até o trabalho? (se não vai de carro, não
                            responda)</label>
                        <select id="select10">
                            <option value="0">Não vou de carro</option>
                            <option value="10">Menos de 10</option>
                            <option value="20">De 10 a 30</option>
                            <option value="30">De 30 a 50</option>
                            <option value="60">De 50 a 100</option>
                            <option value="80">Mais de 100</option>
                        </select>

                        <label htmlFor="select11">11 - Onde você passou as férias?</label>
                        <select id="select11">
                            <option value="0">Não viajei</option>
                            <option value="10">Viajei dentro do estado</option>
                            <option value="20">Viajei dentro do país</option>
                            <option value="30">Viajei dentro do continente</option>
                            <option value="50">Viajei para fora do continente</option>
                        </select>

                        <label htmlFor="select12">12 - Quantos fins de semana você viaja de carro no ano? (mínimo 20 km)</label>
                        <select id="select12">
                            <option value="0">0</option>
                            <option value="10">1 a 3</option>
                            <option value="20">4 a 6</option>
                            <option value="30">7 a 9</option>
                            <option value="40">Mais de 9</option>
                        </select>

                        <label htmlFor="select13">13 - Quantas compras significativas você faz no ano? (Ex. TV, Computador,
                            móveis, etc...)</label>
                        <select id="select13">
                            <option value="0">0</option>
                            <option value="15">1 a 3</option>
                            <option value="30">4 a 6</option>
                            <option value="45">Mais de 6</option>
                        </select>

                        <label htmlFor="select14">14 - Você costuma comprar produtos de baixo consumo de energia?</label>
                        <select id="select14">
                            <option value="0">Sim</option>
                            <option value="25">Não</option>
                        </select>

                        <label htmlFor="select15">15 - Você procura reduzir a produção de resíduos?</label>
                        <select id="select15">
                            <option value="0">Sempre</option>
                            <option value="10">Às vezes</option>
                            <option value="20">Raramente</option>
                            <option value="30">Nunca</option>
                        </select>

                        <label htmlFor="select16">16 - Você pratica compostagem de resíduos orgânicos?</label>
                        <select id="select16">
                            <option value="0">Sempre</option>
                            <option value="10">Às vezes</option>
                            <option value="20">Nunca</option>
                        </select>

                        <label htmlFor="select17">17 - Você costuma separar o lixo reciclável?</label>
                        <select id="select17">
                            <option value="0">Sempre</option>
                            <option value="10">Às vezes</option>
                            <option value="20">Raramente</option>
                            <option value="25">Nunca</option>
                        </select>

                        <label htmlFor="select18">18 - Quantos sacos de lixo você produz na semana?</label>
                        <select id="select18">
                            <option value="10">1</option>
                            <option value="20">2</option>
                            <option value="30">3 ou mais</option>
                        </select>
                    </div>
                </section>
            </div>
            <div className="botao">
                <button onClick={calcularSoma}>Verificar minha pegada</button>
            </div>

            <div className="soma">
                <p id="resultado">{resultado}</p>
            </div>
        </div>
    );
};

export default PegadaPage;