interface ButtonProps {
    className?: string;
    onClick?: () => void
}

const Button = ({ className, onClick }: ButtonProps) => {
    return (  
        <button onClick={onClick}
         className={`bg-[#9353FF] text-white w-[102px] h-[37px] cursor-pointer ${className}`}>
         Ver mais
        </button>
    );
}
 
export default Button;