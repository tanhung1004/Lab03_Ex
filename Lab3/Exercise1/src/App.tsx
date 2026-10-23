
import DeveloperCard from "./components/DeveloperCard";

function App() {
  // Profile data inherited from the Lab 2 card concept
  const developer = {
    name: "Nguyen Tan Hung",
    gamerTag: "tanhung",
    role: "Frontend Developer & Pro Gamer",
    location: "Vietnam",
    experience: 2,
    skills: [
      "React 19",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],

    // TODO: Replace with your own HTTPS avatar image
    avatarUrl: "",
  };

  return (
    <main>
      <h1>Developer & Pro-Gamer Profile</h1>

      <DeveloperCard developer={developer} />
    </main>
  );
}

export default App;
