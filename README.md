# With Elements

Select existing HTML elements and run the callback with each element.

## Installation

```
npm install --save with-elements
```

## Usage

### Asynchronous

```ts
import { withElements } from 'with-elements';

await withElements('.article', async element => {
  const title = element.querySelector('.title')?.innerHTML;

  const article = await fetch('/edit', {
    body: JSON.stringify([{ search: title }, { title: 'New Title' }]),
  }).then(res => res.json());

  console.log(article);
});
```

### Synchronous

```ts
import { withElementsSync } from 'with-elements';

withElementsSync('.article', element => {
  const title = element.querySelector('.title')?.innerHTML;

  alert(title);
});
```
