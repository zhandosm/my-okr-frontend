import React, { FunctionComponent } from "react";

type InputProps = {
	type: string;
	placeholder: string;
	value: string;
	setter: (value: string) => void;
};

const WelcomeInput: FunctionComponent<InputProps> = ({
	type,
	placeholder,
	value,
	setter,
}) => {
	return (
		<input
			className="my-1 p-2 rounded text-lg"
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={(e) => setter(e.target.value)}
		/>
	);
};

export default WelcomeInput;
