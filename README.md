# Star Wars Fun Facts App

## Overview

This project is a Next.js application that recreates the iconic Star Wars opening crawl, and then have some facts about the movies. It's a fun and interactive way to showcase web development skills while paying homage to the beloved sci-fi franchise.

## Features

- Faithful recreation of the Star Wars opening crawl
- Responsive design for various screen sizes
- Custom Star Wars logo component
- Animated text crawl effect
- Fetchs data from SWAPI
- Presents the movies and the characters of the movies

## Technologies Used

- Next.js
- React
- TypeScript
- CSS Modules

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weight-trainer-test.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weight-trainer-test
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/components/`: Contains React components, including the main `Intro` component
- `src/styles/`: Houses CSS modules for styling
- `public/`: Stores static assets like images and icons

## Known bugs

This project do have some minor know bugs, but due to time limitations these are left as is.

- The intro do mess a bit with the scroll bars.
- When moving from different viewports, the stars do not reload. This can easly be fixed by listening to view port changes and reinitiate the functionality, but due to the first but this becomes wonky quick as you might understand.

## Intro

The intro is a fun extra and can be turned off by setting "introFinished" to true in page.tsx. I hope the minor bugs with the intro doesn't reflect badly.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Inspired by the Star Wars franchise
- Built with Next.js and React
