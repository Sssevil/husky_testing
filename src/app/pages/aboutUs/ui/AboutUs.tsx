import { useState } from 'react'
import { CustomButton } from '../../../../shared/ui'

type User = {
  name:string,
  age:number
}
export const AboutUs = () => {

  const [ isOpen, setIsOpen] =useState<boolean>(false)

  const array:User[] = [
    {name:'asel', age: 23},
    {name:'eldiyar', age: 21},
  ]
  const handleClick =()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <CustomButton
        variant='red'
        size='big'
        handleClick={handleClick}
      />
      {isOpen && 
        array.map((item,index)=>
          <div
            onClick={()=>setIsOpen(false)}
            key={index}
          >
            <h1>{item.name}</h1>
            <p>{item.age}</p>
          </div>
      )}
    </div>
  )
}
