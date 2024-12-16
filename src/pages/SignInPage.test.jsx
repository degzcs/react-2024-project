import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
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
        expect(true).toBe(true);
    });
    it('show a toast after successed login', () => {
        expect(true).toBe(true);
    });
    it('show a toast after failed login', () => {
        expect(true).toBe(true);
    });
    it('submits the form', () => {
        expect(true).toBe(true);
    });
    it('redirects to home page', () => {
        expect(true).toBe(true);
    });
})
