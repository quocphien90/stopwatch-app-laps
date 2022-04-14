import { useState, useEffect } from "react";

import StopWatchLayout from "./StopWatchLayout";
import useNow from "../utils/useNow";
import Duration from "./Duration";

export default function StopWatchRunning({ requestStop, requestLap, startTimeMs }) {
  const durationMs = useNow() - startTimeMs;

  return (
    <StopWatchLayout>
        <h4>running…</h4>
        <Duration durationMs={durationMs} />
        <footer>
            <button onClick={requestStop}>Stop</button>
            <button onClick={requestLap}>Lap</button>
        </footer>
    </StopWatchLayout>
  );
}

