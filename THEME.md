# Theme Guide

Change the app theme in [src/styles/main.css](src/styles/main.css).

## Main rule

If you want to recolor the app, start with the `:root` variables in `src/styles/main.css`.

## Variables

- `--app-primary`: main accent color used by Vuetify and highlighted text
- `--app-background`: global app background
- `--app-surface`: card and surface background
- `--app-text`: main text color
- `--app-text-muted`: softer paragraph color
- `--app-text-soft`: softer UI text color
- `--app-border`: subtle border color
- `--app-overlay`: navbar background color
- `--app-panel-bg`: translucent panel background
- `--app-panel-border`: panel border color
- `--app-panel-shadow`: panel shadow tint
- `--app-badge-bg`: badge background
- `--app-badge-text`: badge text color
- `--app-hero-card-bg`: dark callout background
- `--app-hero-card-text`: dark callout text
- `--app-hero-card-title`: dark callout title text
- `--home-card-start`: first gradient color for the home card
- `--home-card-end`: second gradient color for the home card

## Example

```css
:root {
  --app-primary: #305f72;
  --app-background: #e1d5c9;
  --app-surface: #f7efe5;
  --app-text: #14213d;
  --app-text-muted: rgba(20, 33, 61, 0.82);
  --app-text-soft: rgba(20, 33, 61, 0.68);
  --app-border: rgba(20, 33, 61, 0.08);
  --app-overlay: rgba(126, 124, 124, 0.9);
  --app-panel-bg: rgba(255, 255, 255, 0.72);
  --app-panel-border: rgba(48, 95, 114, 0.18);
  --app-panel-shadow: rgba(48, 95, 114, 0.14);
  --app-badge-bg: #305f72;
  --app-badge-text: #ffffff;
  --app-hero-card-bg: #0f172a;
  --app-hero-card-text: #e2e8f0;
  --app-hero-card-title: #ffffff;
  --home-card-start: rgba(255, 255, 255, 0.98);
  --home-card-end: var(--app-background);
}
```

## Ready-to-use preset

```css
:root {
  --app-primary: #1d4ed8;
  --app-background: #dbeafe;
  --app-surface: #eff6ff;
  --app-text: #0f172a;
  --app-text-muted: rgba(15, 23, 42, 0.8);
  --app-text-soft: rgba(15, 23, 42, 0.62);
  --app-border: rgba(15, 23, 42, 0.1);
  --app-overlay: rgba(219, 234, 254, 0.88);
  --app-panel-bg: rgba(255, 255, 255, 0.74);
  --app-panel-border: rgba(29, 78, 216, 0.18);
  --app-panel-shadow: rgba(29, 78, 216, 0.16);
  --app-badge-bg: #1d4ed8;
  --app-badge-text: #ffffff;
  --app-hero-card-bg: #172554;
  --app-hero-card-text: #dbeafe;
  --app-hero-card-title: #ffffff;
}
```
## old main
```css
/* Change the app theme here: update these variables to recolor the whole app. */
:root {
--app-primary: #314E52;
--app-background: #e7e6e1;
--app-surface: rgba(170, 27, 27, 0.9);
--app-text: var(--app-primary);
--app-text-muted: rgba(176, 24, 188, 0.82);
--app-text-soft: rgba(41, 228, 20, 0.68);
--app-border: rgb(56, 106, 214);
--app-overlay: #f2a154;
--app-white-rgb: 255, 255, 255;
--app-panel-bg: #f7f6e7;
--app-panel-border: rgba(113, 202, 237, 0.91);
--app-panel-shadow: rgba(227, 16, 130, 0.86);
--app-badge-bg: #f2a154;
--app-badge-text: #314E52;
--app-hero-card-bg: #1356f4;
--app-hero-card-text: #25470c;
--app-hero-card-title: #d84a4a;
--home-card-start: #FFDFD8;
--home-card-end: #dfbab2;
}

*,
*::before,
*::after {
box-sizing: border-box;
margin: 0;
}

html,
body {
min-height: 100%;
}

body {
min-height: 100vh;
color: var(--app-text);
background: var(--app-background);
line-height: 1.5;
font-family:
Inter,
-apple-system,
BlinkMacSystemFont,
'Segoe UI',
Roboto,
Oxygen,
Ubuntu,
Cantarell,
'Helvetica Neue',
sans-serif;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

#app {
min-height: 100vh;
}

.app-surface {
background: var(--app-surface);
}

a {
text-decoration: none;
color: inherit;
transition: color 0.2s ease;
}
```
