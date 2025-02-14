import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

type NewsCard = {
  id:number,
  title:string,
  description:string,
  image:string,
  created_at:string
}

type NewsResponse = {
  results:NewsCard[]
}


const fetchNews = async():Promise<NewsResponse>=>{
  const {data} = await axios.get<NewsResponse>('https://kyrgyz-patent.pp.ua/api/v1/news/')
  return data
}

export const useNewsQuery =()=> 
  useQuery<NewsResponse, Error>({
    queryKey:['newsList'],
    queryFn:fetchNews
  })