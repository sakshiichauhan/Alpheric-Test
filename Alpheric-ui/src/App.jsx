// Importing Pages
import HomePage from "./Pages/Homepage";
import Navbar from "./Layout/Navbar";
import Next from "./Pages/How";
import SolutionPage from "./Pages/SolutionPage";
import Let from "./Pages/Let";
import Dreamer from "./Pages/Dreamer";
import Hire from "./Pages/Hire";
import So from "./Pages/So";
import ImagePage from "./Pages/Image";
import Footer from "./Pages/Footer";
import Fab from "./Components/Fab";

function App() {
  return (
    <>
      <Navbar />
      <Fab />
      <div>
        <HomePage />
        <Next/>
        <SolutionPage />
        <Let/>
        <Dreamer/>
        <Hire/>
        <So/>
        <ImagePage />
        <Footer />
      </div>
    </>
  );
}

export default App;
