
const SearchBar = () => (
  <div className="container">
    <div className="flex items-center justify-center py-6 gap-2 lg:hidden">
      <input
        className="w-full h-[38px] border border-[#6C757D] text-black pl-2"
        type="text"
        placeholder="Digite o produto"
      />
      <button className="text-black border-2 border-black w-[88px] h-[37px]">
        Search
      </button>
    </div>
  </div>
);

export default SearchBar;
