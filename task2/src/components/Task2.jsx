import { useState, useEffect } from 'react';
import ProfileStep from './steps/ProfileStep';
import BusinessInfoStep from './steps/BusinessInfoStep';
import StepHeader from './StepHeader';
function Task2() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('task2-data');
    const defaults = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      brandName: '',
      brandType: '',
      streetAddress: '',
      city: '',
      zipCode: '',
      taxId: '',
    };
    return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
  });

  useEffect(() => {
    localStorage.setItem('task2-data', JSON.stringify(formData));
  }, [formData]);

  const updateField = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const goNext = () => setStep(prev => Math.min(prev + 1, 2));
  const goBack = () => setStep(prev => Math.max(prev - 1, 1));
  const isStep1Valid = () => {
  const { firstName, lastName, email, phone, password, confirmPassword } = formData;

  if (!firstName.trim() || !lastName.trim()) return false;

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  const phoneDigits = phone.replace(/\D/g, '');
  if (phoneDigits.length < 10) return false;

  if (password.length < 6) return false;
  if (password !== confirmPassword) return false;

  return true;
};
const isStep2Valid = () => {
  const { brandName, brandType, streetAddress, city, zipCode, taxId } = formData;
  return (
    brandName.trim() !== '' &&
    brandType !== '' &&
    streetAddress.trim() !== '' &&
    city.trim() !== '' &&
    zipCode.trim() !== '' &&
    taxId.trim() !== ''
  );
};
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-purple-500 flex flex-col">
      <div className="flex items-center justify-center px-8 py-4">
        <div className="flex items-center gap-3">
      <h1 className="text-white text-xl font-medium">Create New Account</h1>
      </div>
      <a href="#" className="ml-8 text-white text-sm">Contact Us</a>
    </div>

     <div className="flex flex-1 items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-8">
        <StepHeader currentStep={step} />
        {step === 1 && (
          <ProfileStep formData={formData} updateField={updateField} />
        )}
        {step === 2 && (
          <BusinessInfoStep formData={formData} updateField={updateField} />
        )}

        <div className="flex justify-between mt-6">
          <button
            onClick={goBack}
            disabled={step === 1}
            className="text-blue-500 disabled:opacity-30"
          >
            ← Back to Login
          </button>
          {step < 2 ? (
          <button
  onClick={goNext}
  disabled={
    (step === 1 && !isStep1Valid()) ||
    (step === 2 && !isStep2Valid())
  }
  className="bg-indigo-500 text-white px-6 py-2 rounded font-medium disabled:opacity-40 disabled:cursor-not-allowed"
>
  Next Step →
</button>
          ): (
  <button
    onClick={() => alert('Step 2 complete! (Step 3 not required per task brief)')}
    disabled={!isStep2Valid()}
    className="bg-green-600 text-white px-6 py-2 rounded font-medium disabled:opacity-40"
  >
    Complete
  </button>
          )}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Task2;