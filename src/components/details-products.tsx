import type { FC } from "react";
import { BiX } from "react-icons/bi";
import Check from "../../public/check-circle.svg"; 

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  img: string;
};

type DetailsProductsProps = {
  product?: Product;
  onClose: () => void;
};

const DetailsProducts: FC<DetailsProductsProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl overflow-hidden relative">
        <div className="flex items-center justify-between px-6 py-4 bg-black text-white">
          <div className="flex items-center gap-2">
            <img src={Check} alt="Ícone de check" className="w-6 h-6" />
            <p className="font-medium text-lg">Confira detalhes sobre o produto</p>
          </div>
          <button onClick={onClose}>
            <BiX size={28} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 p-6">
          <div className="w-full md:w-1/2">
            <img
              src={product.img}
              alt={product.name}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-[#212529]">{product.name}</h3>
            <p className="text-sm text-[#212529]">{product.description}</p>
            <hr className="my-2 border-gray-300" />

            <p className="text-2xl font-bold text-[#212529]">{product.price}</p>
            <p className="text-sm text-gray-400">Vendido e entregue por Riachuelo</p>

            <div>
              <p className="font-semibold text-[#212529]">Cores:</p>
              <div className="flex gap-6 mt-2">
                {["Azul claro", "Offwhite", "Preto"].map((cor, i) => (
                  <label key={i} className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="color"
                      defaultChecked={i === 0}
                      className="accent-purple-600"
                    />
                    <span>{cor}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-[#212529]">Tamanho:</p>
              <div className="flex gap-4 mt-2">
                {["P", "PP", "M", "G", "GG"].map((size, index) => (
                  <label key={index} className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      defaultChecked={index === 0}
                      className="accent-purple-600"
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="bg-purple-600 text-white font-medium py-2 px-4 rounded-md mt-4 cursor-pointer hover:bg-purple-700 transition">
              Adicionar à sacola
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProducts;
