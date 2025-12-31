import * as Sentry from "@sentry/react-router";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
Sentry.init({
    dsn: "https://f700e6fb1325c8a89b19474cef02df47@o4510622758600704.ingest.us.sentry.io/4510622761091072",
    // Adds request headers and IP for users, for more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
    sendDefaultPii: true,
    integrations: [
        // Registers and configures the Tracing integration,
        // which automatically instruments your application to monitor its
        // performance, including custom Angular routing instrumentation
        Sentry.reactRouterTracingIntegration(),
        // Registers the Replay integration,
        // which automatically captures Session Replays
        Sentry.replayIntegration(),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for tracing.
    // We recommend adjusting this value in production
    // Learn more at
    // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#traces-sample-rate
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set `tracePropagationTargets` to declare which URL(s) should have trace propagation enabled
    tracePropagationTargets: [/^\//, /^https:\/\/yourserver\.io\/api/],
    // Capture Replay for 10% of all sessions,
    // plus 100% of sessions with an error
    // Learn more at
    // https://docs.sentry.io/platforms/javascript/guides/react-router/session-replay/configuration/#general-integration-configuration
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
});
startTransition(() => {
    hydrateRoot(
        document,
        <StrictMode>
            <HydratedRouter />
        </StrictMode>
    );
});