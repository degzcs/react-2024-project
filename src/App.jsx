import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage'
import JobPage, {jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import SignInPage from './pages/SignInPage';


const App = () => {
    const addJob = async (job) => {
        const response = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        });
        if (response.ok) {
            return response.json();
        }
        throw new Error('Failed to add job');
    }

    const deleteJob = async (id) => {
        const response = await fetch(`/api/jobs/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete job');
        }
    }

    const updateJob = async (job) => {
        const response = await fetch(`/api/jobs/${job.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        });
        if (response.ok) {
            return response.json();
        }
        throw new Error('Failed to update job');
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/jobs' element={<JobsPage />} />
                <Route path='/edit-job/:id' element={<EditJobPage updateJobSumit={updateJob} />} loader={jobLoader} />
                <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
                <Route path='/add-job' element={<AddJobPage addJobSumit={addJob} />} />
                <Route path='/sign-in' element={<SignInPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
}

export default App;
