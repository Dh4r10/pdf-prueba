import ModelPDF from './modelPDF';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ModelPDF />} />
    </Routes>
  );
}

export default App;
