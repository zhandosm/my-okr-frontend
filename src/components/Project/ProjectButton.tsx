import React, { FunctionComponent, useState } from 'react';

type ProjectButtonProps = {
    title: string,
    active: boolean, 
    onClick?: any
}

export const ProjectButton: FunctionComponent<ProjectButtonProps>  = ({ children, active, onClick, title }) => {
    const [hover, setHover] = useState(false);
    return (
        <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <button 
            type="button"
            onClick={onClick}
            className={`
                flex my-0.5 justify-center items-center rounded-lg h-9 w-9 font-bold text-xl border-transparent
                ${active ? 'text-mogreen bg-mowhite border-2 border-mogreen': 'text-moblack'}
                ${hover ? 'text-mogreen bg-plainwhite' :''} active:inset-5 active:bg-molightgrey transition-colors`}>
                {children ? children : title ? title[0] : ""}
            </button>
            {/* {hover && <div className='absolute'>...</div>} */}
        </div>
)};
