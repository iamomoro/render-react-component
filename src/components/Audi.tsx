import audiImage from "../assets/roberto-nickson-IOI3KCYsn0o-unsplash.jpg";

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
      <div>
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@rpnickson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Roberto Nickson
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/audi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
    </div>
  );
};

export default Audi;
