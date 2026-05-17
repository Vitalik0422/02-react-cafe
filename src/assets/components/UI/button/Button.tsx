import css from './Button.module.css';

interface propsButton {
  children: string;
  onClick: () => void;
  variant?: string;
}

const Button = ({ children, variant, ...props }: propsButton) => {
  return (
    <button
      className={`${css.button} ${variant ? css[variant] : ''}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
