import { Loader, ProjectButton } from "@components";
import { useRouter } from 'next/router';
import { useProjects } from '@hooks';

interface ProjectObj {
	createdAt: string;
	isPinned: boolean;
	title: string;
	updatedAt: string;
	userId: string;
	__v: number;
	_id: string;
}


export const ProjectsList  = () => {
    const router = useRouter();
    const { data: projectsData, isLoading: projectsLoading } = useProjects();
    const redirectToProject = (id: string):void => {
		const url = `/myokr/${id}`;
		router.push(url);
	};
    return (
        <div>
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
                <button className='flex my-0.5 justify-center items-center rounded-lg h-9 w-9 font-bold text-xl border-transparent text-moblack hover:text-mogreen hover:bg-plainwhite active:inset-5 active:bg-molightgrey transition-colors'>
                    <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75 1C6.75 0.585786 6.41421 0.25 6 0.25C5.58579 0.25 5.25 0.585786 5.25 1V5.25H1C0.585787 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585787 6.75 1 6.75H5.25V11C5.25 11.4142 5.58579 11.75 6 11.75C6.41421 11.75 6.75 11.4142 6.75 11V6.75H11C11.4142 6.75 11.75 6.41421 11.75 6C11.75 5.58579 11.4142 5.25 11 5.25H6.75V1Z" fill="currentColor"/>
                    </svg>
                </button>
            </>}
            { projectsLoading && <Loader style={{maxWidth: "35px"}}/> }
        </div>
    )
};




