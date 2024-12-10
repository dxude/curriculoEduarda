import { useState } from 'react';

function Game() {
  const [password] = useState('1234');
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === password) {
      setMessage('Parabéns! Você acertou a senha!');
    } else {
      setMessage('Senha incorreta. Tente novamente.');
    }
  };

  return (
    <div>
      <h1>Jogo da Senha</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="password" 
          value={input} 
          onChange={handleChange} 
          placeholder="Digite a senha"
        />
        <button type="submit">Verificar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Game;
