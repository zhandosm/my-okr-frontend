import type { GetServerSidePropsContext, NextPage } from "next";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { authCheck } from "../utils";
import WelcomeComponent from "../components/welcome/index";
import WelcomeForm from "../components/welcome/form";
import { SubmitInterface } from "../components/welcome/interfaces";
import WelcomeInput from "../components/welcome/input";

const Page: NextPage = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordTwo, setPasswordTwo] = useState("");

	async function signup(): Promise<void> {
		if(!(email && username && password && passwordTwo)){
			alert("Please fill out all the fields");
			return;
		}
		if(password !== passwordTwo){
			alert("Passwords don't match");
			return;
		}
		try {
			const url = `${process.env.API_HOST}/users`;
			const data = {
				email: email,
				username: username,
				password: password,
			};
			const response = await axios.post(url, data);
			if (response.status !== 201) throw new Error("Unexpected Error");
			alert(`Successfully registered ${response.data.username} (${response.data.email})`);
			router.push('/login');
		} catch (err: any) {
			if(err.response.status===409){
				alert(err.response.data.message)
				return;
			}else if(err.response.status===400){
				alert(err.response.data.message)
				return;
			}
			console.log(err.response.status);
			alert(err.message);
		}
	}

	const submitObj: SubmitInterface = {
		name: "Signup",
		onSubmit: async () => await signup(),
	};

	return (
		<WelcomeComponent>
			<WelcomeForm submit={submitObj}>
				<WelcomeInput
					type="email"
					placeholder="email"
					value={email}
					setter={setEmail}
				/>
				<WelcomeInput
					type="text"
					placeholder="username"
					value={username}
					setter={setUsername}
				/>
				<WelcomeInput
					type="password"
					placeholder="new password"
					value={password}
					setter={setPassword}
				/>
				<WelcomeInput
					type="password"
					placeholder="validate password"
					value={passwordTwo}
					setter={setPasswordTwo}
				/>
			</WelcomeForm>
		</WelcomeComponent>
	);
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	return await authCheck(ctx);
}

export default Page;
