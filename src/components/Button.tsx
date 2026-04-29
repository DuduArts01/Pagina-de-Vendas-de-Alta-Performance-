interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = "", ...props }) => {
  const base = "px-8 py-4 rounded-xl font-bold transition-all duration-300 uppercase tracking-wider text-sm flex items-center justify-center gap-2";
  const styles = {
    primary: "bg-emerald-neon text-dark-bg hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] animate-pulse hover:animate-none",
    outline: "border border-dark-border text-white hover:bg-white/5"
  };
  
  return (
    <button className={`${base} ${styles[variant]} ${className} cursor-pointer`} {...props}>
      {children}
    </button>
  );
};

export default Button;