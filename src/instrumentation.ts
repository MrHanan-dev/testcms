/**
 * Next.js Instrumentation Hook - runs once on server startup (Node.js runtime).
 * Used here to:
 * 1. Log the startup environment so we can diagnose crash loops.
 * 2. Register process-level error handlers so unhandled rejections and
 *    uncaught exceptions are written to stdout (visible in Hostinger runtime
 *    logs) instead of silently killing the process.
 */
export async function register() {
  // Only run in the Node.js runtime, not Edge.
  if (process.env.NEXT_RUNTIME === "nodejs") {
    console.log("[instrumentation] server starting — Node.js", process.version);
    console.log("[instrumentation] NODE_ENV:", process.env.NODE_ENV);
    console.log(
      "[instrumentation] BLOB token present:",
      !!process.env.BLOB_READ_WRITE_TOKEN,
    );
    console.log(
      "[instrumentation] DATABASE_URI present:",
      !!process.env.DATABASE_URI,
    );

    // Catch unhandled promise rejections before they kill the process silently.
    process.on("unhandledRejection", (reason: unknown) => {
      console.error(
        "[instrumentation] UNHANDLED REJECTION — this is killing the server:",
        reason,
      );
      // Re-exit so PM2 still restarts, but NOW the error is logged.
      process.exit(1);
    });

    // Catch synchronous exceptions that escape all try/catch.
    process.on("uncaughtException", (err: Error) => {
      console.error(
        "[instrumentation] UNCAUGHT EXCEPTION — this is killing the server:",
        err,
      );
      process.exit(1);
    });

    // Warn if critical env vars are missing — misconfiguration crashes Payload.
    const missing = [
      "DATABASE_URI",
      "PAYLOAD_SECRET",
      "BLOB_READ_WRITE_TOKEN",
    ].filter((k) => !process.env[k]);

    if (missing.length) {
      console.warn(
        "[instrumentation] WARNING: missing env vars:",
        missing.join(", "),
      );
    }
  }
}
