import benzImage from "../assets/benz.jpg";

const Benz = () => {
  return (
    <div className="mt-4">
      <div className="fs-3">
        <strong>Mercedes-Benz, </strong>
        commonly referred to as just Mercedes, is a German luxury automotive
        marque. Mercedes-Benz and subsidiary Mercedes-Benz AG – of Daimler AG –
        are headquartered in Stuttgart, Baden-Württemberg, Germany.
        Mercedes-Benz produces consumer luxury vehicles and commercial vehicles.
      </div>
      <div className="mt-4">
        <img width="60%" className="rounded-md" src={benzImage} alt="benz" />
      </div>
  
    </div>
  );
};

export default Benz;
