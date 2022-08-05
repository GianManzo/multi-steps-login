import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FirstStepForm } from './pages/FirstStepForm/FirstStepForm';
import { SecondStepForm } from './pages/SecondStepForm/SecondStepForm';
import { ThirdStepForm } from './pages/ThirdStepForm/ThirdStepForm';
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstStepForm />} />
        <Route path='/step2' element={<SecondStepForm />} />
        <Route path='/step3' element={<ThirdStepForm />} />
      </Routes>
    </BrowserRouter>
  );
};
