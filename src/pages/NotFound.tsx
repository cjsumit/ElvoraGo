import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LostImage from "../assets/lost.png";

const NotFound = () => {
  const [clicks, setClicks] = useState(0);
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full
                 bg-gradient-to-b from-stone-50 to-stone-100
                 dark:from-[#060606] dark:to-[#0f0f0f]
                 text-stone-900 dark:text-stone-100
                 flex items-center"
      onClick={() => setClicks((c) => c + 1)}
    >
      {/* CONTENT WRAPPER */}
      <div
        className="mx-auto max-w-7xl px-6 py-28
                   grid grid-cols-1 lg:grid-cols-2
                   gap-28 lg:gap-36 items-center"
      >
        {/* LEFT — IMAGE */}
        <div className="relative flex justify-center lg:justify-start">
          {/* BACKGROUND GLOW */}
          <div
            className="absolute -inset-24 rounded-full
                       bg-gradient-to-tr from-emerald-300/40 via-sky-300/30 to-indigo-300/30
                       dark:from-emerald-900/30 dark:via-sky-900/20 dark:to-indigo-900/20
                       blur-3xl"
          />

          <img
            src={LostImage}
            alt="Lost illustration"
            className="relative w-full
                       max-w-3xl sm:max-w-4xl lg:max-w-5xl
                       transition-transform duration-500
                       hover:scale-105"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="space-y-12 text-center lg:text-left animate-fadeUp">
          <div className="animate-slideIn">
            <p
              className="text-sm font-semibold uppercase tracking-widest
                         text-stone-500 dark:text-stone-400 mb-6"
            >
              Error
            </p>

            {/* 3D 404 */}
            <h1
              className="text-[6.5rem] sm:text-[7.5rem] lg:text-[9rem]
                         font-extrabold leading-none tracking-tight
                         text-stone-900 dark:text-stone-100
                         drop-shadow-[0_8px_0_rgba(0,0,0,0.18)]
                         dark:drop-shadow-[0_8px_0_rgba(255,255,255,0.06)]
                         animate-pop"
            >
              404
            </h1>

            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold animate-fadeDelayed">
              You’re off the map
            </h2>
          </div>

          <p className="max-w-md mx-auto lg:mx-0 text-stone-600 dark:text-stone-400 animate-fadeDelayed">
            The page you’re looking for doesn’t exist, or it took a wrong turn.
            Don’t worry — it happens to the best of us.
          </p>

          {/* CLICK COUNTER */}
          <div
            className="inline-flex items-center gap-3
                       rounded-full border
                       border-stone-300 dark:border-white/15
                       bg-white/70 dark:bg-white/5
                       px-6 py-2 text-sm font-medium
                       transition-all duration-200
                       active:scale-95 animate-fadeDelayed"
          >
            <span>Clicks detected:</span>
            <span className="font-bold">{clicks}</span>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 animate-fadeDelayed">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate("/");
              }}
              className="rounded-xl px-7 py-3
                         bg-stone-900 text-white
                         hover:bg-stone-800
                         dark:bg-white dark:text-black
                         dark:hover:bg-stone-200
                         transition-all duration-200
                         active:scale-95"
            >
              Go back home
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setClicks(0);
              }}
              className="rounded-xl px-7 py-3
                         border border-stone-300 dark:border-white/20
                         hover:bg-stone-200 dark:hover:bg-white/10
                         transition-all duration-200
                         active:scale-95"
            >
              Reset clicks
            </button>
          </div>

          <p className="text-xs text-stone-400 dark:text-stone-500 animate-fadeDelayed">
            Tip: Clicking more won’t unlock the page, but you can try.
          </p>
        </div>
      </div>

      {/* TEXT ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.9s ease-out forwards;
        }

        @keyframes pop {
          0% { transform: scale(0.94); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop {
          animation: pop 0.6s ease-out forwards;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.7s ease-out forwards;
        }

        @keyframes fadeDelayed {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeDelayed {
          animation: fadeDelayed 1s ease-out forwards;
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
