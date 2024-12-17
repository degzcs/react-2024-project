import { useState } from 'react';
import { toast } from 'react-toastify';

const SignInPage = () => {
    // check where should we locate the state for login in the app
    // probably use Redux or Context API
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let errors = { email: '', password: '' };

        if (!validateEmail(email)) {
            errors.email = 'Invalid email address';
            valid = false;
        }

        if (!validatePassword(password)) {
            errors.password = 'Password must be at least 6 characters';
            valid = false;
        }

        setErrors(errors);

        if (valid) {
            toast.success('Job updated successfully');
            // Handle sign-in logic here
            // send request to the server
            console.log('Email:', email);
            console.log('Password:', password);
        } else {
            toast.error('Failed to sign in');
        }

    }

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                <div
                    className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                >
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label>Email:</label>
                            <input
                                type="email"
                                id="email"
                                className="border rounded w-full py-2 px-3"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label>Password:</label>
                            <input
                                type="password"
                                id="password"
                                className="border rounded w-full py-2 px-3"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                        </div>
                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                        type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SignInPage;
