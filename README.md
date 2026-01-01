🎬 BingeWatch – Netflix-Style Movie Browser

BingeWatch is a sleek, responsive movie browsing app inspired by Netflix. It lets users explore trending titles, search with natural language using GPT, and preview trailers—all in one immersive interface.

🚀 Features

- 🔍 GPT-Powered Search: Ask “What should I watch today?” and get smart recommendations.
- 🖼️ Poster Validation: Only working poster URLs are rendered, with fallback UI for broken links.
- 🎞️ Trailer Previews: Embedded YouTube trailers for a seamless viewing experience.
- 🌐 Multi-API Integration: Combines data from TMDb, OMDb, and YouTube for rich content.
- 🎨 Responsive UI: Built with Tailwind CSS for clean, mobile-friendly layouts.
- 🔐 Secure API Handling: Environment variables and backend proxying protect sensitive keys.


📦 Setup
git clone https://github.com/your-username/bingewatch.git
cd bingewatch
npm install
npm run dev


Create a .env file with your API keys:

VITE_TMDB_API_KEY=your_tmdb_key
VITE_OMDB_API_KEY=your_omdb_key
VITE_YOUTUBE_API_KEY=your_youtube_key


🧪 Testing
- Unit tests with Jest and React Testing Library
- E2E tests with Cypress (coming soon)
🛠️ Developer Notes
- Poster URLs are validated asynchronously before rendering.
- GPT search uses OpenAI API with secure backend routing.
- Trailer embeds support autoplay and fullscreen.
📸 Screenshots
Add screenshots of your Browse page, GPT search results, and trailer previews here.
📄 License
MIT


