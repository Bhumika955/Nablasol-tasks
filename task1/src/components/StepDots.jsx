function StepDots({ currentStep, totalSteps }) {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((dot) => (
        <div
          key={dot}
          className={`h-2 rounded-full transition-all ${
            dot === currentStep
              ? 'w-6 bg-blue-600'
              : 'w-2 bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export default StepDots;