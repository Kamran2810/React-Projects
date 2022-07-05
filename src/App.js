import { Routes, Route } from 'react-router-dom';
import Bmi from './Route/Bmi';
import Home from './Route/home';
import Shopping from './Route/Shopping';
import Imagegallery from './Route/imggallery';

export default function App() {  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="bmi" element={<Bmi />} />
          <Route path="imggallery" element={<Imagegallery />} />
          <Route path="shopping" element={<Shopping />} />
        </Route>
      </Routes>

    </> 
    )
}
