"use client";

import { useState } from "react";

const causes = [
  "Education",
  "Housing & homelessness",
  "Mental health",
  "Environment",
  "Humanitarian aid",
  "Youth & mentorship",
];

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [cause, setCause] = useState("");
  const [cityProblem, setCityProblem] = useState("");
  const [nonprofitIdea, setNonprofitIdea] = useState("");
  const [mentorship, setMentorship] = useState("");

  const next = () => setStep((s) => s + 1);

  return (
    <main className="min-h-screen flex items-center justify-center">
  <div className="w-full max-w-xl p-6 space-y-8">


      {/* progress dots */}
      <div className="flex gap-2 justify-center">
        {[1,2,3,4,5,6].map((n) => (
          <div
            key={n}
            className={`h-2 w-2 rounded-full ${
              step >= n ? "bg-[#5C4A38]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* STEP 1 */}
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold">
            What cause matters most to you?
          </h2>

          <p className="muted">
            Pick one. You can always change this later.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
  {causes.map((c) => (
    <button
      key={c}
      onClick={() => setCause(c)}
      className={`px-4 py-2 rounded-full border text-sm transition
      ${
        cause === c
          ? "bg-[#5C4A38] text-white border-[#5C4A38]"
          : "bg-white hover:bg-[#FFF8F2]"
      }`}
    >
      {c}
    </button>
  ))}
</div>


          <button
            onClick={next}
            className="btn-primary mt-6"
            disabled={!cause}
          >
            Continue
          </button>
        </>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold">
            What's something broken in your city you wish someone would fix?
          </h2>

          <p className="muted">
            No wrong answers. Just say what's on your mind.
          </p>

          <textarea
            className="w-full p-3 border rounded-lg"
            rows={4}
            value={cityProblem}
            onChange={(e) => setCityProblem(e.target.value)}
          />

          <div className="flex gap-4 mt-4">
            <button onClick={next} className="btn-primary">
              Continue
            </button>

            <button onClick={next} className="muted">
              Skip
            </button>
          </div>
        </>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <>
          <h2 className="text-2xl font-bold">
            If you ran a nonprofit, what would it be for?
          </h2>

          <p className="muted">
            Dream big. What problem would you take on?
          </p>

          <textarea
            className="w-full p-3 border rounded-lg"
            rows={4}
            value={nonprofitIdea}
            onChange={(e) => setNonprofitIdea(e.target.value)}
          />

          <div className="flex gap-4 mt-4">
            <button onClick={next} className="btn-primary">
              Continue
            </button>

            <button onClick={next} className="muted">
              Skip
            </button>
          </div>
        </>
      )}

      {/* STEP 4 */}
      {step === 4 && (
        <>
          <h2 className="text-2xl font-bold">
            Growing up, what's one thing you wish someone had taught you?
          </h2>

          <p className="muted">
            This helps us find orgs doing that work for others.
          </p>

          <textarea
            className="w-full p-3 border rounded-lg"
            rows={4}
            value={mentorship}
            onChange={(e) => setMentorship(e.target.value)}
          />

          <div className="flex gap-4 mt-4">
            <button onClick={next} className="btn-primary">
              Continue
            </button>

            <button onClick={next} className="muted">
              Skip
            </button>
          </div>
        </>
      )}

      {/* STEP 5 placeholder */}
      {step === 5 && (
        <>
          <h2 className="text-2xl font-bold">
            Pick your charities
          </h2>

          <p className="muted">
            We'll match these based on your answers.
          </p>

          <div className="card p-4">
            Charity cards go here (hackathon placeholder)
          </div>

          <button onClick={next} className="btn-primary mt-4">
            Continue
          </button>
        </>
      )}

      {/* STEP 6 */}
      {step === 6 && (
        <>
          <h2 className="text-2xl font-bold">
            Connect your bank
          </h2>

          <p className="muted">
            We use this to see when you get paid and calculate your spare change.
          </p>

          <div className="card p-6 text-center">
            <p>🔒 Bank-level security</p>
            <p>👁 Read-only access</p>

            <button className="btn-primary mt-4">
              Connect with Plaid
            </button>

            <p className="muted mt-3 cursor-pointer">
              I'll do this later
            </p>
          </div>
        </>
      )}

    </div>
    </main>
  );
}
