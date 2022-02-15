import Image from "next/image";
import { FunctionComponent } from "react";

const WelcomeComponent: FunctionComponent = ({ children }) => {
	return (
		<div className="flex justify-center items-center min-h-screen px-2">
			<main className="max-w-screen-sm w-full flex flex-col justify-center items-center">
				<Image
					src="/full-logo.svg"
					alt="Picture of the author"
					width={200}
					height={100}
				/>
				<div className="flex flex-col w-full">{children}</div>
			</main>
		</div>
	);
};

export default WelcomeComponent;
