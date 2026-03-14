"use client";

export default function CharityCard({
  charity,
  selected,
  toggle,
}: any) {
  return (
    <div
      onClick={() => toggle(charity.id)}
      className={`card p-4 cursor-pointer transition relative
      ${selected ? "border-[#5C4A38]" : ""}`}
    >
      {charity.topMatch && (
        <span className="absolute top-2 left-2 text-xs bg-[#5C4A38] text-white px-2 py-1 rounded">
          Top match
        </span>
      )}

      {selected && (
        <span className="absolute top-2 right-2">
          ✔
        </span>
      )}

      <div className="h-16 flex items-center justify-center text-2xl">
        {charity.emoji}
      </div>

      <p className="text-xs uppercase muted mt-2">
        {charity.category}
      </p>

      <h3 className="font-semibold">
        {charity.name}
      </h3>

      <p className="text-sm muted">
        {charity.description}
      </p>

      <p className="text-xs mt-2">
        👥 {charity.supporters} supporting
      </p>
    </div>
  );
}
