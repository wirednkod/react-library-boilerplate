# flare-react-library

> A library containing common reusable components for flare finance

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Dependency

Add in your package.json the following:
```bash
"flare-react-library": "git@github.com:flrfinance/flare-react-library.git",
```

## Usage

```tsx
import React, { Component } from 'react'

import { MyComponent } from 'flare-lib'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

# Development

Project has an example directory which is meant for showcasing the components.
In order to develop live a component just run: `npm run dev`
This will start watching the changes made and run the examples page in `localhost:3000`.
Making changes on the components will appear immediately in the page mentioned above

## License

MIT © [Flare Finance](https://github.com/flrfinance)
