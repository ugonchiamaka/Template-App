import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
const App = () => {
  return (
    <Routes>
      <Route>
        {routes.map(({ path, component: Component }, idx) => {
          return (
            <Route
              key={idx}
              path={path}
              element={
                <Suspense
                  fallback={
                    <div
                      style={{
                        height: "100vh",
                        width: "100%",
                        background: "#e3e3e3",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <h1>Loading...</h1>
                    </div>
                  }
                >
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default App;
