import React, { InputHTMLAttributes } from 'react';
import { JsxElement } from 'typescript';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string | number | any;
  error?: string | number | any;
  icon?: JsxElement;
}
function CustomInput({ label, error, icon, ...props }: Props) {
  return (
    <label className="block mt-10">
      <span className="block text-sm font-medium text-slate-700">{label}</span>
      <input
        type={props.type}
        className={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${
          error ? 'border-red-500' : ''
        }`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </label>
  );
}

export default CustomInput;
