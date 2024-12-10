import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

const Button = ({
  children,
  onClick = () => { },
  disabled = false,
  style = {},
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={cn(
        "h-10 rounded-[8px] bg-accent w-16 flex justify-center items-center transition delay-500",
        className
      )}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
};

export default Button;
