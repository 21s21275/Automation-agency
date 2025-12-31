import * as Sentry from "@sentry/react-router";
Sentry.init({
    dsn: "https://f700e6fb1325c8a89b19474cef02df47@o4510622758600704.ingest.us.sentry.io/4510622761091072",
    // Adds request headers and IP for users, for more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
    sendDefaultPii: true,
});