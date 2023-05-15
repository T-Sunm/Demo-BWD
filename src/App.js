import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Step1CHome from './components/Step1CHome'
import Step2CHome from './components/Step2CHome';
import Step3CHome from './components/Step3CHome';
import Step4CHome from './components/Step4CHome';
import Step5CHome from './components/Step5CHome';
import Step6CHome from './components/Step6CHome';
import Step7CHome from './components/Step7CHome';
import Step8CHome from './components/Step8CHome';
import Step9Home from './components/Step9Home';
import ProcessBar from './components/ProcessBar/ProccessBar';
function App() {
   const [currentStep, setCurrentStep] = useState(1);

   const steps = [
     { number: 1, component: <Step1CHome /> },
     { number: 2, component: <Step2CHome /> },
     { number: 3, component: <Step3CHome /> },
     { number: 4, component: <Step4CHome /> },
     { number: 5, component: <Step5CHome /> },
     { number: 6, component: <Step6CHome /> },
     { number: 7, component: <Step7CHome /> },
     { number: 8, component: <Step8CHome /> },
     { number: 9, component: <Step9Home /> },
   ];
  return (
    <div className="App">
      <Header />
      {/* {steps[currentStep - 1].component} */}
      {/* <Step1CHome /> */}
      <Step2CHome />
      {/* <Step3CHome /> */}
      {/* <Step4CHome /> */}
      {/* <Step5CHome /> */}
      {/* <Step6CHome /> */}
      {/* <Step7CHome /> */}
      {/* <Step8CHome /> */}
      {/* <Step9Home /> */}

      {/* <ProcessBar steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep}/> */}
    </div>
  );
}

export default App;
