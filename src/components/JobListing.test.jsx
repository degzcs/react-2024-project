import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import JobListing from './JobListing';

describe ('JobListing', () => {
    it('renders job listing', () => {
        const job = {
            id: 1,
            title: 'Software Developer',
            type: 'Full Time',
            description: 'Software Developer job description',
            salary: '$100,000',
            location: 'New York, NY'
        };

        render(<MemoryRouter><JobListing job={ job } /></MemoryRouter>);

        expect(screen.getByText('Software Developer')).toBeInTheDocument();
        expect(screen.getByText('Software Developer job description...')).toBeInTheDocument();
        expect(screen.getByText('$100,000')).toBeInTheDocument();
        expect(screen.getByText('New York, NY')).toBeInTheDocument();
        expect(screen.getByText('Read More')).toBeInTheDocument();
        expect(screen.getByText('Read More')).toHaveAttribute('href', '/jobs/1');
    });
})

