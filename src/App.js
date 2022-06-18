import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./pages/Home/Home";
import VisitingPlace from "./components/place/visitingPlace";

function App() {
  return (
    <>
      <Router>
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/city/:cityId" element={<h1>city</h1>} />
            <Route path="/place" element={ <VisitingPlace /> } />
            <Route path="/login" element={<h1>login</h1>} />
            <Route path="/signup" element={<h1>signup</h1>} />

          <Route path="*" element={<h1 className="text-3xl font-bold underline">
            Not Found
          </h1>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
