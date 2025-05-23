import { useState } from "react";
import { products } from "../constants";
import Button from "./button";
import DetailsProducts from "./details-products"; // ✅ Corrigido

interface Product {
  id: number;
  name: string;
  description: string;
  img: string;
  price: string;
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="container">
      <div className="pt-12">
        <h2 className="font-medium text-[#212529] text-3xl text-center mt-3">
          Produtos que estão bombando!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {products.map((product) => (
            <div className="container" key={product.id}>
              <div className="flex flex-col">
                <img src={product.img} alt={product.name} />
                <div className="bg-white w-full h-auto flex flex-col justify-around border border-[#CCCCCC] rounded-md p-4">
                  <h6 className="text-[#212529] font-medium text-[20px]">
                    {product.name}
                  </h6>
                  <p className="font-regular text-[13px] mt-4 text-[#212529]">
                    {product.description}
                  </p>
                  <p className="font-bold text-[#212529] mt-4">
                    {product.price}
                  </p>
                  <Button
                    className="mt-2.5"
                    onClick={() => handleOpenDetails(product)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
            <DetailsProducts
              product={selectedProduct}
              onClose={handleCloseDetails}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
