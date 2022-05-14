import React, { FunctionComponent, SyntheticEvent } from "react";
import { RegularButton } from "./buttons";
import { SubmitInterface } from "./interfaces";

type WelcomeFormProps = {
    submit: SubmitInterface;
}

const WelcomeForm: FunctionComponent<WelcomeFormProps> = ({ children, submit }) => {
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await submit.onSubmit()
    };
	return <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col">
        {children}      
        <RegularButton type="submit" name={submit.name}/>
    </form>
};

export default WelcomeForm;
