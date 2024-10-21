import { useEffect, useState } from "react";

export default function App() {
  
  const [lista, setLista] = useState([]);

  
  useEffect(() => {
    
    const receberlistaprodutos = async () => {
      const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
      const dados  = await response.json();
      setLista(data);  
    };

    receberlistaprodutos();
  }, []);

  return (
<>
<h1>lista de produtos</h1>
<ul>
    {lista.map(produto =>(
    <li key={produto.id}>
        <h2>{produto.title}</h2>
        <P>{produto.description}</P>
        <P>{produto.price}</P>
        <img src={produto.image} alt ={produto.title} widh={100} />
    </li>
    ))}
</ul>
</>
  );
}