import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-2 mb-6'>
            <h1 className='text-5xl uppercase text-very-light-gray font-[700] tracking-[.9rem] '>todo</h1>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35">
                    <path fill="hsl(0, 0%, 98%)" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z" />
                </svg>
            </button>
        </div>
    )
}

export default Header