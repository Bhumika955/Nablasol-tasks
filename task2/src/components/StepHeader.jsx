function StepHeader({ currentStep }) {
  const steps = ['Your Profile', 'Business Information', 'Additional Users'];

  return (
    <div className="flex mb-8 rounded-t-lg overflow-hidden">
      {steps.map((label, index) => {
        const stepNum = index + 1;
        const isActive = stepNum === currentStep;
        const isPast = stepNum < currentStep;
        return (
          <div
            key={label}
            className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium ${
              isActive
                ? 'bg-indigo-400 text-white'
                : isPast
                ? 'bg-indigo-100 text-indigo-500'
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                isActive ? 'bg-white text-indigo-500' : 'bg-white/50'
              }`}
            >
              {stepNum}
            </span>
            {label}
          </div>
        );
      })}
    </div>
  );
}

export default StepHeader;