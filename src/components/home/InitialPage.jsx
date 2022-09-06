import "../../style/InitialPage.css";

export default function InitialPage() {
  const introductionText = "Hi! I'm Nicola Del Pio Luogo";

  return (
    <div className="initial-page">
      <h1>{introductionText}</h1>
      <h2>
        I'm an Italian high-school student with a great passion for full-stack
        web development
      </h2>
      <p className="sign">LinkShake</p>
    </div>
  );
}
