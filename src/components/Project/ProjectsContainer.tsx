import { ProjectsList, LogoutButton } from "@components";


export const ProjectsContainer  = () => {

    return (
        <div className="flex flex-col px-2 min-w-[52px] max-h-full overflow-y-scroll">
            <ProjectsList/>
            <LogoutButton/>
        </div>
    )
};




