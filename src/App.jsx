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

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path='/jobs' element={<JobsPage />} />
                <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
                <Route path='/add-job' element={<AddJobPage addJobSumit={addJob} />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
}

export default App;
