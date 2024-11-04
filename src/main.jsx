import { createRoot } from "react-dom/client";
import App from "./App";

const racineProjet = createRoot(document.querySelector("#root"));

racineProjet.render(<App />);
