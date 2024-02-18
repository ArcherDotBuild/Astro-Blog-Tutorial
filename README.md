# Astro Blog Tutorial

### Information

Teacher: Coding In Public
Project repo: https://github.com/coding-in-public/astro-blog-tutorial/
Project video tutorial playlist: https://www.youtube.com/watch?v=F2pw1C9eKXw&list=PLoqZcxvpWzzeRwF8TEpXHtO7KYY6cNJeF
Framework documentation: https://astro.build/

## 01. Install & Setup

`npm create astro@latest`
`npm run dev`

## 02. Astro basics

Fetching data example

```javascript
---
const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
const data = await res.json()
---

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="viewport" content="width=device-width" />
		<meta name="generator" content={Astro.generator} />
		<title>Astro</title>
	</head>
	<body>
		{
			data.map((item) => (
				<li>{item.title}</li>
			))
		}
	</body>
</html>
```

## 03. Layouts

MainLayout example

```javascript
---
// Component imports
import MainHead from './MainHead.astro'

interface Props {
  title?: string,
  description?: string
}

const { title = 'My Astro Blog', description = 'My Astro Description' } = Astro.props as Props
---

<html lang="en">
  <MainHead {title} {description} />
    <body>
      <slot>
      </slot>
    </body>
</html>

```

## 04. CSS & styling

### AstroJS default information README file

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
