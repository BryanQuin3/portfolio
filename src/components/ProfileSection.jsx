export const ProfileSection = () => {
  return (
    <figure
      className="col-span-2 rounded-3xl overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('./images/bg.webp')" }}
    >
      <img
        src="./images/my-profile.webp"
        alt="Bryan Quintana"
        className="m-auto h-64  md:h-96 lg:h-full"
      />
    </figure>
  );
};

export default ProfileSection;
