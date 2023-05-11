import { useState } from 'react';

function ProgressBar() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { number: 1, label: 'Step 1' },
    { number: 2, label: 'Step 2' },
    { number: 3, label: 'Step 3' },
  ];

  return (
    <div className='relative pt-1'>
      <div className='flex mb-2 items-center justify-between'>
        {steps.map((step) => (
          <div className='flex-1' key={step.number}>
            <div className='relative w-full'>
              <div className='absolute top-0 left-0 -ml-px w-0.5 h-full bg-gray-200'></div>
              <div
                className={`${
                  step.number <= currentStep && 'bg-green-500'
                } transition-all duration-500 ease-out absolute h-2 w-full bg-gray-200`}
                // style={{ width: `${(100 / steps.length) * currentStep}%` }}
              ></div>
            </div>  
            <div
              className={`text-sm font-semibold ${
                step.number <= currentStep ? 'text-green-500' : 'text-gray-400'
              } text-center mt-2`}
            >
              {step.label}
            </div>
          </div>
        ))}
      </div>
      <div className='text-center'>
        <button
          className='bg-green-500 text-white px-4 py-2 rounded-md mt-4'
          onClick={() =>
            setCurrentStep((prevStep) =>
              prevStep < steps.length ? prevStep + 1 : prevStep
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
