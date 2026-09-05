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
  const getStep1Errors = () => {
    const { firstName, lastName, email, phone, password, confirmPassword } = formData;
    const errors = {};

    if (!firstName.trim()) errors.firstName = 'First name is required';
    if (!lastName.trim()) errors.lastName = 'Last name is required';

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email.trim())) {
      errors.email = 'Enter a valid email address';
    }

    const phoneDigits = phone.replace(/\D/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(phoneDigits)) {
      errors.phone = 'Enter a valid 10-digit phone number';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const isStep1Valid = () => Object.keys(getStep1Errors()).length === 0;
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
        <h1 className="text-white text-base sm:text-xl font-medium">Create New Account</h1>
        <a href="#" className="ml-8 text-white text-xl sm:text-sm">Contact Us</a>
      </div>

      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-8">
          <StepHeader currentStep={step} />
          {step === 1 && (
            <ProfileStep
              formData={formData}
              updateField={updateField}
              errors={getStep1Errors()}
            />
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
            ) : (
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