import React, { ChangeEvent } from "react";

interface NumericInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const InputField: React.FC<NumericInputProps> = ({
  value,
  onChange,
  disabled,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const regex = /^[0-9]*\.?[0-9]*$/;

    if (regex.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <input
      minLength={1}
      maxLength={79}
      spellCheck="false"
      type="text"
      name="swap-currency"
      id="swap-currency-input"
      autoComplete="off"
      placeholder="0"
      inputMode="decimal"
      autoCorrect="off"
      value={value}
      pattern="^[0-9]*[.,]?[0-9]*$"
      onChange={handleInputChange}
      className="filter-none opacity-100 transition-opacity duration-250 ease-in-out text-left text-3xl font-medium max-h-11 text-gray-900 pointer-events-auto w-0 relative outline-none border-none flex-auto bg-transparent whitespace-nowrap overflow-hidden text-ellipsis p-0 appearance-none"
      disabled={disabled}
    />
  );
};
