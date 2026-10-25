
import { useEffect, useState } from "react";
import {
  PUBG_VN_SQUADS,
  type PubgSquad,
} from "../data/pubgSquads";

// Four-state telemetry model
type TelemetryView =
  | { status: "IDLE" }
  | { status: "LOADING" }
  | { status: "SUCCESS"; data: PubgSquad }
  | { status: "ERROR"; error: string };

export default function PubgMatchTelemetry() {
  // Currently selected squad
  const [squadId, setSquadId] = useState<string | null>(
    null
  );

  // Current telemetry state
  const [view, setView] = useState<TelemetryView>({
    status: "IDLE",
  });

  // Task 3.2: Simulated telemetry loading
  useEffect(() => {
    if (squadId === null) {
      return;
    }

    const squad = PUBG_VN_SQUADS.find(
      (item) => item.id === squadId
    );

    if (!squad) {
      return;
    }

    // Request started
    const loadingTimer = setTimeout(() => {
      setView({ status: "LOADING" });
    }, 0);

    // Simulate a successful response
    const responseTimer = setTimeout(() => {
      setView({
        status: "SUCCESS",
        data: squad,
      });
    }, 800);

    // Prevent old timers from updating the UI
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(responseTimer);
    };
  }, [squadId]);

  function handleSelectSquad(id: string) {
    // Immediately display loading state
    setView({ status: "LOADING" });
    setSquadId(id);
  }

  function handleClearSelection() {
    setSquadId(null);
    setView({ status: "IDLE" });
  }

  return (
    <section aria-labelledby="telemetry-title">
      <h2 id="telemetry-title">
        PUBG Vietnam Series — Live Telemetry
      </h2>

      <p>Select a squad to view live match statistics.</p>

      {/* Squad selector */}
      <nav aria-label="Select PUBG squad">
        {PUBG_VN_SQUADS.map((squad) => (
          <button
            key={squad.id}
            type="button"
            aria-pressed={squadId === squad.id}
            onClick={() => handleSelectSquad(squad.id)}
          >
            {squad.name}
          </button>
        ))}

        <button
          type="button"
          onClick={handleClearSelection}
        >
          Clear Selection
        </button>
      </nav>

      {/* IDLE */}
      {view.status === "IDLE" && (
        <p>No squad selected. Choose a team to begin.</p>
      )}

      {/* LOADING */}
      {view.status === "LOADING" && (
        <section aria-busy="true" aria-label="Loading telemetry">
          <p>Syncing PUBG telemetry...</p>
        </section>
      )}

      {/* SUCCESS */}
      {view.status === "SUCCESS" && (
        <article aria-live="polite">
          <h3>{view.data.name}</h3>

          <dl>
            <dt>Map</dt>
            <dd>{view.data.map}</dd>

            <dt>Phase</dt>
            <dd>{view.data.phase}</dd>

            <dt>Alive</dt>
            <dd>{view.data.alive}</dd>

            <dt>Kills</dt>
            <dd>{view.data.kills}</dd>

            <dt>WWCD Probability</dt>
            <dd>{view.data.wwcdProb}</dd>

            <dt>Status</dt>
            <dd>{view.data.status}</dd>
          </dl>
        </article>
      )}

      {/* ERROR - Will be activated in Task 3.3 */}
      {view.status === "ERROR" && (
        <section role="alert">
          <p>{view.error}</p>
        </section>
      )}
    </section>
  );
}
