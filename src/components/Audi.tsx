import audiImage from "../assets/audi.jpg";

const Audi = () => {
  return (
    <div className="mt-4">
      <div className="fs-3">
        <strong>Audi </strong>
        AG is a German automotive manufacturer of luxury vehicles headquartered
        in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company,
        the Volkswagen Group, Audi produces vehicles in nine production
        facilities worldwide.
      </div>
      <div className="mt-4">
        <img width="60%" className="rounded" src={audiImage} alt="audi" />
      </div>
 
    </div>
  );
};

export default Audi;
