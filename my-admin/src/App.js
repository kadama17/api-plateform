import logo from "./logo.svg";
import { HydraAdmin } from "@api-platform/admin";
import authProvider from "./providers/authProviders";

import "./App.css";

function App() {
  return (
    <HydraAdmin
      authProvider={authProvider}
      entrypoint={process.env.REACT_ENTRYPOINT}
    />
  );
}

export default App;
