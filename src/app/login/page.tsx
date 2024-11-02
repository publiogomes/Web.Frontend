'use client';
import { useEffect, useState } from 'react';
import { validaDocumento } from "@/components/hocs/validaDocumento";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login() {
    const [documento, setDocumento] = useState<string>('');
    const [documentoValido, setDocumentoValido] = useState<boolean | null>(null);

    useEffect(() => {
        setDocumentoValido(validaDocumento(documento));
    }, [documento])
    
    return (
        <div>
            <div className="container2">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center">
                            <a href="/home">
                                <img src="/imagem/IMAGEMhome/log-ecovoucher.jpeg" alt="Logotipo" className="logo"  />
                            </a>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card rounded-0">
                            <div className="card-body">
                                <form id="login-form">
                                    <div className="form-group">
                                        <label htmlFor="cpfOuCnpj">Cpf / Cnpj:</label>
                                        <input type="text" id="cpfOuCnpj" className={`form-control ` + (!documentoValido ? 'is-invalid' : 'is-valid')} name="cpfOuCnpj" required onChange={(e) => setDocumento(e.target.value)}/>
                                        <div className="invalid-feedback" id="cpfCnpjMessage"></div>
                                        <div id="validationServer03" className="invalid-feedback">
                                            Cpf ou Cnpj inválido
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="senha">Senha:</label>
                                        <div className="input-group">
                                            <input type="password" id="senha" className="form-control" name="senha" required />
                                        </div>
                                        <div id="validationServer03Feedback" className="invalid-feedback">
                                            Senha inválida
                                        </div>
                                        <div id="passwordMessage" className="invalid-feedback"></div>
                                        <div className="forgot-password">
                                            <a href='#'>Esqueceu a senha?</a>
                                        </div>
                                        <div className="signup">
                                            <a href="/cadastro">Faça seu cadastro!</a>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Entrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}