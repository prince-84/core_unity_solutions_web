import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface PhoneInputComponentProps {
  value?: string;
  onChange?: (phone: string) => void;
}

export const PhoneInputComponent: React.FC<PhoneInputComponentProps> = ({ value: externalValue, onChange: externalOnChange }) => {
  const [internalPhone, setInternalPhone] = useState('');
  const phone = externalValue !== undefined ? externalValue : internalPhone;

  const handleChange = (newPhone: string) => {
    if (externalOnChange) {
      externalOnChange(newPhone);
    } else {
      setInternalPhone(newPhone);
    }
  };

  return (
    <div className="bg-white rounded-lg h-[46px] w-full flex items-center border border-gray-200 focus-within:border-[#cc2936] transition-colors">
      <PhoneInput
        defaultCountry="ae"
        value={phone}
        onChange={handleChange}
        inputClassName="!border-none !shadow-none !bg-transparent text-black px-4 py-3 text-sm w-full outline-none placeholder:text-gray-400 !h-full"
        countrySelectorStyleProps={{ 
          buttonClassName: '!border-none !bg-transparent !h-full !px-3 hover:!bg-gray-50',
          dropdownStyleProps: { className: '!rounded-lg !shadow-xl !mt-1' }
        }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

