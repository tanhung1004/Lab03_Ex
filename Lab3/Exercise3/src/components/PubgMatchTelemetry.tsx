
import { useEffect, useState } from "react";

import {
  PUBG_VN_SQUADS,
  type PubgSquad,
} from "../data/pubgSquads";

import { fetchKraftonPubgTelemetry } from "../services/telemetry";

// Four-state machine
type TelemetryView =
  | { status: "IDLE" }
  | { status: "LOADING" }
  | { status: "SUCCESS"; data: PubgSquad }
  | { status: "ERROR"; error: string };

export default function PubgMatchTelemetry() {
  const [squadId, setSquadId] = useState<string | null>(
    null
  );

  const [view, setView] = useState<TelemetryView>({
    status: "IDLE",
  });

  // Fetch telemetry whenever the selected squad changes
  useEffect(() => {
    if (squadId === null) {
      return;
    }

    const controller = new AbortController();

    fetchKraftonPubgTelemetry(
      squadId,
      controller.signal
    )
      .then((data) => {
        // Ignore stale responses
        if (controller.signal.aborted) {
          return;
        }

        setView({
          status: "SUCCESS",
          data,
        });
      })
      .catch((error: unknown) => {
        // An aborted request is not a network failure
        if (controller.signal.aborted) {
          return;
        }

        if (
          error instanceof Error &&
          error.name === "AbortError"
        ) {
          return;
        }

        setView({
          status: "ERROR",
          error:
            error instanceof Error
              ? error.message
              : "Unknown telemetry error.",
        });
      });

    // Cancel previous request when switching squads
    return () => {
      controller.abort();
    };
  }, [squadId]);

  function handleSelectSquad(id: string) {
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

      <p>
        Select a squad to view live match statistics.
      </p>

      {/* Squad selection */}
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
        <p>
          No squad selected. Choose a team to begin.
        </p>
      )}

      {/* LOADING */}
      {view.status === "LOADING" && (
        <section
          aria-busy="true"
          aria-label="Loading telemetry"
        >
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

      {/* ERROR */}
      {view.status === "ERROR" && (
        <section role="alert">
          <h3>Telemetry Connection Failed</h3>
          <p>{view.error}</p>
        </section>
      )}
    </section>
  );
}
