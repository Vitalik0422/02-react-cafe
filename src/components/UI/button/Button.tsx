import css from './Button.module.css';
import type propsButton from './types/button';

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
