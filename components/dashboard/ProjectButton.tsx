import React, { FunctionComponent } from 'react';

type ProjectButtonProps = {
    active: boolean, 
    onClick?: any
}

const ProjectButton: FunctionComponent<ProjectButtonProps>  = ({ children, active, onClick }) => {
    return <button type="button" onClick={onClick} className={`flex justify-center items-center rounded-lg h-9 w-9 font-bold text-xl border-transparent ${active ? 'text-mogreen bg-mowhite border-2 border-mogreen': 'text-moblack'} hover:text-mogreen transition-colors`}>{children}</button>
};

export default ProjectButton;