import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom fonts to the document head
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Add Font Awesome icons
const iconLink = document.createElement('link');
iconLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
iconLink.rel = 'stylesheet';
document.head.appendChild(iconLink);

createRoot(document.getElementById("root")!).render(<App />);
