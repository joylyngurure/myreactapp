import React from 'react';

function Button2(props) {
  const { label, className, onClick } = props;

  return (
    <button className={`w-full pl-16 pr-16 bg-blue-500 text-white py-3 mt-3 rounded-xl hover:bg-blue-600 transition duration-200 ${className}`}
      onClick={onClick}
    > Reset Password
      {label}
    </button>
  );
}

export default Button2;