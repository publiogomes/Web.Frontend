'use client';
import React from 'react';
import { useState } from 'react';
import './cadastro.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Cadastro = () => {
    const [pessoaFisica, setPessoaFisica] = useState<boolean>(true);
    const [formData, setFormData] = useState({
        tipoCliente: 'usuario',
        nome: '',
        dataNascimento: '',
        cpf: '',
        telefone: '',
        cep: '',
        enderecoCompleto: '',
        numero: '',
        complemento: '',
        nomeEmpresa: '',
        cnpj: '',
        email: '',
        senha: '',
        confirmarSenha: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <div className="container mt-6">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card rounded-0">
                        <div className="card-header text-green text-center">
                                <a href="/home">
                                    <img src="imagem/images/eco-novo.jpeg" alt="ecoVoucher-pagina-inicial" className="logo" width={100} height={100} />
                                </a>
                            <h2>Faça seu cadastro</h2>
                        </div>
                        <div className="card-body">
                            <form id="form-cadastro" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="tipoCliente">Tipo de Cliente:</label>
                                    <div>
                                        <label>
                                            <input
                                                type="radio"
                                                className="tipo-cliente"
                                                id="pessoa-fisica"
                                                name="tipoCliente"
                                                value="usuario"
                                                checked={formData.tipoCliente === 'usuario'}
                                                onChange={(e) => setFormData({ ...formData, tipoCliente: e.target.value })}
                                            />{' '}
                                            Pessoa Física
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                className="tipo-cliente"
                                                id="pessoa-juridica"
                                                name="tipoCliente"
                                                value="parceiro"
                                                checked={formData.tipoCliente === 'parceiro'}
                                                onChange={(e) => setFormData({ ...formData, tipoCliente: e.target.value })}                                                
                                            />{' '}
                                            Parceiro
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nome">Nome:</label>
                                    <input
                                        type="text"
                                        id="nome"
                                        className="form-control"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="error-message" id="error-nome"></div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                                    <input
                                        type="date"
                                        id="dataNascimento"
                                        className="form-control"
                                        name="dataNascimento"
                                        value={formData.dataNascimento}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpf">CPF:</label>
                                    <input
                                        type="text"
                                        id="cpf"
                                        className="form-control"
                                        name="cpf"
                                        value={formData.cpf}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="error-message" id="error-cpf"></div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telefone">Telefone:</label>
                                    <input
                                        type="text"
                                        id="telefone"
                                        className="form-control"
                                        name="telefone"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        placeholder="(DDD + número)"
                                        required
                                    />
                                    <div className="error-message" id="error-telefone"></div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cep">CEP:</label>
                                    <input
                                        type="text"
                                        id="cep"
                                        className="form-control"
                                        name="cep"
                                        value={formData.cep}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        // onClick={buscarEnderecoPorCEP}
                                        className="btn btn-success"
                                        type="button"
                                    >
                                        Buscar Endereço
                                    </button>
                                    <div className="error-message" id="error-cep"></div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="enderecoCompleto">Endereço:</label>
                                    <input
                                        type="text"
                                        id="enderecoCompleto"
                                        className="form-control"
                                        name="enderecoCompleto"
                                        value={formData.enderecoCompleto}
                                        onChange={handleChange}
                                        placeholder="Rua/Av. Exemplo, 123, Bairro, Cidade, UF"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="numero">Número:</label>
                                    <input
                                        type="text"
                                        id="numero"
                                        className="form-control"
                                        name="numero"
                                        value={formData.numero}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="complemento">Complemento:</label>
                                    <input
                                        type="text"
                                        id="complemento"
                                        className="form-control"
                                        name="complemento"
                                        value={formData.complemento}
                                        onChange={handleChange}
                                    />
                                </div>
                                {formData.tipoCliente === 'parceiro' && (
                                    <div id="parceiro">
                                        <div className="form-group">
                                            <label htmlFor="nomeEmpresa">Nome da Empresa:</label>
                                            <input
                                                type="text"
                                                id="nomeEmpresa"
                                                className="form-control"
                                                name="nomeEmpresa"
                                                value={formData.nomeEmpresa}
                                                onChange={handleChange}
                                            />
                                            <div className="error-message" id="error-nomeEmpresa"></div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cnpj">CNPJ:</label>
                                            <input
                                                type="text"
                                                id="cnpj"
                                                className="form-control"
                                                name="cnpj"
                                                value={formData.cnpj}
                                                onChange={handleChange}
                                            />
                                            <div className="error-message" id="error-cnpj"></div>
                                        </div>
                                    </div>
                                )}
                                <div className="form-group">
                                    <label htmlFor="email">E-mail:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="senha">Crie sua senha:</label>
                                    <div className="input-group">
                                        <input
                                            type="password"
                                            id="senha"
                                            className="form-control"
                                            name="senha"
                                            value={formData.senha}
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="toggle-senha">
                                                <i className="fas fa-eye"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="error-message" id="error-senha"></div>
                                <div className="form-group">
                                    <label htmlFor="confirmarSenha">Confirme sua senha:</label>
                                    <div className="input-group">
                                        <input
                                            type="password"
                                            id="confirmarSenha"
                                            className="form-control"
                                            name="confirmarSenha"
                                            value={formData.confirmarSenha}
                                            onChange={handleChange}
                                            required
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text" id="toggle-confirmarSenha">
                                                <i className="fas fa-eye"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="error-message" id="error-confirmarSenha"></div>
                                </div>
                                <div className="alert" id="message-box" style={{ display: 'none' }}></div>
                                <button type="submit" className="btn btn-success">
                                    Finalizar Cadastro
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;