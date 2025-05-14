import { cards } from "../constants";

const Category = () => {
    return ( 
        <section className="py-20 container">
            <h3 className="font-medium text-3xl text-[#212529] text-center">Busque por categoria:</h3>
            <div className="grid grid-cols-6 gap-8 items-center p-8">
             {cards.map((card)=>(
            <div key={card.id}>
              <img src={card.img} alt={card.name} />
              <div className="bg-black w-[160px] h-[35px] flex justify-center items-center">
              <h6 className="text-white font-medium">{card.name}</h6>
              </div>
            </div>
              ))}
            </div>
        </section>
     );
}
 
export default Category;