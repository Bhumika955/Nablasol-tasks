function CreateProjectStep({ formData, updateField }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-6">Create a project</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Project name</label>
        <input
          type="text"
          value={formData.projectName}
          onChange={(e) => updateField('projectName', e.target.value)}
          placeholder="Enter project name here"
          className="border border-blue-400 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Client</label>
        <div className="flex gap-2">
          <select
            value={formData.client}
            onChange={(e) => updateField('client', e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 flex-1"
          >
            <option value="">Select a client</option>
            <option value="client-a">Client A</option>
            <option value="client-b">Client B</option>
          </select>
          <button
            type="button"
            className="border border-gray-300 rounded px-3 py-2 text-sm whitespace-nowrap"
          >
            + New Client
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Dates</label>
        <div className="flex gap-2 items-center">
          <input
            type="date"
            value={formData.startDate}
            onChange={(e) => updateField('startDate', e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 flex-1"
          />
          <span>-</span>
          <input
            type="date"
            value={formData.endDate}
            onChange={(e) => updateField('endDate', e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 flex-1"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Notes</label>
        <textarea 
          value={formData.notes}
          onChange={(e) => updateField('notes', e.target.value)}
          placeholder="Optional"
          rows={3}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>
    </div>
  );
}

export default CreateProjectStep;