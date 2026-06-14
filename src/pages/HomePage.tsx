import { useEffect, useState } from "react";
import type { Pizza } from "../model/pizza.model";
import CardItem from "../components/CardItem";
import ItemPizza from "../components/ItemPizza";
import { Course } from "../model/course.model";

const HomePage = () => {

    const [pizzas, setPizzas] = useState<Pizza[]>([])
    const [courses, setCourses] = useState<Course[]>([]);
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

    useEffect(() => {
        fetch('http://localhost:3000/api/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);

  return (
    <>
    {console.log('render template')}
    <div style={{  height: "calc(100vh - 309px)", padding: "4rem 4rem", overflowY: "auto"}}>
      <div className="wrapper-card-items">
        {
            courses.map(item =>
                 <CardItem key={item.courseId} courseId={item.courseId} title={item.title} description={item.description} thumbnailUrl={item.thumbnailUrl} />)
        }
        <button onClick={() => setCount(count + 1)}>Increase</button>
        

      </div>
    </div>
    </>
  );
};

export default HomePage;
