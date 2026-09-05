import { useState } from 'react';

function ProfileStep({ formData, updateField, errors }) {
  const [touched, setTouched] = useState({});

  const handleBlur = (fieldName) => {
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
  };

  const fieldClass = (fieldName) =>
    `border rounded px-3 py-2 w-full focus:outline-none focus:ring-1 ${
      touched[fieldName] && errors[fieldName]
        ? 'border-red-400 focus:ring-red-400'
        : 'border-gray-300 focus:ring-indigo-400'
    }`;

  return (
    <div>
      <p className="text-sm text-gray-400 text-center mb-1">Step 1</p>
      <h2 className="text-2xl font-bold text-center mb-2">Your Profile</h2>
      <p className="text-sm text-gray-500 text-center mb-8 max-w-md mx-auto">
        Enter the login information for your account. You will be able to
        create additional users after registering.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
            onBlur={() => handleBlur('firstName')}
            className={fieldClass('firstName')}
          />
          {touched.firstName && errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
            onBlur={() => handleBlur('lastName')}
            placeholder="Input Your Last Name"
            className={fieldClass('lastName')}
          />
          {touched.lastName && errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            placeholder="Input Your Email"
            className={fieldClass('email')}
          />
          {touched.email && errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            placeholder="Input Your Phone Number"
            className={fieldClass('phone')}
          />
          {touched.phone && errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => updateField('password', e.target.value)}
            onBlur={() => handleBlur('password')}
            placeholder="Create Password"
            className={fieldClass('password')}
          />
          {touched.password && errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Confirm Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => updateField('confirmPassword', e.target.value)}
            onBlur={() => handleBlur('confirmPassword')}
            placeholder="Confirm Your Password"
            className={fieldClass('confirmPassword')}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileStep;