import Link from "next/link";
import React, { FunctionComponent } from 'react';
import { darkButtonStyleClasses } from "../../styles/styles";

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
    return <Link href={url}><a className={`${darkButtonStyleClasses} my-1`}>{name}</a></Link>
};

export const RegularButton: FunctionComponent<RegularButtonProps>  = ({ name, type, onClick }) => {
    return <button  type={type} className={`${darkButtonStyleClasses} my-1`} onClick={onClick}>{name}</button>
};