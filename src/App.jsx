import { Demo, Hero } from "./components/index";
import "./App.css";

function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
    <section className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
      <Hero />
      <Demo/>
    </section>
    </main>
  );
}

export default App;
