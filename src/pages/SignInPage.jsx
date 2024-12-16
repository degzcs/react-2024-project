import { useState } from 'react';

const SignInPage = () => {
    // check where should we locate the state for login in the app
    // probably use Redux or Context API
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
