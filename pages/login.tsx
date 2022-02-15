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
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	async function login(): Promise<void> {
		if(!(username && password)){
			alert("Please fill out username and password");
			return;
		}
		try {
			const url = `api/auth/login`;
			const data = {
				username: username,
				password: password,
			};
			const response = await axios.post(url, data);
			if (response.status !== 201) throw new Error("Unexpected Error");
			router.reload();
		} catch (err: any) {
			if (err.response.status === 401) {
				alert("Wrong Credentials");
				return;
			}else if (err.response.status === 400) {
				alert("Invalid Credentials");
				return;
			}
			console.log(err.response.status);
			alert(err.message);
		}
	}

	const submitObj: SubmitInterface = {
		name: "Login",
		onSubmit: async () => await login(),
	};

	return (
		<WelcomeComponent>
			<WelcomeForm submit={submitObj}>
				<WelcomeInput
					type="text"
					placeholder="username"
					value={username}
					setter={setUsername}
				/>
				<WelcomeInput
					type="password"
					placeholder="password"
					value={password}
					setter={setPassword}
				/>
			</WelcomeForm>
		</WelcomeComponent>
	);
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	return await authCheck(ctx);
}

export default Page;
