import Logo from "../../public/logo-meteora.png"

const Header = () => {
    return ( 
      <nav className="w-full bg-black p-4">
       <div className="flex justify-between items-center">
        <div className="flex items-center gap-10">
        <img src={Logo} alt="Logo da Meteora" />
        <ul className="flex items-center gap-10">
        <li><a className="text-white font-normal" href="#">Home</a></li>
        <li><a className="text-white font-normal" href="#">Nossa lojas</a></li>
        <li><a className="text-white font-normal" href="#">Novidades</a></li>
        <li><a className="text-white font-normal" href="#">Promoções</a></li>
        </ul>
        </div>
 
        <div className="flex items-center gap-4">
        <input className="bg-white w-[170px] h-[38px]" type="text" placeholder="  Digite o produto" />
        <button className="text-white border-white border-2 w-[80px] h-[37px] cursor-pointer">Buscar</button>
       </div>
        </div> 
      </nav>
     );
}
 
export default Header;