import "../../style/InitialPage.css";

export default function InitialPage() {
  const introductionText = "Hi! I'm Nicola Del Pio Luogo!";

  return (
    <div className="initial-page">
      <h1>{introductionText}</h1>
      <h2>
        I'm an italian 16 years old guy and an aspirant software developer. My
        great passione is full-stack development
      </h2>
      <p className="sign">LinkShake</p>
    </div>
  );
}
