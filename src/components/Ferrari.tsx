import ferrariImage from "../assets/ferrari.jpg";

const Ferrari = () => {
  return (
    <div className="mt-4">
      <div className="fs-3">
        <strong>Ferrari </strong>
        S.p.A. is an Italian luxury sports car manufacturer based in Maranello,
        Italy. Founded by Enzo Ferrari in 1939 out of the Alfa Romeo race
        division as Auto Avio Costruzioni, the company built its first car in
        1940, and produced its first Ferrari-badged car in 1947.
      </div>
      <div className="mt-4">
        <img width="60%" className="rounded" src={ferrariImage} alt="ferrari" />
      </div>
   
    </div>
  );
};

export default Ferrari;
