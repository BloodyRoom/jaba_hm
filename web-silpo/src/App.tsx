import './App.css'
import {Route, Routes} from "react-router";
import MainLayout from "./components/layouts/MainLayout.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";

function App() {

  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<RegisterPage />}/>
        </Route>
      </Routes>
  )

}

export default App
