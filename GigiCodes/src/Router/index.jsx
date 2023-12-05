import Home from '../pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default index