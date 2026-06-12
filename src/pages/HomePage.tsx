import { useEffect, useState } from "react";
import type { Pizza } from "../model/pizza.model";
import CardItem from "../components/CardItem";
import ItemPizza from "../components/ItemPizza";

const HomePage = () => {

    const [pizzas, setPizzas] = useState<Pizza[]>([
        {id: 1, title: "Pizza thit bam", description: "Thit bam sot ca chua"},
        {id: 2, title: "Pizza thit bo", description: "Thit bo sot vang"},
        {id: 3, title: "Pizza thit ga", description: "Thit ga sot xanh"},
    ])

    const handleRemovePizza = (id: number) => {
        const indexPizza = pizzas.findIndex(item => item.id === id);
        let newPizzas = [...pizzas];
        newPizzas.splice(indexPizza, 1);
        setPizzas(newPizzas);
    }

    const[count, setCount] = useState(0);
    useEffect(() => {
        console.log('render hook useEffect');
        setPizzas([...pizzas, {id: 4, title: "Pizza thit heo", description: "Thit heo sot vang"}])
    }, [count]);

    
  return (
    <>
    {console.log('render template')}
    <div style={{  height: "calc(100vh - 309px)", padding: "4rem 4rem", overflowY: "auto"}}>
      <div className="wrapper-card-items">
        {
            pizzas.map(item =>
                 <CardItem key={item.id} id ={item.id} title={item.title} description={item.description} handleRemovePizza={handleRemovePizza} />)
        }
        <button onClick={() => setCount(count + 1)}>Increase</button>
        

      </div>
    </div>
    </>
  );
};

export default HomePage;
