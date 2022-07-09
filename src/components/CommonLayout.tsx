import { FunctionComponent } from "react";
import { useProjects, useObjectives } from "@hooks";
import { ObjectiveButton } from "@components";
import { ProjectButton, Loader } from ".";
import { useRouter } from "next/router";
import NewObjectiveInput from "./NewObjectiveInput";

interface ProjectObj {
	createdAt: string;
	isPinned: boolean;
	title: string;
	updatedAt: string;
	userId: string;
	__v: number;
	_id: string;
}

interface ObjectiveObj {
	description: string;
	projectId: string;
	title: string;
	userId: string;
	__v: number;
	_id: string;
}

export const CommonLayout: FunctionComponent = ({ children }) => {
	const router = useRouter();	
	const { data: projectsData, isLoading: projectsLoading } = useProjects();
	const { data: objectivesData, isLoading: objectivesLoading } = useObjectives(router.query.projectId);;

	const redirectToProject = (id: string):void => {
		const url = `/myokr/${id}`;
		router.push(url);
	};

	const redirectToObjective = (id: string):void => {
		router.push(`/myokr/${router.query.projectId}/${id}`);
	};

	return (
		<main className="flex min-h-screen py-3 max-h-screen">
			<div className="flex min-h-full min-w-[16rem] max-h-full overflow-hidden">
				<div className="flex flex-col px-2 min-w-[52px] max-h-full overflow-y-scroll">
					{projectsData && <>
						{projectsData?.map((project:ProjectObj, i:number)=>{
							return (
								<ProjectButton 
									key={i}
									onClick={()=>redirectToProject(project._id)}
									active={ router.query && router.query.projectId && router.query.projectId === project._id ? true : false}
									title={project.title}
								/>
							);
						})}
						<ProjectButton title={""} active={false}>
							<svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.75 1C6.75 0.585786 6.41421 0.25 6 0.25C5.58579 0.25 5.25 0.585786 5.25 1V5.25H1C0.585787 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585787 6.75 1 6.75H5.25V11C5.25 11.4142 5.58579 11.75 6 11.75C6.41421 11.75 6.75 11.4142 6.75 11V6.75H11C11.4142 6.75 11.75 6.41421 11.75 6C11.75 5.58579 11.4142 5.25 11 5.25H6.75V1Z" fill="currentColor"/>
							</svg>
						</ProjectButton>
					</>}
					{ projectsLoading && <Loader style={{maxWidth: "35px"}}/> }
				</div>
				<div className='rounded-2xl bg-plainwhite px-6 py-3 w-72 max-h-full overflow-y-scroll'>
					<button onClick={() => router.push('/myokr/dashboard')}>
						<svg width="87" height="29" viewBox="0 0 87 29" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M64.4489 23H68.0795V18.8409L69.0597 17.7244L72.6307 23H76.8835L71.7784 15.5767L76.6364 9.90909H72.4688L68.2756 14.8778H68.0795V5.54545H64.4489V23ZM78.4176 23H82.0483V15.5938C82.0483 13.983 83.2244 12.875 84.8267 12.875C85.3295 12.875 86.0199 12.9602 86.3608 13.071V9.84943C86.0369 9.77273 85.5852 9.72159 85.2188 9.72159C83.7528 9.72159 82.5511 10.5739 82.0739 12.1932H81.9375V9.90909H78.4176V23Z" fill="#111317"/>
							<circle cx="49.5" cy="13.5" r="13.5" fill="#111317"/>
							<circle cx="49.4999" cy="13.5" r="13.0263" fill="#25A77A"/>
							<ellipse cx="54" cy="13.7369" rx="4.73684" ry="4.73684" fill="white"/>
							<path d="M1.44886 23H5.07955V15.142C5.07955 13.6932 6 12.7301 7.21023 12.7301C8.40341 12.7301 9.20455 13.5483 9.20455 14.8352V23H12.7244V15.0057C12.7244 13.6506 13.5 12.7301 14.821 12.7301C15.9801 12.7301 16.8494 13.4545 16.8494 14.9119V23H20.4716V14.196C20.4716 11.358 18.7841 9.73864 16.3466 9.73864C14.429 9.73864 12.9375 10.7188 12.4006 12.2188H12.2642C11.8466 10.7017 10.5085 9.73864 8.71023 9.73864C6.94602 9.73864 5.60795 10.6761 5.0625 12.2188H4.90909V9.90909H1.44886V23ZM25.1122 27.9091C27.8139 27.9091 29.2457 26.5284 29.9872 24.4148L35.0753 9.92614L31.2315 9.90909L28.4957 19.5227H28.3594L25.6491 9.90909H21.831L26.527 23.375L26.3139 23.929C25.8366 25.1562 24.9247 25.2159 23.6463 24.8239L22.8281 27.5341C23.348 27.7557 24.1918 27.9091 25.1122 27.9091Z" fill="#111317"/>
						</svg>
					</button>
					
					<div className="py-3">
						{objectivesData?.map((objective:ObjectiveObj, i:number) => {
							return (
								<ObjectiveButton
									key={i}
									onClick={()=>redirectToObjective(objective._id)}
									active={ router.query && router.query.objectiveId && router.query.objectiveId === objective._id ? true : false}
									title={objective.title}
								/>
							);
						})}
						{objectivesData && <NewObjectiveInput/>}
						{objectivesLoading && <Loader style={{maxWidth: "35px"}}/>}
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full px-10 py-1 max-h-full overflow-hidden">
				{children}
			</div>
		</main>
	);
};
