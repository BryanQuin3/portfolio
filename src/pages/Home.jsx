import { ProfileInformation } from "../components/ProfileInformation";
import { ProjectsSection } from "../components/ProjectsSection";
export const Home = () => {
  return (
    <div className="px-4 lg:px-0">
      <ProfileInformation />
      <ProjectsSection />
    </div>
  );
};

export default Home;
