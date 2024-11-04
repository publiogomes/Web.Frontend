import React, { useState } from 'react';

// Função de validação de senha
function validarSenha(senha: string): string[] {
  const erros: string[] = [];

  if (senha.length < 8) {
    erros.push('A senha deve ter pelo menos 8 caracteres.');
  }
  if (!/[A-Z]/.test(senha)) {
    erros.push('A senha deve conter pelo menos uma letra maiúscula.');
  }
  if (!/[a-z]/.test(senha)) {
    erros.push('A senha deve conter pelo menos uma letra minúscula.');
  }
  if (!/[0-9]/.test(senha)) {
    erros.push('A senha deve conter pelo menos um número.');
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
    erros.push('A senha deve conter pelo menos um caractere especial.');
  }

  return erros;
}

// HOC de validação de senha
const withPasswordValidation = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return (props: P) => {
    const [senha, setSenha] = useState('');
    const [erros, setErros] = useState<string[]>([]);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const novaSenha = e.target.value;
      setSenha(novaSenha);
      const errosValidacao = validarSenha(novaSenha);
      setErros(errosValidacao);
    };

    return (
      <div>
        <WrappedComponent
          {...props}
          senha={senha}
          onPasswordChange={handlePasswordChange}
          errosSenha={erros}
        />
        {erros.length > 0 && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            <h4>Erros de validação da senha:</h4>
            <ul>
              {erros.map((erro, index) => (
                <li key={index}>{erro}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
};

export default withPasswordValidation;
