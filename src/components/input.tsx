import { useState } from "react"
import ModalEmail from "./modal-email";


const Input = () => {
  const [email, setEmail] = useState('')
  const [showModal, setShowModal ] = useState(false)

   const handleSubmit = () => {
    if (!email || !email.includes('@')) {
      alert('Digite um email válido.');
      return;
    }

    console.log('Email cadastrado:', email);
    setShowModal(true)

    setEmail('');
  };

    return(
    <>
        <section className="flex justify-center mt-16">
        <div className="w-[729px] h-[190px] border-2 border-black">
        <div className="flex flex-col justify-center">
        <h3 className="text-[#212529] text-[20px] text-center mt-10">Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastra-se!</h3>
        <div className="flex justify-center items-center">
        <div className="flex mt-6">
          <input
          className="w-[456px] h-[38px] border-2 border-[#6C757D] pl-4 focus:outline-none"
          type="text"
          placeholder="Digite o seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
         <button
          onClick={handleSubmit}
          className="w-[84px] h-[38px] bg-[#9353FF] text-white cursor-pointer"
          > 
          Enviar
         </button>        
         </div>
         </div>
         </div>
        </div>
        </section>

     <ModalEmail 
      isOpen={showModal}
      onClose={()=> setShowModal(false)}
      message="E-mail Cadastrado com Sucesso!"
      />
    </>
    )
}

export default Input