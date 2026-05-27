export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--color-bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "48px",
          fontWeight: 540,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          color: "var(--color-text)",
          margin: 0,
        }}
      >
        Lumen
      </h1>
    </main>
  );
}
