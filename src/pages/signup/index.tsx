import type { NextPage } from "next";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { WelcomeInput, SubmitInterface, WelcomeForm, WelcomeComponent } from "@components";

const validatePasswordComplexity = (password: string):boolean => {
	const hasMinNumChars = password.length >= 8; // at least 8 chars long
	const hasUpperCase = /[A-Z]/.test(password); // at least one upper case
	const hasLowerCase = /[a-z]/.test(password); // at least one lower case
	const hasNumbers = /\d/.test(password); // at least one number case
	const hasNonalphas = /\W/.test(password); // at least one symbol
	if(hasMinNumChars && hasUpperCase && hasLowerCase && hasNumbers && hasNonalphas) return true;
	return false;
}

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
		if(!validatePasswordComplexity(password)){
			const message = `Make sure that your password contains: \n 1) at least 8 characters \n 2) at least one upper case \n 3) at least one lower case \n 4) at least one number \n 5) at least one symbol`;
			alert(message);
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
			}else{
				console.log(err);
				if(err && err.response && err.response.data && err.response.data.message){
					return alert(err.response.data.message);
				}else{
					return alert(err.message);
				}
			}
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
					placeholder="Email"
					value={email}
					setter={setEmail}
				/>
				<WelcomeInput
					type="text"
					placeholder="Username"
					value={username}
					setter={setUsername}
				/>
				<WelcomeInput
					type="password"
					placeholder="Password"
					value={password}
					setter={setPassword}
				/>
				<WelcomeInput
					type="password"
					placeholder="Confirm Password"
					value={passwordTwo}
					setter={setPasswordTwo}
				/>
			</WelcomeForm>
		</WelcomeComponent>
	);
};

export default Page;
