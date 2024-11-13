import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor, act } from '@testing-library/react';
import JobListings from './JobListings';

global.fetch = vi.fn();

describe ('JobListings component', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it('renders loading spinner initially', async () => {
        fetch.mockResolvedValueOnce({
            json: () => Promise.resolve([])
        });

        act(() => {
            render(<JobListings />);
        });

        expect(screen.getByTitle('clip-loader')).toBeInTheDocument();
        await waitFor(() => {
            expect(fetch).toHaveBeenCalledTimes(1);
        });
    });

    it('does not render loading spinner', async () => {
        const mockJobs = [
            {
                id: 1,
                title: 'Software Developer',
                type: 'Full Time',
                description: 'Software Developer job description',
                salary: '$100,000',
                location: 'New York, NY'
            },
            {
                id: 2,
                title: 'Frontend Developer',
                type: 'Part Time',
                description: 'Frontend Developer job description',
                salary: '$80,000',
                location: 'Los Angeles, CA'
            }
        ];

        fetch.mockResolvedValueOnce({
            json: () => Promise.resolve(mockJobs)
        });

        act(() => {
            render(<JobListings />);
        });

        // Wait for the loading spinner to disappear
        waitFor(() => {
            expect(screen.getByTitle('clip-loader')).not.toBeInTheDocument();
            expect(fetch).toHaveBeenCalledTimes(1);
        });
    });

    it('renders job listings', async () => {
        const mockJobs = [
            {
                id: 1,
                title: 'Software Developer',
                type: 'Full Time',
                description: 'Software Developer job description',
                salary: '$100,000',
                location: 'New York, NY'
            },
            {
                id: 2,
                title: 'Frontend Developer',
                type: 'Part Time',
                description: 'Frontend Developer job description',
                salary: '$80,000',
                location: 'Los Angeles, CA'
            }
        ];

        fetch.mockResolvedValueOnce({
            json: () => Promise.resolve(mockJobs)
        });

        act(() => {
            render(<MemoryRouter><JobListings /></MemoryRouter>);
        });

        // Wait for the loading spinner to disappear
        await waitFor(() => {
            expect(screen.getByText('Software Developer')).toBeInTheDocument();
            expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
        });
    })
})
