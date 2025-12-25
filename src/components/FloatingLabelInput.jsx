import React from "react";

const FloatingLabelInput = ({ type, placeholder, id }) => (
  <div className="relative z-0 w-full mb-8 group">
    <input
      type={type}
      name={id}
      id={id}
      className="block py-3 px-4 w-full text-base text-stone-900 dark:text-white bg-transparent border-0 border-b-2 border-stone-300 dark:border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-cyan-600 dark:focus:border-cyan-400 peer transition-colors"
      placeholder=" "
      required
    />
    <label
      htmlFor={id}
      className="peer-focus:font-medium absolute text-sm text-stone-500 dark:text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-3.5 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {placeholder}
    </label>
  </div>
);

export default FloatingLabelInput;
