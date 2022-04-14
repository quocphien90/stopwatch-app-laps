import StopWatchLayout from "./StopWatchLayout";
import Duration from "./Duration";

export default function StopWatchingStopped({ requestResume, requestReset, startTimeMs }) {
  return (
    <StopWatchLayout>
      <h4>stopped</h4>
      <Duration durationMs={startTimeMs} />
      <footer className="flex flex-row gap-1">
        <button onClick={requestResume}>resume</button>
        <button onClick={requestReset}>reset</button>
      </footer>
    </StopWatchLayout>
  );
}
