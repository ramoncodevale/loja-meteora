interface ButtonProps {
    className?: string;
}

const Button = ({ className }: ButtonProps) => {
    return (  
        <button className={`bg-[#9353FF] text-white w-[102px] h-[37px] cursor-pointer ${className}`}>
           Ver mais
        </button>
    );
}
 
export default Button;