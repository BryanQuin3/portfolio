import { AboutSection } from "./AboutSection";
import { ProfileSection } from "./ProfileSection";
export const ProfileInformation = () => {
  return (
    <section className="flex flex-col-reverse flex-wrapss mb-4 md:px-4 lg:px-0 lg:grid grid-cols-6 pt-4 gap-4 fadeInDown">
      <AboutSection />
      <ProfileSection />
    </section>
  );
};

export default ProfileInformation;
