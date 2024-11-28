import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';
const Input = ({ value, onChange, placeholder, disabled = false, style = {}, className = '' }) => {
     return (
          <input
               type="text"
               value={value}
               onChange={onChange}
               placeholder={placeholder}
               disabled={disabled}
               style={style}
               className={cn('rounded-[8px] h-10 w-full p-2 text-gray-500', className)}
          />
     );
};

Input.propTypes = {
     value: PropTypes.string,
     onChange: PropTypes.func,
     placeholder: PropTypes.string,
     disabled: PropTypes.bool,
     style: PropTypes.object,
     className: PropTypes.string
};

Input.defaultProps = {
     value: '',
     onChange: () => { },
     placeholder: '',
     disabled: false,
     style: {},
     className: ''
};

export default Input;
