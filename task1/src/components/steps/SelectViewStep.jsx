function SelectViewStep({ formData, updateField }) {
  const views = [
    { id: 'list', label: 'List' },
    { id: 'board', label: 'Board' },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-1">Select a view</h2>
      <p className="text-sm text-gray-500 text-center mb-6">
        You can also customize this views in settings
      </p>

      <div className="grid grid-cols-2 gap-4">
        {views.map((view) => (
          <button
            key={view.id}
            type="button"
            onClick={() => updateField('view', view.id)}
            className={`border-2 rounded-lg p-6 flex flex-col items-center gap-3 ${
              formData.view === view.id
                ? 'border-blue-500'
                : 'border-gray-200'
            }`}
          >
            <div className="w-16 h-16 border rounded flex items-center justify-center text-gray-400">
              {view.id === 'list' ? '☰' : '▤'}
            </div>
            <span className="font-medium">{view.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectViewStep;