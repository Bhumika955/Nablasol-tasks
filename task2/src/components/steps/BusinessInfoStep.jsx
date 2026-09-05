function BusinessInfoStep({ formData, updateField }) {
  return (
    <div>
      <p className="text-sm text-gray-400 text-center mb-1">Step 2</p>
      <h2 className="text-2xl font-bold text-center mb-2">Business Information</h2>
      <p className="text-sm text-gray-500 text-center mb-8">
        Please, enter information about your company.
      </p>

      <h3 className="text-indigo-500 text-sm font-semibold mb-3">GENERAL INFORMATION</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">
            Brand Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.brandName}
            onChange={(e) => updateField('brandName', e.target.value)}
            placeholder="Input Your Brand Name"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Brand Type<span className="text-red-500">*</span>
          </label>
          <select
            value={formData.brandType}
            onChange={(e) => updateField('brandType', e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-indigo-400"
          >
            <option value="">Select Type of Your Brand</option>
            <option value="local">Local</option>
            <option value="national">National</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Street Address<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.streetAddress}
            onChange={(e) => updateField('streetAddress', e.target.value)}
            placeholder="Input Your Street Address"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            City<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateField('city', e.target.value)}
            placeholder="Input City"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Zip Code<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.zipCode}
            onChange={(e) => updateField('zipCode', e.target.value)}
            placeholder="Input Zip Code"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-indigo-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Tax ID Number<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.taxId}
            onChange={(e) => updateField('taxId', e.target.value)}
            placeholder="Input Tax ID Number"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-indigo-400"
          />
        </div>
      </div>

      <h3 className="text-indigo-500 text-sm font-semibold mb-3">DOCUMENTS</h3>
      <p className="text-sm text-gray-500 mb-3">
        Once the following documents are signed, you'll be ready to get started
      </p>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
        <div className="flex flex-1 items-center justify-between border rounded px-4 py-3">
          <span>Electronically sign the agreement(s)</span>
          <span className="text-green-500 font-bold">✓</span>
        </div>
        <button className="bg-indigo-400 text-white w-9 h-9 rounded flex items-center justify-center">
      ›
    </button>
    </div>
    <div className="flex items-center gap-3">
        <div className="flex flex-1 items-center justify-between border rounded px-4 py-3">
          <span>Non adult beverage Kroger market supplier waiver and release</span>
          <span className="text-red-500 font-bold">✕</span>
        </div>
        <button className="bg-indigo-400 text-white w-9 h-9 rounded flex items-center justify-center">
      ›
    </button>
      </div>
      </div>

      <h3 className="text-indigo-500 text-sm font-semibold mt-6 mb-3">COI PDF UPLOAD</h3>
      <p className="text-sm text-gray-500 mb-3">
  Once the following documents are signed, you'll be ready to get started
</p>
    <div className="flex items-center gap-3">
      <div className="flex flex-1 items-center justify-between border rounded px-4 py-3">
        <span>Electronically sign the agreement(s)</span>
        <span className="text-green-500 font-bold">✓</span>
      </div>
      <button className="bg-indigo-400 text-white w-9 h-9 rounded flex items-center justify-center">
      ›
    </button>
    </div>
    </div>
  );
}

export default BusinessInfoStep;