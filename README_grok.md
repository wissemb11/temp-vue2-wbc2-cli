# temp-vue2-wbc2-cli

[![npm version](https://badge.fury.io/js/wbc-ui2.svg)](https://www.npmjs.com/package/wbc-ui2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**temp-vue2-wbc2-cli** is a simple Vue CLI template showcasing the `WBC-UI2` library’s `WBC` micro-component. Built on Vue.js 2.7, this project demonstrates how to integrate `WBC-UI2` for dynamic, JS/JSON-driven UI development. With pre-injected `vue-router`, `vuex`, and `vuetify`, it’s a lightweight starting point for building responsive applications. The `WBC` component can also be used in advanced tools like `WBJS2` (view management) and `WB-Table2` (data visualization).

---

## Table of Contents

1. [Features](#features)
2 2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Examples](#examples)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

---

## Features

- **WBC Micro-Component**: Generate UIs dynamically using JS/JSON with `WBC-UI2`.
- **Pre-Injected Modules**: `vue-router`, `vuex`, and `vuetify` included via `WBC-UI2`—no manual setup needed.
- **Vue CLI Simplicity**: Quick setup with CLI commands (`serve`, `build`).
- **Responsive Design**: Built-in `vuetify` styling for mobile-friendly layouts.
- **Extensible**: Compatible with `WBJS2` and `WB-Table2` for advanced use cases.

---

## Project Structure

temp-vue2-wbc2-cli/
├── src/
│   ├── components/
│   │   └── ExampleComponent.vue
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── public/
│   └── sample.pdf
├── package.json
└── README.md


---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/wissemb11/temp-vue2-wbc2-cli.git
   cd temp-vue2-wbc2-cli
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the App**:
   ```bash
   npm run serve
   ```

> **Note**: Ensure `wbc-ui2` is installed locally (e.g., via `file:../.` if linked) or from npm (`npm install wbc-ui2`).

---

## Usage

### Start the Development Server
Run the app locally:
```bash
npm run serve
```

### Build for Production
Generate a production build:
```bash
npm run build
```

### Customize
- Modify `src/main.js` to pass custom modules to `WBC-UI2` if needed (e.g., override `vuetify` version).
- Add routes in `src/router/index.js` or state in `src/store/index.js`.

---

## Examples

### Dynamic Button with Store Integration
```vue
<template>
  <div>
    <h1>{{ `store.getters.getMessage }}</h1>
    <WBC :item="{ comp: 'v-btn', options: { props: { color: 'primary' }, html: 'Update Message', on: { click: updateMessage } } }"></WBC>
  </div>
</template>

<script>
export default {
  methods: {
    updateMessage() {
      this.`store.dispatch('setMessage', 'Message Updated!');
    }
  }
};
</script>
```

### Render a PDF
```vue
<template>
  <WBC :item="'./sample.pdf'"></WBC>
</template>
```

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repo: [https://github.com/wissemb11/temp-vue2-wbc2-cli](https://github.com/wissemb11/temp-vue2-wbc2-cli).
2. Create a feature/bugfix branch.
3. Submit a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## License

Released under the [MIT License](LICENSE).

---

## Contact

- **Author**: Wissem Boughamoura
- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **GitHub**: [@wissemb11](https://github.com/wissemb11)
- **Homepage**: [https://wissemb11.github.io/temp-vue2-wbc2-cli](https://wissemb11.github.io/temp-vue2-wbc2-cli)
- **Tutorial**: [https://example.com/wbc-ui2-tutorial](https://example.com/wbc-ui2-tutorial)
