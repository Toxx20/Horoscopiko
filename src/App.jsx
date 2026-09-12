import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Index } from "./pages/Index.jsx"
import { View } from "./pages/View.jsx"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index/>} ></Route>
        <Route path="view/:postId" element={<View/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
