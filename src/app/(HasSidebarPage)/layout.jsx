import React from 'react'

const layout = ({children}) => {
  return (
    <section className='grid grid-cols-12'>
        <aside className='col-span-3 bg-orange-400'>
            sidebar
        </aside>
        <main className='col-span-9 bg-blue-300'>
            content
        </main>
    </section>
  )
}

export default layout
