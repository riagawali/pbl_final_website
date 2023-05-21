import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
import Trip4 from "../assets/9.jpg";
import Trip5 from "../assets/1.jpg";

function Trip() {
  return (
    <div className="trip">
      {/* <h1>About Us</h1> */}
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading=" Pranjali"
          text="Hi! This is Pranjali"
        />

        <TripData
          image={Trip2}
          heading=" Vaishnavi"
          text="Hi! This is Vaishnavi"
        />

        <TripData image={Trip3} heading=" Ria" text="Hi! This is Ria" />

        <TripData
          image={Trip4}
          heading=" Dhanashri"
          text="Hi! This is Dhanashri"
        />

        <TripData
          image={Trip5}
          heading="Iffat khan "
          text="Hi! This is Iffat Khan"
        />
      </div>
    </div>
  );
}

export default Trip;
