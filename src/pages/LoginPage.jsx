import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(username, password);
        if (success) {
            navigate("/evaluations");
        } else {
            setError("Invalid username or password");
        }
    };

    useEffect(() => {
        document.title = "Coordinator Login";
    }, []);

    return (
        /* flex-1 lets it stretch to fill all vertical space below the Navbar */
        <div className="min-h-screen flex-1 flex items-center justify-center bg-amber-300 p-4 relative overflow-hidden font-sans">

            {/* Halftone Dot Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
                    backgroundSize: "16px 16px"
                }}
            />

            {/* Main Login Card - Comic Styled */}
            <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-6 sm:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">

                {/* Title Tag */}
                <div className="inline-block bg-yellow-400 border-2 border-black px-3 py-0.5 text-xs font-black uppercase tracking-wider mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                    ACCESS CONTROL
                </div>

                <h1 className="text-2xl font-black text-black uppercase tracking-tight mb-1">
                    Coordinator Login
                </h1>
                <p className="text-xs font-bold text-gray-700 mb-6">
                    Log in to add or edit evaluations
                </p>

                {error && (
                    <div className="mb-4 rounded-xl bg-red-500 border-3 border-black p-2.5 text-center text-xs font-black text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                        ⚠️ {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-xs font-black uppercase text-black mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full rounded-xl border-3 border-black px-3.5 py-2 text-sm font-bold placeholder:text-gray-400 focus:outline-none focus:bg-yellow-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors"
                            placeholder="Enter username"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-black uppercase text-black mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-xl border-3 border-black px-3.5 py-2 text-sm font-bold  placeholder:text-gray-400 focus:outline-none focus:bg-yellow-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-colors"
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-red-500 hover:bg-red-600 border-3 border-black py-3 text-sm font-black uppercase tracking-wider text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all mt-2"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center border-t-2 border-dashed border-black pt-4">
                    <Link
                        to="/"
                        className="text-xs font-black text-gray-800 hover:text-black hover:underline uppercase tracking-wide"
                    >
                        ← Continue as Member
                    </Link>
                </div>

            </div>
        </div>
    );
}