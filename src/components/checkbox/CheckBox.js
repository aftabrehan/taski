import PropTypes from 'prop-types'

import CheckedIcon from 'assets/svg/checked-checkbox.svg'
import UnCheckedIcon from 'assets/svg/unchecked-checkbox.svg'

import { generateRandomString } from 'lib/utils'

const CheckBox = ({
  label,
  id = generateRandomString(),
  isChecked,
  setIsChecked,
  onClick,
  onChange,
  customClass,
}) => {
  const checkBoxId = generateRandomString()

  return (
    <div id={id} className={customClass}>
      <label
        htmlFor={checkBoxId}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          onClick && onClick()
          setIsChecked && setIsChecked()
        }}
      >
        {isChecked ? <CheckedIcon /> : <UnCheckedIcon />}
        {label}
      </label>
      <input id={checkBoxId} type="checkbox" onChange={onChange} hidden />
    </div>
  )
}

CheckBox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  setIsChecked: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  customClass: PropTypes.string,
}

export default CheckBox
