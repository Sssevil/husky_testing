import { FC } from 'react'
import styles from './News.module.scss'
import classNames from 'classnames'

type NewsProps = {
  title:string,
  desc:string
  classname?:string
}

export const NewsCard:FC<NewsProps> = ({title,desc,classname}) => {
  return (
    <div className={classNames(styles.container,classname)}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
