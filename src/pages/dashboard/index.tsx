import React from 'react'
import SideBar from '../../components/sections/dashboard/SideBar'

type Props = {}

function Dashboard({}: Props) {
  return (
    <main className='w-full h-screen bg-slate-50 scrollbar-track-textDark/20 scrollbar-thumb-textDark/60 scrollbar-thin'>

      {/* SideBar */}
      <SideBar />
      {/* Content */}

    </main>
  )
}

export default Dashboard