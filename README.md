# Modern Tic-Tac-Toe

A sleek, performant implementation of the classic Tic-Tac-Toe game built with **React**, **TypeScript**, and **Tailwind CSS**. 

![Project Screenshot](/Screenshot.png)
## Live Demo

[View Live Demo](/Screen_Recording.mp4)

## Tech Stack

* **Framework:** React (Functional Components + Hooks)
* **Language:** TypeScript (Strict typing)
* **Styling:** Tailwind CSS (Utility-first architecture)
* **State Management:** React `useState` (Derived state for winner calculation)

## Features

* **Game Logic:** Complete win detection and draw (stalemate) detection.
* **Performance:** Optimized rendering using derived state—eliminates redundant re-renders by calculating the winner on the fly rather than storing it in state.
* **UI/UX:** * Modern "Dark Mode" aesthetic using Slate color palette.
    * Distinct visual cues for Player X (Cyan) and Player O (Rose).
    * Responsive grid layout.
* **Interactive:** Hover effects and instant feedback loops.
* **Reset Mechanism:** Ability to restart the game immediately upon completion.

## Steps to Run Locally

Clone the project and install dependencies:

```bash
# Clone the repository
git clone [https://github.com/your-username/tic-tac-toe.git](https://github.com/your-username/tic-tac-toe.git)

# Navigate into the directory
cd tic-tac-toe

# Install dependencies
npm install

# Start the development server
npm run dev
