
import { useId, useRef, useState } from "react";
import {
  SMART_PEOPLE,
  type Scientist,
} from "../data/smartPeople";

type SortBy = "iq-desc" | "age-asc";

export default function ScientistDirectory() {
  // Task 2.1: Original dataset
  const [people, setPeople] = useState<Scientist[]>(
    () => SMART_PEOPLE.map((person) => ({ ...person }))
  );

  // Task 2.2: Independent input states
  const [query, setQuery] = useState("");
  const [minIq, setMinIq] = useState(0);
  const [sortBy, setSortBy] = useState<SortBy>("iq-desc");

  // Accessible IDs
  const searchId = useId();
  const iqId = useId();
  const sortId = useId();

  // Keep keyboard focus after deletion
  const searchRef = useRef<HTMLInputElement>(null);

  // Task 2.2: Derived State
  const visiblePeople = people
    .filter((person) => {
      const matchesName = person.name
        .toLowerCase()
        .includes(query.trim().toLowerCase());

      const matchesIq = person.iq >= minIq;

      return matchesName && matchesIq;
    })
    .toSorted((a, b) => {
      if (sortBy === "iq-desc") {
        return b.iq - a.iq;
      }

      return a.age - b.age;
    });

  // Task 2.3: Delete by stable ID
  function handleDelete(id: string) {
    setPeople((previousPeople) =>
      previousPeople.filter((person) => person.id !== id)
    );

    // Move focus to a stable control
    searchRef.current?.focus();
  }

  // Task 2.3: Restore original dataset and controls
  function handleReset() {
    setPeople(
      SMART_PEOPLE.map((person) => ({ ...person }))
    );

    setQuery("");
    setMinIq(0);
    setSortBy("iq-desc");
  }

  return (
    <section aria-labelledby="directory-title">
      <h2 id="directory-title">
        Scientist & Pioneer Directory
      </h2>

      <p>
        Explore scientists by name, IQ and age.
      </p>

      {/* Search / Filter / Sort */}
      <form
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor={searchId}>
          Search by Name
        </label>

        <input
          ref={searchRef}
          id={searchId}
          type="search"
          placeholder="Enter a scientist's name"
          value={query}
          onChange={(event) =>
            setQuery(event.currentTarget.value)
          }
        />

        <label htmlFor={iqId}>
          Minimum IQ
        </label>

        <input
          id={iqId}
          type="number"
          min="0"
          value={minIq}
          onChange={(event) => {
            const value =
              event.currentTarget.valueAsNumber;

            setMinIq(
              Number.isNaN(value)
                ? 0
                : Math.max(0, value)
            );
          }}
        />

        <label htmlFor={sortId}>
          Sort By
        </label>

        <select
          id={sortId}
          value={sortBy}
          onChange={(event) =>
            setSortBy(
              event.currentTarget.value as SortBy
            )
          }
        >
          <option value="iq-desc">
            IQ: High to Low
          </option>

          <option value="age-asc">
            Age: Young to Old
          </option>
        </select>
      </form>

      {/* Task 2.3: Accessible live result counter */}
      <output
        role="status"
        aria-live="polite"
      >
        Found {visiblePeople.length} pioneers
      </output>

      {/* Scientist directory */}
      <ul>
        {visiblePeople.map((person) => (
          <li key={person.id}>
            <strong>{person.name}</strong>

            <p>Age: {person.age}</p>
            <p>IQ: {person.iq}</p>

            <button
              type="button"
              onClick={() => handleDelete(person.id)}
              aria-label={`Delete ${person.name}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {visiblePeople.length === 0 && (
        <p>No matching scientists found.</p>
      )}

      {/* Task 2.3: Reset */}
      <button
        type="button"
        onClick={handleReset}
      >
        Reset Directory
      </button>
    </section>
  );
}
