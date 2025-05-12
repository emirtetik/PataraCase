import React from 'react'
import Hero from './_components/Hero'
import Table from './_components/Table'

const HomePage = () => {
  return (
    <div className='max-w-[98%] mx-auto gap-10 flex flex-col'>
      <Hero/>
      <Table/>
    </div>
  )
}

export default HomePage
