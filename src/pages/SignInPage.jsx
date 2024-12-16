import { useState } from 'react';

const SignInPage = () => {
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SignInPage;
