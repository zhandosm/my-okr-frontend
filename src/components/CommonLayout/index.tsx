import { FunctionComponent } from "react";
import { ObjectivesContainer, ProjectsContainer } from "@components";
import { useRouter } from "next/router";

export const CommonLayout: FunctionComponent = ({ children }) => {
	return (
		<main className="flex min-h-screen py-3 max-h-screen">
			<div className="flex min-h-full min-w-[16rem] max-h-full overflow-hidden">
				<ProjectsContainer/>
				<ObjectivesContainer/>
			</div>
			<div className="flex flex-col w-full px-10 py-1 max-h-full overflow-hidden">
				{children}
			</div>
		</main>
	);
};
