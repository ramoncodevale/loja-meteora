import Logo from "../../public/logo-meteora.png"
import { useState } from "react";
import { BiX } from "react-icons/bi";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [menu, setMenu] = useState(false);

  function handleToggleMenu() {
    setMenu((prev) => !prev);
  }

  return (
    <nav className="lg:w-full bg-black p-4 relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-10">
          <img src={Logo} alt="Logo da Meteora" />
          <ul className="hidden lg:flex items-center gap-10">
            <li><a className="text-white font-normal" href="#">Home</a></li>
            <li><a className="text-white font-normal" href="#">Nossa lojas</a></li>
            <li><a className="text-white font-normal" href="#">Novidades</a></li>
            <li><a className="text-white font-normal" href="#">Promoções</a></li>
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <input className="bg-white w-[170px] h-[38px]" type="text" placeholder="  Digite o produto" />
          <button className="text-white border-white border-2 w-[80px] h-[37px] cursor-pointer">Buscar</button>
        </div>

        <div className="flex relative lg:hidden">
          <button className="cursor-pointer" onClick={handleToggleMenu} aria-label="Menu">
             {menu ? "" : <MdMenu className="text-[#DAFF01] text-2xl" /> }
          </button>
        </div>
      </div>

     {menu && (
  <div className="lg:hidden absolute top-0 right-0 w-[200px] bg-[#343A40] p-4 rounded-md shadow-md z-50">
    <div className="flex justify-end mb-4">
      <button className="cursor-pointer" onClick={handleToggleMenu} aria-label="Fechar menu">
        <BiX className="text-[#DAFF01] text-2xl" />
      </button>
    </div>
    <ul className="flex flex-col items-center gap-5">
      <li><a className="text-white font-normal border-b-2 border-white hover:text-[#DAFF01] inline-block w-28 text-center" href="#">Home</a></li>
      <li><a className="text-white font-normal border-b-2 border-white hover:text-[#DAFF01] inline-block w-24 text-center" href="#">Nossa lojas</a></li>
      <li><a className="text-white font-normal border-b-2 border-white hover:text-[#DAFF01] inline-block w-24 text-center" href="#">Novidades</a></li>
      <li><a className="text-white font-normal border-b-2 border-white hover:text-[#DAFF01] inline-block w-24 text-center" href="#">Promoções</a></li>
    </ul>
  </div>
)}
    </nav>
  );
};

export default Header;
