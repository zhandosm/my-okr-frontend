import type { NextPage } from "next";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { WelcomeInput, SubmitInterface, WelcomeForm, WelcomeComponent } from "@components";

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
			const url = `${process.env.API_HOST}/auth/login`;
			const data = {
				username: username,
				password: password,
			};
			const response = await axios.post(url, data, { withCredentials: true });
			if (response.status !== 201) throw new Error("Unexpected Error");
			router.reload();
		} catch (err: any) {
			if (err.response && err.response.status === 401) {
				alert("Wrong Credentials");
				return;
			}else if (err.response && err.response.status === 400) {
				alert("Invalid Credentials");
				return;
			}else if (err.response && err.response.status === 404) {
				alert("User doesn't exist");
				return;
			}
			console.log(err.response);
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

export default Page;
