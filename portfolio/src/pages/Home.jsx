import { useState, useEffect } from 'react';
import axios from 'axios';
import AboutMe from '../components/AboutMe';  

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts') 
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <h1>Meu Portfólio</h1>
      <AboutMe />
      <h2>Posts da API:</h2>
      <ul>
        {data ? data.map(post => (
          <li key={post.id}>{post.title}</li>
        )) : <p>Carregando...</p>}
      </ul>
      <a href="/game">Ir para o Jogo da Senha</a>
    </div>
  );
}

export default Home;
