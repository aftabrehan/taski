import PropTypes from 'prop-types'
import clsx from 'clsx'

import Button from 'components/button'

import stl from './Dialog.module.scss'

const DialogFooter = ({
  onSubmit = () => console.log('confirm clicked'),
  label = 'Confirm',
  customClass,
}) => (
  <div className={clsx(stl.footer, customClass)}>
    <Button onClick={onSubmit} label={label} />
  </div>
)

DialogFooter.propTypes = {
  onSubmit: PropTypes.func,
  label: PropTypes.string,
  customClass: PropTypes.string,
}

export default DialogFooter
