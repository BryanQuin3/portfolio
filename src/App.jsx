import { Header } from "./components/Header";
import { ProfileInformation } from "./components/ProfileInformation";
import { ProjectsSection } from "./components/ProjectsSection";
function App() {
  return (
    <div className="container m-auto max-w-screen-lg mb-10">
      <Header />
      <ProfileInformation />
      <ProjectsSection />
    </div>
  );
}

export default App;
