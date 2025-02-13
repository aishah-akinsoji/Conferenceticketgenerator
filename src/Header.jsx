import ProgressBar from "./ProgressBar.jsx";

function Header() {
  return (
    <header className="heading">
      <p className="Ticketselection">Ticket Selection</p>
      <p className="steps">Step 1/3</p>
      <ProgressBar />
    </header>
  );
}

export default Header;
