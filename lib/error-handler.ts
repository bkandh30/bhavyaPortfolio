// Global error handler
export function setupErrorHandling() {
  if (typeof window !== "undefined") {
    // Prevent unhandled promise rejections from logging to console
    window.addEventListener("unhandledrejection", (event) => {
      event.preventDefault()

      // Optionally, you can still handle the error in a controlled way
      // console.warn('Unhandled promise rejection:', event.reason)

      // Or send to an error tracking service
      // sendToErrorTrackingService(event.reason)

      return true
    })

    // Override console.error in production
    if (process.env.NODE_ENV === "production") {
      const originalConsoleError = console.error
      console.error = (...args) => {
        // Filter out specific React errors you want to suppress
        const errorText = args.join(" ")

        // Example: Filter out specific errors
        if (
          errorText.includes("Warning: ReactDOM.render") ||
          errorText.includes("Failed to load resource") ||
          // Add other error patterns you want to filter
          false
        ) {
          return
        }

        // Let other errors pass through
        originalConsoleError.apply(console, args)
      }
    }
  }
}

