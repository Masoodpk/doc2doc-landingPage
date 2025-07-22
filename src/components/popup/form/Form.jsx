  import React, { useState } from 'react';
  import PhoneInput from 'react-phone-number-input';
  import 'react-phone-number-input/style.css';

  function Form({ setPopUp, onSuccess  }) {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      neetScore: '',
      preparing: false,
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else {
      const digitsOnly = formData.phone.replace(/\D/g, '');
      if (digitsOnly.length < 9) {
        newErrors.phone = 'Phone number must be at least 9 digits';
      } else if (digitsOnly.length > 15) {
        newErrors.phone = 'Phone number must not exceed 15 digits';
      }
    }

    if (!formData.neetScore) {
      newErrors.neetScore = 'NEET score is required';
    } else if (formData.neetScore > 720) {
      newErrors.neetScore = 'NEET score must not exceed 720';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;

      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));

      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };

   const handleSubmit = async () => {
  if (!validate()) return;
  
  setLoading(true);
  const fullPhone = formData.phone || '';
  const cleanedPhone = fullPhone.replace(/\D/g, '');
  const countryCode = fullPhone.replace(cleanedPhone, '');

  const form = new FormData();
  form.append('name', formData.name);
  form.append('email', formData.email);
  form.append('phone', fullPhone);
  form.append('score', formData.neetScore);
  form.append('preparing', formData.preparing ? 'yes' : 'no');

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwc2KyvexuofjCrklNlXbliIszGqOesTgTg0PjKUHyMA8LHVQy_rhDMKupZiVb4PR5OyQ/exec', {
      method: 'POST',
      body: form, // No need for Content-Type when using FormData
    });

    const result = await response.text();
    console.log('Google Sheet response:', result);
  onSuccess?.();
    setPopUp(false); // Close the popup
  } catch (error) {
    console.error('Submission failed:', error);
  }
  finally {
    setLoading(false);
  }
};


    return (
      <div className="max-w-md w-full mx-auto bg-white max-h-[400px] md:max-h-[702px] h-full p-4 rounded-lg relative">
        <form className="space-y-3 xl:space-y-5">
          {/* Name */}
          <div>
            <label className="block text-xs font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-1 xl:py-2 border border-[#D4D4D8] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border-[#D4D4D8] px-4 py-1 xl:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          {/* Phone with Country Code */}
       {/* Phone Number Field with Validation */}
<div>
  <label className="block text-xs font-medium mb-1">Phone Number</label>
         <PhoneInput
    international
    defaultCountry="IN"
    value={formData.phone}
    onChange={(value) => {
      if (!value) {
        setFormData(prev => ({ ...prev, phone: '' }));
        setErrors(prev => ({ ...prev, phone: '' }));
        return;
      }
      
      const digitsOnly = value.replace(/\D/g, '');
      
      // Allow input but mark as error if exceeds 15 digits
      setFormData(prev => ({
        ...prev,
        phone: value
      }));
      
      // Show real-time validation
      if (digitsOnly.length > 15) {
        setErrors(prev => ({
          ...prev,
          phone: 'Phone number must not exceed 15 digits'
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          phone: digitsOnly.length < 9 ? 'Phone number must be at least 9 digits' : ''
        }));
      }
    }}
    className="react-phone-input custom-input w-full border border-[#D4D4D8] px-3 py-2 rounded-md"
  />
  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
</div>


          {/* NEET Score */}
          <div>
            <label className="block text-xs font-medium mb-1">Your NEET Score?</label>
            <input
              type="number"
              name="neetScore"
              className="w-full px-4 py-1 xl:py-2 border border-[#D4D4D8] rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your score"
              value={formData.neetScore}
              onChange={handleChange}
              min="0"
              max="720"
            />
            {errors.neetScore && <p className="text-red-500 text-xs">{errors.neetScore}</p>}
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2 pt-[10px]">
            <input
              type="checkbox"
              name="preparing"
              checked={formData.preparing}
              onChange={handleChange}
              className="border-[#D4D4D8] w-[20px] h-[20px] outline-none"
            />
            <label className="text-xs md:text-sm text-gray-600">
              Are you planning to prepare for the NEET exam?
            </label>
          </div>

          {/* Submit Button */}
          <button
  type="button"
  className={`w-full mt-4 text-sm font-semibold py-3 rounded-full transition cursor-pointer ${
    loading ? 'bg-yellow-300 cursor-wait' : 'bg-yellow-400 hover:bg-yellow-500 text-gray-800'
  }`}
  onClick={handleSubmit}
  disabled={loading}
>
  {loading ? (
    <span className="flex items-center justify-center gap-2">
      <svg className="animate-spin h-4 w-4 text-gray-800" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
        />
      </svg>
      Submitting...
    </span>
  ) : (
    'Submit'
  )}
</button>

        </form>
      </div>
    );
  }

  export default Form;
