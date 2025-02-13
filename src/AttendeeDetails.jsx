import Header from "./Header.jsx";
import Cancel from "./Cancel.jsx";
import Next from "./Next.jsx";

function AttendeeDetails() {
  return (
    <div className="container">
      <header className="heading">
        <p className="Ticketselection">Attendee Details</p>
        <p className="steps">Step 1/3</p>
        <ProgressBar />
      </header>
      <div className="ticketDetails">
        <div className="ticketInfo">
          <h1>Techember Fest "25</h1>
          <p>
            Join us for an unforgettable experience at
            <br /> [Event Name]! secure your spot now.
          </p>
          <p>📍[Event Location] || March, 15, 2025 | 7:00 PM</p>
        </div>
        <hr />
        <p className="left">Select Ticket Type:</p>
        <div className="ticketType">
          <div className="ticket" onclick="">
            <p className="bold">Free</p>
            <span>
              <p>REGULAR ACCESS</p>
              <p>20/52</p>
            </span>
          </div>
          <div className="ticket" onclick="">
            <p className="bold">$150</p>
            <span>
              <p>VIP ACCESS</p>
              <p>20/52</p>
            </span>
          </div>
          <div className="ticket" onclick="">
            <p className="bold">$150</p>
            <span>
              <p>VVIP ACCESS</p>
              <p>20/52</p>
            </span>
          </div>
        </div>
        <p className="left">Number of Tickets</p>
        <select className="numberOfTicket">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
        <div class="buttons">
          <Cancel />
          <Next />
        </div>
      </div>
    </div>
  );
}

export default AttendeeDetails;
