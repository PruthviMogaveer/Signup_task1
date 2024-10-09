import React from 'react';

const InputField = ({ label, type = 'text', placeholder, icon, options, isSelect, ...rest }) => {
    return (
        <div>
            <label className="block text-gray-600 text-sm font-semibold mb-1">{label}</label>
            {isSelect ? (
                <select
                    className="w-full py-2 border-b-2 bg-none border-gray-300 focus:outline-none focus:border-gray-500"
                    {...rest}
                >
                    <option>Select from options</option>
                    {options?.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <div className="relative">
                    {icon && <span className="absolute left-2 h-full content-center text-gray-400">{icon}</span>}
                    <input
                        type={type}
                        placeholder={placeholder}
                        className={`w-full p-2 ${icon ? 'pl-8' : ''} border-b-2 border-gray-300 focus:outline-none focus:border-gray-500`}
                        {...rest}
                    />
                </div>
            )}
        </div>
    );
};

export default InputField;
