const SomethingWentWrong = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <div style={{maxWidth: "28rem", padding: "1rem", backgroundColor: "white", borderRadius: "0.5rem"}}>
        <h1 style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem"}}>Something went wrong</h1>
        <p>Sorry, something went wrong. Please try again later.</p>
        <button
          onClick={() => (location.href = "/")}
          style={{marginTop: "1rem", backgroundColor: "#2563EB", color: "white", padding: "0.5rem 1rem", borderRadius: "0.5rem"}}
        >
          Go back home
        </button>
      </div>
    </div>
  );
};

export const PageLoading = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <div style={{maxWidth: "28rem", padding: "1rem", backgroundColor: "white", borderRadius: "0.5rem"}}>
        <h1 style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem"}}>Loading...</h1>
      </div>
    </div>
  );
};

export const NotFoundPage = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <div style={{maxWidth: "28rem", padding: "1rem", backgroundColor: "white", borderRadius: "0.5rem"}}>
        <h1 style={{fontSize: "1.25rem", fontWeight: "bold", marginBottom: "1rem"}}>Page not found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <button
          onClick={() => (location.href = "/")}
          style={{marginTop: "1rem", backgroundColor: "#2563EB", color: "white", padding: "0.5rem 1rem", borderRadius: "0.5rem"}}
        >
          Go back home
        </button>
      </div>
    </div>
  );
};

export default SomethingWentWrong;
