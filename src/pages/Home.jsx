import { ProfileInformation } from "../components/ProfileInformation";
import { ProjectsSection } from "../components/ProjectsSection";
import { Contact } from "../components/Contact";
export const Home = () => {
  return (
    <div className="px-4 lg:px-0">
      <ProfileInformation />
      <ProjectsSection />
      <Contact />
    </div>
  );
};

export default Home;
