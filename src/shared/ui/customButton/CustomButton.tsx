import classNames from 'classnames'
import { FC } from 'react'
import styles from './CustomButton.module.scss'

type ButtonProps = {
  variant: 'red' | 'blue',
  size?: 'small' | 'big',
  handleClick?: ()=> void
}


export const CustomButton:FC<ButtonProps> = ({variant, size, handleClick}) => {

  const generateClassNames = classNames(
      styles.btn,
      styles[variant],
      size && styles[size]
  )

  return (
    <div
      onClick={handleClick}
      className={generateClassNames}
    >
      ghb
    </div>
  )
}
