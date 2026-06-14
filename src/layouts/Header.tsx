import ButonField from "../components/ButtonField";

const Header = () => {
  return (
    <div className="flex-basic-between" style={{ padding: "1.5rem 4rem" }}>
      <div style={{ fontSize: "40px", fontWeight: "600"}}>
        90DevPizza
      </div>
      <ButonField>Create new Pizaa</ButonField>
    </div>
  );
};

export default Header;
