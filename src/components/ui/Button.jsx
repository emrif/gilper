import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => {
     return (
          <button
               {...props}
               className="h-10 bg-white rounded-[8px] w-16 flex justify-center items-center hover:bg-blue-200 transition delay-5000" >
               {children}
          </button>
     );
};

Button.propTypes = {
     children: PropTypes.node.isRequired,
};

export default Button;