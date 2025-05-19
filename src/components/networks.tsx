import { networks } from "../constants"


const Networks = () => {
    return ( 
   <section className="bg-black w-full mt-20 py-20">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="font-medium text-white text-3xl text-center mb-12">
      Conheça todas as nossas facilidades
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {networks.map((network) => (
        <div key={network.id} className="text-white">
          <img src={network.img} alt={network.name} className="mb-4" />
          <p className="font-bold text-[#DAFF01]">{network.name}</p>
          <p className="text-[13px] text-white mt-4">{network.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    )
}

export default Networks