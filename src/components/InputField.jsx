import React from "react";

export default function InputField({
  label,
  type,
  name,
  value,
  onChange,
  className,
  placeholder,
  error,
}) {
  return (
    <div className="form-group">
      <label className="block sm:text-sm text-[8px] text-gray-700 uppercase">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 block w-full md:px-3 md:py-2 p-1 md:text-base  border-2 border-black shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:sm:text-sm text-[8px] ${
          error && "border-red-500"
        } ${className}`}
      />
      {error && <p className="text-red-500 md:text-sm text-[8px]">{error}</p>}
    </div>
  );
}
