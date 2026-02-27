# Countries & Flags

An interactive country explorer built with HTML, CSS, and vanilla JavaScript. Fetches live data from the REST Countries API and displays country cards with flags, regions, and populations — with search, filtering, and sorting.

![Project Preview](./images/project_preview.png)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
- [Architecture](#architecture)
- [Local Storage](#local-storage)
- [Known Limitations](#known-limitations)
- [License](#license)

---

## Overview

Countries & Flags is a dynamic single-page application that pulls real-time country data from a public REST API and renders it as an interactive card gallery. Users can search by name, filter by region, and sort by population — all without a page reload.

---

## Features

- 🌍 Fetches all countries from the REST Countries API
- 🏳️ Displays country flag, name, region, and population
- 🔍 Search countries by name
- 📂 Filter countries by region using a custom dropdown
- 🔃 Sort by population (ascending / descending)
- 💾 Persists user preferences via `localStorage`
- ✅ Custom checkbox and select components

---

## Demo

Open `index.html` directly in your browser. An active internet connection is required to fetch country data.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| HTML5 | — | Semantic page structure |
| CSS3 | — | Custom styling and component styles |
| JavaScript (ES6+) | — | Application logic, DOM manipulation, API calls |
| Bootstrap | 4.3.1 | Base layout utilities |
| REST Countries API | v3.1 | Live country data source |

---

## Project Structure

```
countries-flags/
├── index.html
├── scripts/
│   ├── index.js                # App entry point
│   ├── countriesService.js     # API fetch logic
│   ├── domService.js           # DOM rendering helpers
│   ├── localStorageService.js  # localStorage read/write
│   └── customSelect.js         # Custom dropdown component
├── styles/
│   ├── general.css             # Base/reset styles
│   ├── general_styling.css     # Page-level styles
│   ├── custom_select.css       # Custom dropdown styles
│   ├── checkbox.css            # Custom checkbox styles
│   └── shiny_button.css        # Button component styles
└── images/
    └── *.png                   # UI icons and cursors
```

---

## Getting Started

1. Clone or download the repository.
2. Open `index.html` in any modern browser.
3. Ensure you have an active internet connection (required for the API call and Bootstrap CDN).

No package installation or build step is needed.

---

## API Reference

This project consumes the [REST Countries API](https://restcountries.com/).

| Endpoint | Description |
|---|---|
| `GET https://restcountries.com/v3.1/all?fields=name,flags,region,population` | Fetches name, flag, region, and population for all countries |

No API key is required.

---

## Architecture

The app is organized using a service-based pattern:

- **`countriesService.js`** — handles all API communication
- **`domService.js`** — handles all DOM rendering and updates
- **`localStorageService.js`** — abstracts all `localStorage` interactions
- **`customSelect.js`** — self-contained custom dropdown component
- **`index.js`** — wires everything together as the application entry point

Scripts use ES Modules (`type="module"`) for clean import/export between files.

---

## Local Storage

User preferences (such as selected filters or sort order) are persisted using `localStorage` so settings survive page refreshes.

---

## Known Limitations

- The app depends on the REST Countries API being available. If the API is down, no data will load.
- Bootstrap 4.3.1 is loaded via CDN — an internet connection is required.

---

## License

This project is intended for educational and portfolio purposes.
