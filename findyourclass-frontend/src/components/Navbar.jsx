import { useState } from "react";
import { Info, ChevronDown } from "lucide-react";
import AmikomLogo from "../assets/amikom.svg";
import Suggestion from "./Suggestion"; // Import modal Kritik & Saran

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white py-6 w-full fixed top-0 left-0 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          <img src={AmikomLogo} alt="Logo" className="ml-5 w-10" />

          {/* Icon Info & Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center gap-1 p-2 rounded-md"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Info className="w-6 h-6 text-gray-700" />
              <ChevronDown className="w-4 h-4 text-gray-700" />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border">
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                  onClick={() => { setModalOpen(true); setDropdownOpen(false); }}
                >
                  Kritik & Saran
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Panggil Modal Kritik & Saran */}
      <Suggestion isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;
