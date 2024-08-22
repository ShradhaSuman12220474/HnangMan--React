// import TextInputForm from "./components/TextInputForm/TextInputForm";
import { Route, Routes } from "react-router-dom";
import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";




function App(){
  return (
    // <div>
    //   <h1 className="font-semibold text-3xl">Welcome To HangMan</h1>
    //   <h2>Hello</h2>
    //   <TextInputFormContainer/>
    // </div>

    <Routes>
      <Route path="/play" element={<PlayGame />} />
      <Route path="/start" element={<StartGame />} />
      <Route path="*" element={<div> not found </div>} />
    </Routes>
  )
}

export default App;