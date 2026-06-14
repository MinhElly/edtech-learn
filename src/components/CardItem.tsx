import { Course } from "../model/course.model";
type Props = Course;
const CardItem = ({ title, description, thumbnailUrl }: Props) => {
  return (
    <div className="card-items" >
      <img className="card-image-pizza" src={thumbnailUrl} alt="Pizza" />
      <div style={{ height: "50%", width: "100%" }}></div>
      <div className="card-content">
        <div>
          <div style={{ fontSize: "20px", fontWeight: "600", color: "#fff" }}>{title}</div>
          <div style={{ fontSize: "16px",fontWeight: "300",color: "#fff",marginTop: ".5rem", }}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
