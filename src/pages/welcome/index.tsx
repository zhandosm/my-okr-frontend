import type { NextPage } from "next";
import { RedirectButton, WelcomeComponent } from "@components";

interface RedirectButtonInterface {
	name: string;
	url: string;
}

const WelcomePage: NextPage = () => {
	const buttons: RedirectButtonInterface[] = [
		{
			name: "Login",
			url: "/login",
		},
		{
			name: "Sign Up",
			url: "/signup",
		},
	];
	return (
		<WelcomeComponent>
			{buttons.map((button, index) => (
				<RedirectButton url={button.url} key={index} name={button.name} />
			))}
		</WelcomeComponent>
	);
};

export default WelcomePage;
