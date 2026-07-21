import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isCoordinator, logout } = useAuth();

  // Responsive comic-style button class
  const linkClass = ({ isActive }) =>
    `relative px-2.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-wider transition-all transform active:translate-y-0.5 shrink-0 ${isActive
      ? "bg-yellow-300 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1 scale-105 z-10"
      : "text-white bg-red-600 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 hover:text-black hover:-rotate-1"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-red-500 border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)] sm:shadow-[0_6px_0_0_rgba(0,0,0,1)]">      {/* Comic Halftone Dot Background Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 20%, transparent 20%)",
          backgroundSize: "8px 8px"
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-xl items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3">
        {/* Comic Brand / Logo */}
        <NavLink to="/" className="flex items-center shrink-0">
          <span className="bg-yellow-400 text-black font-black text-sm sm:text-base italic px-2.5 py-0.5 sm:px-3 sm:py-1 border-2 sm:border-3 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 transition-transform">
            MODULE!
          </span>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto no-scrollbar py-1 px-1">
          <NavLink to="/storyline" className={linkClass}>
            STORY
          </NavLink>
          <NavLink to="/evaluations" className={linkClass}>
            EVAL
          </NavLink>

          {isCoordinator ? (
            <button
              onClick={logout}
              className="px-2.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-wider text-black bg-yellow-400 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all transform active:translate-y-0.5 shrink-0"
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login" className={linkClass}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}