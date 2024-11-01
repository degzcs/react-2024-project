import { useParams , useLoaderData } from 'react-router-dom';

const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();

    return (
        <div>
            <h1>{job.title}</h1>
        </div>
    );
}

const jobLoader = async ({params}) => {
    const response = await fetch(`/api/jobs/${params.id}`);
    const data = await response.json();
    return data;
}

export { JobPage as default, jobLoader};
