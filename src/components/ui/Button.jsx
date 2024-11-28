import PropTypes from 'prop-types';
import { cn } from '../../utils/cn';



const Button = ({ children, onClick = () => { }, disabled = false, style = {}, className = '' }) => {
     return (
          <button
               onClick={onClick}
               disabled={disabled}
               style={style}
               className={cn('h-10 bg-white rounded-[8px] w-16 flex justify-center items-center hover:bg-blue-200 transition delay-5000', className)} >
               {children}
          </button>
     );
};

Button.propTypes = {
     children: PropTypes.node.isRequired,
     className: PropTypes.string,
     onClick: PropTypes.func,
     disabled: PropTypes.bool,
     style: PropTypes.object

};

Button.defaultProps = {
     onClick: () => { },
     disabled: false,
     style: {},
     className: ''
};

export default Button;