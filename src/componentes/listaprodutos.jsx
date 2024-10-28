
import style from  '../styles/listarprodutos.module.css'
export default function listaprodutos({lista}){
    return(
            <ul className={Style.bloco}>
                 {lista.map(produto =>(
    <li key={produto.id}>
        <h2>{produto.title}</h2>
        <P>{produto.description}</P>
        <P>{produto.price}</P>
        <img src={produto.image} alt ={produto.title} widh={100} />
    </li>
    ))}
</ul>

  );
}