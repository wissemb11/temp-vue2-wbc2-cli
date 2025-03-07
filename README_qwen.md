readme = """# WBC-UI2 Template

[![npm version](https://badge.fury.io/js/wbc-ui2.svg)](https://www.npmjs.com/package/wbc-ui2)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a simple Vue 2 CLI template showcasing the capabilities of `WBC-UI2`. It includes pre-configured settings for `vue-router`, `vuex`, and `vuetify`, injected automatically via `WBC-UI2`.

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Project Structure](#project-structure)
5. [Examples](#examples)
6. [Troubleshooting](#troubleshooting)
7. [License](#license)
8. [Contact](#contact)

---

## Features

- **Lightweight**: Minimal setup required.
- **Pre-Configured**: Includes `vue-router`, `vuex`, and `vuetify` out-of-the-box.
- **Dynamic Components**: Use `WBC-UI2`'s dynamic component generation with JS/JSON objects.
- **Responsive Design**: Built with `Vuetify` and `Bootstrap` for cross-device compatibility.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/wissemb11/wbc-ui2-template.git
   ```

2. Navigate to the project directory:
   ```bash
   cd wbc-ui2-template
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run serve
   # or
   yarn serve
   ```

---

## Usage

### 1. Main Entry File (`src/main.js`)

The main entry point initializes `Vue` and registers the `WBC-UI2` plugin:

```javascript
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Import and use WBC-UI2 plugin
import * as WBC_ui2_plugin from "wbc-ui2";
Vue.use(WBC_ui2_plugin, {});

new Vue({
  render: (h) => h(App),
}).`mount("#app");
```

### 2. Router Configuration (`src/router/index.js`)

The router defines routes for your application:

```javascript
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/ExampleComponent.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
```

### 3. Store Configuration (`src/store/index.js`)

The store manages global state using `Vuex`:

```javascript
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "Hello from Vuex!"
  },
  mutations: {
    updateMessage(state, payload) {
      state.message = payload;
    }
  },
  actions: {
    setMessage({ commit }, message) {
      commit("updateMessage", message);
    }
  },
  getters: {
    getMessage: (state) => state.message
  }
});
```

---

## Project Structure

temp_vue2_wbc2_cli/
├── node_modules/
├── public/
│ ├── index.html
├── src/
│ ├── main.js
│ ├── App.vue
│ ├── router/
│ │ └── index.js
│ ├── store/
│ │ └── index.js
│ ├── components/
│ │ ├── ExampleComponent.vue
│ │ └── About.vue
├── package.json
├── README.md
└── .gitignore


---

## Examples

### Example Component (`src/components/ExampleComponent.vue`)

A sample routed component using `WBC-UI2`:

```vue
<template>
  <WBC :item="{
    comp: 'v-container',
    options: {
      class: 'pa-4',
      children: [
        { comp: 'h2', html: 'Example Component' },
        { comp: 'p', html: 'This is an example of a routed component.' }
      ]
    }
  }" />
</template>

<script>
export default {
  name: "ExampleComponent"
};
</script>
```

---

## Troubleshooting

### Common Issues

#### Issue 1: Module not found: Error: Can't resolve 'Vue'

**Cause**: The library treats Vue as an external dependency. If the consuming app does not provide the correct version of Vue, this error occurs.

**Solution**:
1. Ensure Vue 2.7 is installed:
   ```bash
   npm install vue@2.7.16 vue-template-compiler@2.7.16
   ```

2. Verify peer dependencies in `package.json`:
   ```json
   "peerDependencies": {
     "vue": "^2.7.16"
   }
   ```

#### Issue 2: Missing Styles or Fonts

**Cause**: Vuetify's CSS or Material Design Icons may not be included.

**Solution**:
Explicitly import styles in `main.js`:
```javascript
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
```

---

## License

Released under the [MIT License](LICENSE). You are free to use, modify, and distribute this template in both personal and commercial projects.

---

## Contact

For questions, feedback, or support, feel free to reach out:

- Author: Wissem Boughamoura  
- Email: [wissem.boughamoura@example.com](mailto:wissem.boughamoura@example.com)  
- GitHub: [@wissemb11](https://github.com/wissemb11)  
- Website: [https://example.com](https://example.com)  
- Tutorial: [https://example.com/wbc-ui2-tutorial](https://example.com/wbc-ui2-tutorial)

---

Thank you for using `WBC-UI2`!
"""