import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

const Input = ({
  defaultValue = "",
  onChange = () => {},
  placeholder = "",
  disabled = false,
  style = {},
  className = "",
}) => {
  return (
    <input
      type="text"
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      style={style}
      className={cn(
        "rounded-lg h-10 w-full p-2 bg-accent text-text",
        className
      )}
    />
  );
};

Input.propTypes = {
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Input;
