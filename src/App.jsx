import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent">
        <Hero />
        <Technologies />
      </div>
    </>
  );
}

export default App;
