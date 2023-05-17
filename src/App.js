import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ChatGPT from "./Pages/ChatGPT"



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ChatGPT/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
