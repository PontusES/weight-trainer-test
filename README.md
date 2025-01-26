# Star Wars Fun Facts App

## Overview

This project is a Next.js application that recreates the iconic Star Wars opening crawl and presents facts about the movies. It's a fun and interactive way to showcase web development skills while paying homage to the beloved sci-fi franchise.

## Features

- Faithful recreation of the Star Wars opening crawl
- Responsive design for various screen sizes
- Custom Star Wars logo component
- Animated text crawl effect
- Fetches data from SWAPI (Star Wars API)
- Presents the movies and their characters

## Decisions

I chose to load all people data at once, instead of one by one. This is because using non-bulk behavior could cause a DDoS-like effect when multiple users are using the app simultaneously. During high traffic periods, this approach would lead to scaling issues and, depending on the cloud provider, could significantly drive up costs.

Using pure CSS: I'm use to tailwind or MUI, but I wanted to show case that I can use CSS, even if it was AGES ago I used it last time.

## Technologies Used

- Next.js: A React framework for building server-side rendered and statically generated applications
- React: A JavaScript library for building user interfaces
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript
- CSS Modules: For component-scoped CSS

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

## Building for Production

To build and run the production version of the app:

1. Build the app:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm start
   ```

## Known Issues

This project has some minor known issues, which due to time limitations, have been left as is:

- The intro slightly interferes with the scroll bars.
- When moving between different viewports, the stars do not reload. This could be fixed by listening to viewport changes and reinitiating the functionality, but due to the first issue, this becomes problematic. To fix it, refresh the page and change to a new viewport and back.

## Intro

The intro is a fun extra feature that can be turned off by setting "introFinished" to true in page.tsx. We hope the minor bugs with the intro don't detract from the overall experience.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Inspired by the Star Wars franchise
- Built with Next.js and React
- Data provided by SWAPI (Star Wars API)
