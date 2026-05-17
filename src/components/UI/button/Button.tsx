import type propsButton from '../../../types/button';
import css from './Button.module.css';

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
