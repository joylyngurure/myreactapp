import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-end">
        <IoIosArrowBack
          size={25}
          className={`cursor-pointer ${open ? 'rotate-0' : 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      {/* Conditionally render content based on the open state */}
      {open && (
        <div className="absolute left-0 mt-2 p-4 bg-white shadow-lg">
          <p>Your dropdown content goes here</p>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
