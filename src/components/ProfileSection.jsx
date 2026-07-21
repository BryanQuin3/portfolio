export const ProfileSection = () => {
  return (
    <figure
      className="col-span-2 rounded-3xl overflow-hidden"
    >
      <img
        src="./images/my-profile.webp"
        alt="Bryan Quintana"
        className="m-auto h-64 w-full object-cover object-top md:h-96 lg:h-full"
      />
    </figure>
  );
};

export default ProfileSection;
