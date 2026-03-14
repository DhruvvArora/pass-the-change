"use client";

import { useState } from "react";
import CharityCard from "../components/CharityCard";


const causes = [
  "Education",
  "Housing & homelessness",
  "Mental health",
  "Environment",
  "Humanitarian aid",
  "Youth & mentorship",
];

const charities = [
    {
      id: 1,
      name: "Chicago Food Bank",
      category: "Hunger",
      description: "Providing meals to families across Chicago.",
      supporters: 312,
      emoji: "🍎",
      topMatch: true,
    },
    {
      id: 2,
      name: "Youth Coding Chicago",
      category: "Education",
      description: "Teaching coding skills to underserved youth.",
      supporters: 187,
      emoji: "💻",
      topMatch: true,
    },
    {
      id: 3,
      name: "Lake Michigan Cleanup",
      category: "Environment",
      description: "Keeping Chicago’s shoreline clean.",
      supporters: 224,
      emoji: "🌊",
      topMatch: false,
    },
  ];
  

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [cause, setCause] = useState("");
  const [cityProblem, setCityProblem] = useState("");
  const [nonprofitIdea, setNonprofitIdea] = useState("");
  const [mentorship, setMentorship] = useState("");
  const [selectedCharities, setSelectedCharities] = useState<number[]>([]);

  const toggleCharity = (id: number) => {
    setSelectedCharities((prev) =>
      prev.includes(id)
        ? prev.filter((c) => c !== id)
        : [...prev, id]
    );
  };
  

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

{step === 5 && (
  <>
    <h2 className="text-2xl font-bold">
      Pick your charities
    </h2>

    <p className="muted">
      We matched these to your answers. Tap to select.
    </p>

    <div className="grid gap-4 mt-4">
      {charities.map((charity) => (
        <CharityCard
          key={charity.id}
          charity={charity}
          selected={selectedCharities.includes(charity.id)}
          toggle={toggleCharity}
        />
      ))}
    </div>

    <button
      onClick={next}
      className="btn-primary mt-6 w-full"
    >
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
