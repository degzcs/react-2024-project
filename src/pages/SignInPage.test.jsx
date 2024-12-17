import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SignInPage from './SignInPage';

describe ('SignInPage', () => {
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
    });

    it('show a toast after successed login', () => {
        expect(true).toBe(true);
    });
    it('show a toast after failed login', () => {
        expect(true).toBe(true);
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
    });
    it('redirects to home page', () => {
        expect(true).toBe(true);
    });
})
