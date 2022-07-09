import React, { FunctionComponent } from 'react';

type ProjectButtonProps = {
    title: string,
    active: boolean, 
    onClick?: any
}

export const ProjectButton: FunctionComponent<ProjectButtonProps>  = ({ children, active, onClick, title }) => {
    return <button type="button" onClick={onClick} className={`flex my-0.5 justify-center items-center rounded-lg h-9 w-9 font-bold text-xl border-transparent ${active ? 'text-mogreen bg-mowhite border-2 border-mogreen': 'text-moblack'} hover:text-mogreen hover:bg-plainwhite active:inset-5 active:bg-molightgrey transition-colors`}>{children ? children : title ? title[0] : ""}</button>
};
