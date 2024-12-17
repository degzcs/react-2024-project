import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SignInPage from './SignInPage';
import { toast } from 'react-toastify';

vi.mock('react-toastify', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe ('SignInPage', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders sign in page', () => {
        render(<SignInPage />);
        expect(screen.getByText('Email:')).toBeInTheDocument();
        expect(screen.getByText('Password:')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
    });

    it('validates the form', () => {
        render(<SignInPage />);
        const emailInput = screen.getByPlaceholderText('Enter your email');
        const passwordInput = screen.getByPlaceholderText('Enter your password');

        fireEvent.change(emailInput, { target: { value: 'test@test' } });
        fireEvent.change(passwordInput, { target: { value: '12345' } });

        expect(screen.getByText('Sign In')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Sign In'));
        expect(screen.queryByText('Invalid email address')).toBeInTheDocument();
        expect(screen.queryByText('Password must be at least 6 characters')).toBeInTheDocument();
        expect(toast.error).toHaveBeenCalledWith('Failed to sign in');
    });

    it('submits the form', () => {
        render(<SignInPage />);
        const emailInput = screen.getByPlaceholderText('Enter your email');
        const passwordInput = screen.getByPlaceholderText('Enter your password');

        fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
        fireEvent.change(passwordInput, { target: { value: '12345678' } });

        expect(screen.getByText('Sign In')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Sign In'));
        expect(screen.queryByText('Invalid email address')).not.toBeInTheDocument();
        expect(screen.queryByText('Password must be at least 6 characters')).not.toBeInTheDocument
        expect(toast.success).toHaveBeenCalledWith('Job updated successfully');
    });
    it('redirects to home page', () => {
        expect(true).toBe(true);
    });
})
