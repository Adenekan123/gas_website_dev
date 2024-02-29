import { ReactNode } from 'react'

export const Paper = ({children}:{children:ReactNode}) => {
  return (
    <div className=' text-gray-800 dark:bg-black dark:text-white p-4 md:p-0'>
        {children}
    </div>
  )
}

