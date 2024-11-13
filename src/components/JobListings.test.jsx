import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import JobListings from './JobListings';

global.fetch = vi.fn();

describe ('JobListings component', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    afterEach(() => {
    });

    it('renders loading spinner initially', () => {
        fetch.mockResolvedValueOnce({
            json: Promise.resolve([])
        });

        render(<JobListings />);

        expect(screen.getByTitle('clip-loader')).toBeInTheDocument();
    });

})
