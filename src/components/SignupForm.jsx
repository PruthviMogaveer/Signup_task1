import React from 'react';
import InputField from './InputField';
import { FaUser, FaEnvelope, FaPhoneAlt, FaLock } from 'react-icons/fa'; // Icons for the inputs

function SignupForm() {
    return (

        <div className="flex flex-col items-center max-w-lg w-full bg-white p-8 rounded-3xl shadow-lg border border-gray-200 ">

            {/* Form Header */}
            <h2 className="text-red-500 text-base font-semibold mb-2">
                Please complete to create your account
            </h2>
            <p className=" mb-4 font-normal text-sm">
                Already have an account?{' '}
                <a href="#" className="text-blue-500 hover:underline">
                    Click here
                </a>
            </p>

            {/* Form */}
            <form className="w-full space-y-4">
                {/* First Name & Last Name */}
                <div className="flex space-x-4">
                    <InputField
                        label="First Name"
                        // placeholder="First Name"
                        icon={<FaUser />}
                    />
                    <InputField
                        label="Last Name"
                        // placeholder="Last Name"
                        icon={<FaUser />}
                    />
                </div>

                {/* Email */}
                <InputField
                    label="Email"
                    type="email"
                    // placeholder="Email"
                    icon={<FaEnvelope />}
                />

                {/* Phone */}
                <InputField
                    label="Phone"
                    type="tel"
                    // placeholder="Phone"
                    icon={<FaPhoneAlt />}
                />

                {/* Password */}
                <InputField
                    label="Password"
                    type="password"
                    // placeholder="Password"
                    icon={<FaLock />}
                />

                {/* Select Country */}
                <InputField
                    label="Select Country"
                    isSelect
                    options={[
                        { value: 'us', label: 'United States' },
                        { value: 'in', label: 'India' },
                        { value: 'uk', label: 'United Kingdom' },
                    ]}
                />

                {/* Select Company */}
                <InputField
                    label="Select Company"
                    isSelect
                    options={[
                        { value: 'company1', label: 'Company 1' },
                        { value: 'company2', label: 'Company 2' },
                    ]}
                />

                {/* Checkbox */}
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        className="h-4 w-4 border border-gray-300 rounded"
                    />
                    <label className="text-sm text-gray-800">
                        I have read and agree with your Terms of Business
                    </label>
                </div>

                {/* Submit Button */}
                <div className='w-full flex items-center justify-center pt-5'>
                    <button
                        type="submit"
                        className="w-auto px-5 py-3 bg-orange-500 text-white rounded-full font-semibold text-base  hover:bg-orange-600"
                    >
                        LET'S BEGIN
                    </button>
                </div>
            </form>
        </div>

    );
}

export default SignupForm;
