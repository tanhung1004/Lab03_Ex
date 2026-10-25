
import type { PubgSquad } from "../data/pubgSquads";

// Simulate a delay that supports cancellation
function waitWithAbort(
  delayMs: number,
  signal: AbortSignal
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException("Request aborted", "AbortError"));
      return;
    }

    const timer = setTimeout(() => {
      signal.removeEventListener("abort", handleAbort);
      resolve();
    }, delayMs);

    function handleAbort() {
      clearTimeout(timer);
      reject(new DOMException("Request aborted", "AbortError"));
    }

    signal.addEventListener("abort", handleAbort, { once: true });
  });
}

// Simulated PUBG satellite telemetry API
export async function fetchKraftonPubgTelemetry(
  squadId: string,
  signal: AbortSignal
): Promise<PubgSquad> {
  const url = `${import.meta.env.BASE_URL}telemetry.json`;

  // Start network request and simulated latency together
  const [response] = await Promise.all([
    fetch(url, {
      signal,
      cache: "no-store",
    }),
    waitWithAbort(1200, signal),
  ]);

  if (!response.ok) {
    throw new Error(`Telemetry server error: ${response.status}`);
  }

  const squads = (await response.json()) as PubgSquad[];

  if (signal.aborted) {
    throw new DOMException("Request aborted", "AbortError");
  }

  const squad = squads.find((item) => item.id === squadId);

  if (!squad) {
    throw new Error("Squad telemetry not found.");
  }

  // Simulate a 35% packet-loss probability
  if (Math.random() < 0.35) {
    throw new Error("Satellite packet loss. Telemetry unavailable.");
  }

  return squad;
}
