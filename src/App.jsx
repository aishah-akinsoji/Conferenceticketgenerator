import SelectTicket from "./SelectTicket.jsx";
import Header from "./Header.jsx";
import "./index.css";
import ProgressBar from "./ProgressBar.jsx";
import Navigation from "./Navigation.jsx";
import AttendeeDetails from "./AttendeeDetails.jsx";

function App() {
  return (
    <>
      <div className="background">
        <Navigation />
        <SelectTicket />
      </div>
    </>
  );
}

export default App;
