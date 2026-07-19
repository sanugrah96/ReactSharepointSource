import * as React from "react";

interface IChunkErrorBoundaryProps {
  children: React.ReactNode;
}
interface IChunkErrorBoundaryState {
  hasError: boolean;
}

/**
 * Catches render errors from lazily-loaded children (e.g. a React.lazy chunk
 * that fails to fetch because a new sppkg deploy replaced the hashed asset, or a
 * transient network failure). Without this, a rejected React.lazy re-throws
 * during render and — with no boundary — React 17 unmounts the whole web part,
 * leaving a permanently blank page for the session. Instead we show a small
 * recoverable message with a reload action.
 */
export default class ChunkErrorBoundary extends React.Component<
  IChunkErrorBoundaryProps,
  IChunkErrorBoundaryState
> {
  constructor(props: IChunkErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): IChunkErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error): void {
    // eslint-disable-next-line no-console
    console.error("[Home] lazy chunk failed to load:", error);
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "40px 24px",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          <p style={{ marginBottom: 16 }}>
            This section couldn&rsquo;t be loaded. It may have been updated since
            you opened the page.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              padding: "8px 20px",
              cursor: "pointer",
              border: "1px solid #ff7a00",
              background: "#ff7a00",
              color: "#ffffff",
              borderRadius: 4,
            }}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
