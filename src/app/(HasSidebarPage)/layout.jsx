import React from 'react'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
import Filter from '../components/Filter'

const layout = ({children}) => {
  return (
    <section className='flex h-screen'>
        <aside className='bg-white min-w-[25%] h-screen'>
            <Sidebar/>
        </aside>
        <main className='bg-whiteSmokeCustom w-full h-screen flex flex-col items-center py-5'>
            <Search/>
            <div className='w-[90%] mt-5 py-5 px-5 bg-white rounded-3xl h-full'>
              <Filter/>
              {children}
            </div>
        </main>
    </section>
  )
}

export default layout
