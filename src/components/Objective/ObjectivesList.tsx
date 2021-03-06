import { Loader, ObjectiveButton, NewObjectiveInput } from "@components";
import { useRouter } from 'next/router';
import { useObjectives } from '@hooks';

interface ObjectiveObj {
	description: string;
	projectId: string;
	title: string;
	userId: string;
	__v: number;
	_id: string;
}

export const ObjectivesList  = () => {
    const router = useRouter();
    const { data: objectivesData, isLoading: objectivesLoading } = useObjectives(router.query.projectId);
    const redirectToObjective = (id: string):void => {
		router.push(`/myokr/${router.query.projectId}/${id}`);
	};
    return (
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
            {objectivesLoading && <NewObjectiveInput/>}
            {objectivesLoading && <Loader style={{maxWidth: "35px"}}/>}
        </div>
    )
};

