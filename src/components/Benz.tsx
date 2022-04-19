import benzImage from "../assets/albert-vincent-wu-jbaWsWgimJw-unsplash.jpg";

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
        <img width="60%" className="rounded" src={benzImage} alt="benz" />
      </div>
      <div>
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@albertvincentwu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Albert Vincent Wu
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/mercedes-benz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
    </div>
  );
};

export default Benz;
