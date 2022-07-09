import Link from "next/link";
import React, { FunctionComponent } from 'react';

const darkButtonStyleClasses: string = 'bg-moblack text-mowhite text-center border-2 rounded-full py-2 text-lg font-bold border-moblack hover:bg-mowhite hover:text-mogreen hover:border-mogreen transition-colors my-1';

type RedirectButtonProps = {
    name: string,
    url: string
}

type RegularButtonProps = {
    name: string,
    type: "button" | "submit" | "reset" | undefined,
    onClick?: any
}

export const RedirectButton: FunctionComponent<RedirectButtonProps>  = ({ name, url }) => {
    return <Link href={url}><a className={darkButtonStyleClasses}>{name}</a></Link>
};

export const RegularButton: FunctionComponent<RegularButtonProps>  = ({ name, type, onClick }) => {
    return <button  type={type} className={darkButtonStyleClasses} onClick={onClick}>{name}</button>
};