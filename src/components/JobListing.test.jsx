/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import JobListing from './JobListing';

describe ('JobListing', () => {
    it('renders job listing', () => {
        render(<MemoryRouter><JobListing job={{
            id: 1,
            title: 'Software Developer',
            type: 'Full Time',
            description: 'Software Developer job description',
            salary: '$100,000',
            location: 'New York, NY'
        }} /></MemoryRouter>);

        expect(screen.getByText('Software Developer')).toBeInTheDocument();
        expect(screen.getByText('Software Developer job description...')).toBeInTheDocument();
        expect(screen.getByText('$100,000')).toBeInTheDocument();
        expect(screen.getByText('New York, NY')).toBeInTheDocument();
    });
})

