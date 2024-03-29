# Astro Blog Tutorial

### Information

Teacher: Coding In Public
Project repo: https://github.com/coding-in-public/astro-blog-tutorial/
Project video tutorial playlist: https://www.youtube.com/watch?v=F2pw1C9eKXw&list=PLoqZcxvpWzzeRwF8TEpXHtO7KYY6cNJeF
Framework documentation: https://astro.build/

### Useful lnks

- https://astro.build/integrations

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

`<p style="font-size: 4rem">Styles in AstroJS</p>`

#### CSS in JS style

```javascript
<p
  style={{
    backgroundColor: 'red',
  }}
>
  CSS in JS style
</p>
```

#### Scope to file CSS styles

```jsx
<MainLayout title="Home" description='My Home Page'>
  <p>Testing styles</p>
</MainLayout>

<style>
	p {
		font-size: 4rem;
	}
</style>
```

#### Global CSS styles

```jsx
<MainLayout title="Home" description='My Home Page'>
  <p>Testing styles</p>
</MainLayout>

<style is:global>
	p {
		font-size: 4rem;
	}
</style>
```

#### Adding SASS

`npm i -D sass`

```jsx
<MainLayout title="Home" description='My Home Page'>
  <p>Testing <span>styles</span></p>
</MainLayout>

<style lang="scss">
	p {
		span {
			color: blue;
		}
	}
</style>
```

#### Passing variables directly

```jsx
---
const foregroundColor = "hsl(20, 50%, 50%)"
const backgroundColor = "hsl(200, 50%, 50%)"
---

<MainLayout title="Home" description='My Home Page'>
  <p>Testing styles</p>
</MainLayout>

<style define:vars={{ foregroundColor, backgroundColor }}>
	p {
		background-color: var(--backgroundColor);
		color: var(--foregroundColor);
	}
</style>
```

#### Classlist directive

```jsx
---
const isRed = true
// const isRed = false
---

<MainLayout title="Home" description='My Home Page'>
  <p class:list={["big"], { red: isRed }}>Testing styles</p>
</MainLayout>

<style>
	.big {
		font-size: 4rem;
	}
	.red {
		color: red;
	}
</style>
```

#### Installing PostCSS

https://postcss.org/
https://preset-env.cssdb.org/
`npm i postcss`
`npm i postcss-preset-env`

## 05. Astro Components

https://github.com/natemoo-re/astro-icon#readme
`npm i astro-icon`

https://icones.js.org

## 06. Routing basics

## 07. Markdown layouts MINUTO 15

```javascript
const { frontmatter } = Astro.props
console.log(frontmatter)
```

## 08. Card component

```javascript
<p>{frontmatter.title}</p>
<pre>{JSON.stringify(frontmatter, null, 2)}</pre>
```

## 09. Filter / sort posts

## 10. Dynamic routes

## 11. Pagination

## 12. Tag cloud

## 13. Related posts

## 14. Build a sitemap

## 15. Build an RSS feed

## 16. SEO basics

## 17. Integrations (React, Tailwind, CMS, and more)

Kick it into lightspeed with integrations  
https://astro.build/integrations/  


Schema Markup Generator (JSON-LD)
`https://technicalseo.com/tools/schema-markup-generator`

What are rich results?
Rich results are experiences on Google surfaces, such as Search, that go beyond the standard blue link. Rich results can include carousels, images, or other non-textual elements.
https://search.google.com/test/rich-results

Render stuff as HTML

```javascript
const paragraph = '<p>Hello</p>'
<Fragment set:html={paragraph}>

<div set:html={paragraph} />
```

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
