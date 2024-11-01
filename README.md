# Rick and Morty Characters

This project is a **Rick and Morty Characters** built with **Next.js** and **Tailwind CSS**. It allows users to browse characters from the Rick and Morty series by selecting episodes from the left sidebar. The app supports pagination and has a loading state for better user experience.

## Live Demo

You can view the live project here: [Rick and Morty](https://rick-and-morty-rho-wheat.vercel.app/)

## Features

- **Next.js & Tailwind CSS**: The project is built using the latest Next.js app structure and styled with Tailwind CSS for a responsive and modern UI.
- **Episode Selection**: Users can select episodes from the sidebar to filter the characters shown.
- **Pagination**: The character grid supports pagination with "Previous" and "Next" buttons to navigate through the character list.
- **Loading State**: A loading spinner is displayed while data is being fetched, ensuring the UI doesn't break during fetch operations.
- **Reset to Initial State**: Clicking on the "Episode List" in the sidebar resets the page to show all characters.
- **API Integration**: Data is fetched from the [Rick and Morty API](https://rickandmortyapi.com/documentation/#rest) using the native `fetch` method, with the API base URL stored in an `.env` file.

## Technologies Used

- **Next.js**: A React framework for building optimized and scalable web applications.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs quickly.
- **fetch API**: Used for fetching data from the Rick and Morty API.
- **Vercel**: The app is deployed on Vercel, making use of its optimized infrastructure for Next.js applications.

## Getting Started

### Prerequisites

To run the project locally, ensure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yash2026/Rick-and-morty.git
   cd Rick-and-morty
   ```

### Install dependencies:

`npm install`

# or

`yarn install`

### Run the development server:

`npm run dev`

# or

`yarn dev`

### Open http://localhost:3000 in your browser to see the app running locally.

### Project Structure

- src/app/page.tsx: The main page where the episodes and characters are displayed.
- src/components/EpisodeList.tsx: Displays the list of episodes in the left sidebar.
- src/components/CharacterGrid.tsx: Displays the character grid with pagination.
- src/components/Pagination.tsx: Handles pagination controls.
- src/lib/api.ts: API helper functions for fetching episodes and characters.

### How to Use

- View All Characters: Upon loading, the app shows all characters from the Rick and Morty universe.
- Select Episode: You can select an episode from the sidebar to filter characters by episode.
- Reset to Initial State: Click on "Episode List" at the top of the sidebar to reset to the initial state (showing all characters).
- Pagination: Use the "Previous" and "Next" buttons to navigate through the paginated character list.

### Deployment

The project is deployed on Vercel. You can check the live version here: Rick and Morty Explorer

To deploy your own version on Vercel:

- Push your code to a GitHub repository.
- Go to Vercel and import your repository.
- Set up the environment variables in the Vercel dashboard (same as the .env setup).
- Deploy your app.

### Links

- Live Demo: [https://rick-and-morty-rho-wheat.vercel.app/](https://rick-and-morty-rho-wheat.vercel.app/)
- GitHub Repository: [https://github.com/yash2026/Rick-and-morty](https://github.com/yash2026/Rick-and-morty)
