import React, { useState } from 'react'
import FiaForm from '@/components/FiaForm'


const Page = () => {
  return (
    <>
      <section className="section bg-gray-950 text-white">
        <h1 className="text-3xl font-bold mb-10 text-yellow-700 text-center">
          Financial Inclusion Africa
        </h1>

        <div className="container max-w-xl mx-auto px-6">
          <FiaForm />
        </div>
      </section>
    </>
  )
}

export default Page