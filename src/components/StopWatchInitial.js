import StopWatchLayout from "./StopWatchLayout";
import Duration from "./Duration";

export default function StopWatchInitial({ requestStart }) {
  return (
    <StopWatchLayout>
      <h4>Initial</h4>
      <Duration durationMs={0} />
      <footer className="flex flex-row gap-1">
        <button onClick={requestStart}>Start</button>
      </footer>
    </StopWatchLayout>
  );
}
