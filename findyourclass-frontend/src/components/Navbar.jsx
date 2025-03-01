import AmikomLogo from "../assets/amikom.svg";

const Navbar = () => {
  return (
    <nav className="bg-white py-8 w-full fixed top-0 left-0 shadow-md">
      <div className="container mx-auto flex items-center px-4">
        <img src={AmikomLogo} alt="Logo" className="ml-5 w-10" />
      </div>
    </nav>
  );
};

export default Navbar;
