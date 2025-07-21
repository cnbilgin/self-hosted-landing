# Landing Page App

A React-based landing page that displays applications from a JSON file as clickable square blocks.

## Features

- 📱 Responsive grid layout
- 🎨 Modern, glassmorphism design
- 🖼️ App icons with fallback placeholders
- 🔗 Click-to-redirect functionality
- ⚡ Fast loading with Vite
- 📄 JSON-based app configuration

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Configuration

Edit the `public/configs/apps.json` file to customize the applications displayed on your landing page:

```json
{
  "apps": [
    {
      "port": 8080,
      "name": "Your App Name",
      "description": "Brief description of your app",
      "image": "path/to/image.png",
      "url": "https://your-app-url.com"
    }
  ]
}
```

### App Object Properties

- `id`: Unique identifier for the app
- `name`: Display name of the application
- `description`: Short description (optional)
- `image`: URL or path to the app icon (optional)
- `url`: Target URL when the app block is clicked

## Customization

- **Styling**: Modify `src/App.css` and `src/components/AppBlock.css`
- **Layout**: Adjust grid settings in `src/App.css`
- **Colors**: Update the gradient and color scheme in `src/index.css`

## Project Structure

```
├── public/
│   └── apps.json          # App configuration
├── src/
│   ├── components/
│   │   ├── AppBlock.jsx   # Individual app block component
│   │   └── AppBlock.css   # App block styles
│   ├── App.jsx           # Main application component
│   ├── App.css           # Main app styles
│   ├── index.css         # Global styles
│   └── main.jsx          # React entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```
