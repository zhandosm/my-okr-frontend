import React, { FunctionComponent } from 'react';

type ObjectiveButtonProps = {
    title: string,
    active: boolean, 
    onClick?: any
}

export const ObjectiveButton: FunctionComponent<ObjectiveButtonProps>  = ({ title, onClick, active }) => {
    return <button type="button" onClick={onClick} className={`w-full text-sm text-left ${active ? 'text-mogreen': 'font-normal text-moblack'} hover:text-mogreen transition-colors`}>{title}</button>
};