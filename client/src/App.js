import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";

import { ScaleLoader } from "react-spinners";

function App() {
    return (
        <div className="App">
            <Suspense
                fallback={
                    <ScaleLoader
                        cssOverride={{
                            width: "100%",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
                }
            >
                <Routes>
                    {routes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={route.element}
                            key={idx}
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
