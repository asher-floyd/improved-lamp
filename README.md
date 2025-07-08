# mxrap.com

![Docusaurus Badge](https://img.shields.io/badge/Docusaurus-3ECC5F?logo=docusaurus&logoColor=fff&style=square) ![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=square) ![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=square) ![Markdown Badge](https://img.shields.io/badge/Markdown-000?logo=markdown&logoColor=fff&style=square) ![MDX Badge](https://img.shields.io/badge/MDX-1B1F24?logo=mdx&logoColor=fff&style=square) ![CSS Badge](https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff&style=square) ![HTML5 Badge](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=square) ![YAML](https://img.shields.io/badge/YAML-CB171E?logo=yaml&logoColor=fff&style=square) ![JSON](https://img.shields.io/badge/JSON-000?logo=json&logoColor=fff&style=square)
![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=square) ![](https://img.shields.io/badge/Hungry%20Jack's-red?style=square&logo=hungryjacks)

[![pipeline status](https://gitlab.com/mxdox/website/badges/main/pipeline.svg)](https://gitlab.com/mxdox/website/-/commits/main)

## Repository directory

```text
website/
│
├── README.md                     # you are here
├── docusaurus.config.ts          # where the magic happens
├── package*.json                 # node dependencies for development
├── sidebars.ts                   # type defs for sidebars, incl custom
├── _data                         # json etc driving author lists, papers, etc
├── blog/                         # where blog .md files go
├── docs/                         # where documentation .md files go
├── src/                          # where the ts, js, and css goes
│   ├── components                # react components
|   ├── css                       # you'll never guess what's in here
|   ├── theme                     # custom "swizzled" components
│   └── pages                     # where normal webpage .md files go

└── static/
    ├── img/                      # images
    │   ├── logos/                # sponsor/consortium logos
    |   ├── branding/             # mXrap/ACG "identity" specific images,
    |   ├── animated/             # webm gif etc
    |   ├── staff/                # our beautiful faces
    └── ...
```

## Authoring Content

### Dynamic content in static pages

Wrap dyanmic content in `<BrowserOnly>` tags which provides an "escape hatch" for the contained elements to run with client-side rendering.

```typescript
import BrowserOnly from '@docusaurus/BrowserOnly';

<BrowserOnly>
Non-static content here
<BrowserOnly />
```

### Manual DocCardLists

```tsx
<DocCardList
  items={[
    {
      type: 'link',
      href: '/docs/support',
      label: 'Getting Started',
      description: '...',
    },
  ]}
/>
```

[Documentation](https://docusaurus.io/docs/docusaurus-core/#browseronly)

## Development

### Frameworks

- [React](https://react.dev/reference/react) the main frontend
- [Infima](https://infima.dev/docs/getting-started/introduction) css framework used
- [mdx](https://mdxjs.com/) markdown with react components

### Howtos

- [JSX](https://react.dev/learn/writing-markup-with-jsx) js files with concise HTML-like markup
- [TypeScript/.tsx](https://react.dev/learn/typescript) jsx files with typing and other goodies (this site uses tsx)

### Components

- [react-icons](https://react-icons.github.io/react-icons/) icon search
- [base ui](https://base-ui.com/) UI components not yet in infima TODO define css defaults

### Installation

TODO

### Build

`yarn build`

### Deployment

TODO: Automated via gitlab pages
