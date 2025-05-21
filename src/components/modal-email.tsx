import { BiX } from 'react-icons/bi';
import Check from '../../public/check-circle.svg'


interface ModalEmailProps {
    isOpen: boolean
    onClose: () => void;
    message: string
}

const ModalEmail = ({ isOpen, onClose, message }:ModalEmailProps) => {
    if (!isOpen) return null;
    return (
        <div className='flex justify-center items-center'>
        <div className="w-[700px] h-[65px] bg-black">

        <div className='flex justify-between items-center px-6 pt-5'>
        <div className='flex justify-center items-center gap-5'>
        <img src={Check} alt="Icon Check" />
        <h2 className="text-white text-[20px] font-medium">{message}</h2>
        </div>
        <button onClick={onClose}
        className='cursor-pointer'>
        <BiX size={24} className="text-[#6C757D]" />        
        </button>
        </div>
        <div className='w-[700px] h-[71px] bg-white'>
        <p className='text-[#212529] mt-4 pl-4'>Em breve você recebrá novidades  exclusivas da Meteora</p>
        </div>
      </div>
        </div>
    )
}

export default ModalEmail