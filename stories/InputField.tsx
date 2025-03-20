import React from "react";

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />
      <style jsx>{`
        .input-container {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .input-label {
          font-size: 14px;
          font-weight: 500;
          color: #333;
        }
        .input-field {
          padding: 8px 12px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          outline: none;
          transition: border 0.2s ease-in-out;
        }
        .input-field:focus {
          border-color: #007bff;
        }
      `}</style>
    </div>
  );
};

export default InputField;
