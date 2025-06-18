import React from 'react'

const Card = ({title,photo}) => {
  return (
    <a href="#"><div className="flex items-end h-[6rem] w-40 bg-cover bg-center text-white p-2 rounded-md" style={{ backgroundImage: `url(${photo})` }}>
        <h1 className="flex py-15 text-md font-bold tracking-tight">{title}</h1>
    </div></a>
  )
}

export default Card
