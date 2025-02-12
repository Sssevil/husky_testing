import classNames from 'classnames'
import styles from './CustomButton.module.scss'
import { FC } from 'react'

interface ButtonProps {
  variant:'blue' | 'red'
}

export const CustomButton:FC<ButtonProps> = ({variant}) => {

  const generateClass = classNames(
    styles[variant]
  )

  return (
    <button className={classNames(styles.btn,generateClass)}>
      Click ME
    </button>
  )
}
