import { Header } from "./components/Header";
import { ProfileInformation } from "./components/ProfileInformation";

function App() {
  return (
    <div className="container m-auto max-w-screen-lg mb-40">
      <Header />
      <ProfileInformation />
    </div>
  );
}

export default App;
