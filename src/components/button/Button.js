import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({ label, onClick, variant, customClass }) => (
  <button
    onClick={onClick}
    className={clsx(stl.btn, stl[variant], customClass)}
  >
    {label}
  </button>
)

Button.defaultProps = {
  label: 'Button',
  onClick: () => console.log('clicked!'),
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'error']),
  customClass: PropTypes.string,
}

export default Button
