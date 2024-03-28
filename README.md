
# BookShop

Recommendation Using JavaScript , React & React Router in this Project. And use CSS framework Tailwind  , daisyUI — Tailwind CSS Components Library.


## Live Preview

 - [Click Here](https://iridescent-griffin-ded6d3.netlify.app/)



## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| praimary | #23BE0A |
| secondary | #59C6D2 |
| black |  #59C6D2 |
| white |  #FFFFFF |

## How Deployment

1. Create an account on https://app.netlify.com/
2. If you complete project then go to your cmd.
3. Then go to your project folder.
4. Then type this cmd line.

```bash
  npm run build
```
5. Automatically Create a "Dist" folder.
6. Now go to the netlify and host this "Dist" folder.


## How to Installation our project

Install my-project with npm

```bash
  npm create vite@latest book-shop -- --template react

  cd book-shop

  npm install
```
In this project I used Tailwind as CSS framework

```bash
  npm install -D tailwindcss postcss autoprefixer

  npx tailwindcss init -p

  npm install
```
And update tailwind.config.js file

```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

```
And update index.css file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
    
