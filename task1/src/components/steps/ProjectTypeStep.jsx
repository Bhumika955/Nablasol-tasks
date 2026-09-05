function ProjectTypeStep({ formData, updateField }) {
  const tabs = ['Time & Materials', 'Fixed Fee', 'Non-Billable'];

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-1">Project type</h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        Don't panic — You can also customize this types in settings
      </p>

      {/* Tabs */}
      <div className="flex border rounded-lg overflow-hidden mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => updateField('projectType', tab)}
            className={`flex-1 py-2 text-sm font-medium ${
              formData.projectType === tab
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {formData.projectType === 'Time & Materials' && (
        <>
          <div className="mb-4">
            <label className="block font-medium mb-1">Hourly</label>
            <p className="text-sm text-gray-500 mb-2">
              We need hourly rates to track your project's billable amount.
            </p>
            <input
              type="text"
              value={formData.hourlyRate}
              onChange={(e) => updateField('hourlyRate', e.target.value)}
              placeholder="₹ 0.00"
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={formData.budgetResets}
                onChange={(e) => updateField('budgetResets', e.target.checked)}
              />
              Budget resets every month
            </label>
            <label className="flex items-center gap-2 text-sm mt-2">
              <input
                type="checkbox"
                checked={formData.sendAlerts}
                onChange={(e) => updateField('sendAlerts', e.target.checked)}
              />
              Send email alerts if project exceeds
              <input
                type="text"
                value={formData.alertPercent}
                onChange={(e) => updateField('alertPercent', e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-16 text-center"
              />
              % of budget
            </label>
          </div>
        </>
      )}
      {formData.projectType === 'Fixed Fee' && (
  <div className="mb-4">
    <label className="block font-medium mb-1">Total Budget</label>
    <p className="text-sm text-gray-500 mb-2">
      Set a fixed budget for the entire project.
    </p>
    <input
      type="text"
      value={formData.hourlyRate}
      onChange={(e) => updateField('hourlyRate', e.target.value)}
      placeholder="₹ 0.00"
      className="border border-gray-300 rounded px-3 py-2 w-full"
    />
  </div>
)}

{formData.projectType === 'Non-Billable' && (
  <p className="text-sm text-gray-500 text-center py-6">
    This project won't be billed to the client.
  </p>
)}
    </div>
  );
}

export default ProjectTypeStep;