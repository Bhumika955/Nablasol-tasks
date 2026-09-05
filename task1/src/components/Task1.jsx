import { useState, useEffect } from 'react';
import CreateProjectStep from './steps/CreateProjectStep';
import ProjectTypeStep from './steps/ProjectTypeStep';
import SelectViewStep from './steps/SelectViewStep';
import TasksStep from './steps/TasksStep';
import StepDots from './StepDots';

function Task1() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('task1-data');
  const defaults = {
    projectName: '',
    client: '',
    startDate: '',
    endDate: '',
    notes: '',
    projectType: 'Time & Materials',
    hourlyRate: '',
    budgetResets: false,
    sendAlerts: true,
    alertPercent: '80.00',
    view: '',
    tasks: [],
  };
  return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
});

  useEffect(() => {
    localStorage.setItem('task1-data', JSON.stringify(formData));
  }, [formData]);

  const updateField = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const goNext = () => setStep(prev => Math.min(prev + 1, 4));
  const goBack = () => setStep(prev => Math.max(prev - 1, 1));
  const handleFinish = () => {
  console.log('Final form data:', formData);
  alert('Project created! Check console for data.');
};
const isStep1Valid = () => {
  if (formData.projectName.trim() === '') return false;
  if (!formData.startDate || !formData.endDate) return false;
  if (new Date(formData.endDate) < new Date(formData.startDate)) return false;
  return true;
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        {/* step ke hisaab se component render karna hai yaha */}
        {step === 1 && (
  <CreateProjectStep formData={formData} updateField={updateField} />
)}
{step === 2 && (
  <ProjectTypeStep formData={formData} updateField={updateField} />
)}
{step === 3 && (
  <SelectViewStep formData={formData} updateField={updateField} />
)}
{step === 4 && (
  <TasksStep formData={formData} updateField={updateField} />
)}
<div className="flex justify-between mt-6">
  <button onClick={goBack} disabled={step === 1} className="text-gray-500 disabled:opacity-30">
    ← Back
  </button>
  {step < 4 ? (
    <button
      onClick={goNext}
      disabled={step === 1 && !isStep1Valid()}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-40 disabled:cursor-not-allowed"
    >
      Next
    </button>
  ) : (
    <button onClick={handleFinish} className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium">
      Finish
    </button>
  )}
</div>
<StepDots currentStep={step} totalSteps={4} />
      </div>
    </div>
  );
}

export default Task1;