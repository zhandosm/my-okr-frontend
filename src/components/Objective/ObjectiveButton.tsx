import React, { FunctionComponent } from 'react';

type ObjectiveButtonProps = {
    title: string,
    active: boolean, 
    onClick?: any
}

export const ObjectiveButton: FunctionComponent<ObjectiveButtonProps>  = ({ title, onClick, active }) => {
    return <button type="button" onClick={onClick} className={`p-1 w-full text-sm text-left ${active ? 'text-mogreen': 'font-normal text-moblack'} hover:bg-molightgrey rounded active:bg-modarkgrey active:transition-colors active:bg-opacity-20`}>{title}</button>
};