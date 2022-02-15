import type { GetServerSidePropsContext, NextPage } from "next";
import { authCheck } from "../utils";
import { RedirectButton } from "../components/welcome/buttons";
import WelcomeComponent from "../components/welcome";

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

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	return await authCheck(ctx);
}

export default WelcomePage;
