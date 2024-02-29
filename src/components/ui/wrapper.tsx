import { Header } from '.'
import { Paper } from './paper'
import { Outlet } from 'react-router-dom'

export const Wrapper = () => {
  return (
    <Paper>
        <div className='md:w-8/12 mx-auto min-h-screen font-[Poppins] overflow-hidden overflow-y-auto'>
            <Header/>
            <Outlet/>
        </div>
    </Paper>
  )
}

