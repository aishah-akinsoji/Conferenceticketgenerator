import React, { useState } from "react"; // CSS for styling

const ProgressBar = () => {
  const [step, setStep] = useState(1); // Track current step (1, 2, or 3)

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${(step / 3) * 100}%` }}
      ></div>
      <p>Step {step} of 3</p>
      <button onClick={nextStep} disabled={step === 3}>
        Next
      </button>
    </div>
  );
};

export default ProgressBar;
