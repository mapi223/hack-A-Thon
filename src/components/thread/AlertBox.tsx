import { useState } from "react";

export default function DisclaimerBanner() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed top-4 right-4 z-50 w-full max-w-sm">
      {isOpen ? (
        <div className="relative rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 shadow-md">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition"
            aria-label="Minimize disclaimer"
          >
            ✕
          </button>
          <p>
            <strong>Disclaimer:</strong> The information provided by this AI tool could be incorrect or outdated. Please double-check any information it provides.
          </p>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 right-4 z-50 rounded-full bg-blue-100 text-blue-800 p-2 shadow hover:bg-blue-200 transition"
          aria-label="Show disclaimer"
        >
          !
        </button>
      )}
    </div>
  );
}
