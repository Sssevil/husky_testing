import { NewsCard } from '../../../shared/ui/newsCard/NewsCard'
import { useNewsQuery } from '../api/useNewsQuery'
import  styles from './NewsBlock.module.scss'

export const NewsBlock = () => {
  const {data} = useNewsQuery()

  return (
    <div>
      {data?.results.map((item)=>
        <NewsCard
          key={item.id}
          title={item.title}
          desc={item.description}
          classname={styles.card}
        />
      )}
    </div>
  )
}
