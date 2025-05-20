const Button = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  // Button classes with exact styling needed
  const buttonClasses = `
    font-[Average]
    bg-white text-black
    hover:bg-black hover:text-white
    transition-all duration-300
    rounded-full
    w-[257px] h-[77px]
    whitespace-nowrap
    sm:w-[257px] sm:h-[77px]
    w-[200px] h-[50px] max-w-[95vw] max-h-[77px]
    text-2xl sm:text-4xl
    ${className}
  `;
  return (
    <button 
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 