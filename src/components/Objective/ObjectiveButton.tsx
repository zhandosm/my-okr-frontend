import React, { Dispatch, FunctionComponent, SetStateAction, useState } from 'react';

type ObjectiveButtonProps = {
    title: string,
    active: boolean, 
    onClick?: any,
    isMenuOpen: boolean,
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>,
}

export const ObjectiveButton: FunctionComponent<ObjectiveButtonProps>  = ({ title, onClick, active, isMenuOpen, setIsMenuOpen }) => {
    const [hover, setHover] = useState(false);
    const toggleMenu = () =>{
        if(!hover) return;
        isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
    }
    return (
        <button
            onMouseEnter={()=>setHover(true)} 
            onMouseLeave={()=>setHover(false)}
            className={`relative w-full flex justify-between items-center`}
        >
            <span onClick={onClick} className={`w-full p-1 text-sm text-left ${active ? 'text-mogreen': 'font-normal text-moblack'} ${hover && 'bg-molightgrey'} rounded active:bg-modarkgrey active:transition-colors active:bg-opacity-20`}>{title}</span>
            
            <span onClick={toggleMenu} className={`ml-1 p-1 rounded-full bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-60 bg-modarkgrey w-5 h-5 absolute -right-2 opacity-0 ${hover && 'opacity-100'} transition-all flex items-center justify-center z-10`}>
                {hover &&
                <button >
                    <svg width="3" height="12" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 16C0.89543 16 0 15.1046 0 14C0 12.8954 0.89543 12 2 12C3.10457 12 4 12.8954 4 14C4 15.1046 3.10457 16 2 16ZM2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8C4 8.53043 3.78929 9.03914 3.41421 9.41421C3.03914 9.78929 2.53043 10 2 10ZM2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z" fill="currentColor"/>
                    </svg>
                </button>}
            </span>
            {isMenuOpen && <div className='absolute z-20 bg-molightred'>
                Dalbaeb nahu
            </div>}
        </button>
    )
  
};