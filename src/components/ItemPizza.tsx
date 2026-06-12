import type { Pizza } from "../model/pizza.model";

type Props = Pizza & {
  handleChangePersion: (data: Pizza) => void; 
};

const ItemPizza = ({ title, description, handleChangePersion }: Props) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <button onClick={() => handleChangePersion({ title: "MinhNQ0710", description: "Developer" })}>Change persion</button>
    </div>
  );
};

export default ItemPizza;
