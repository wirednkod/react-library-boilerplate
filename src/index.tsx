import * as React from 'react'

interface Props {
  text: string
}

const ExampleComponent = ({ text }: Props) => {
  return <div>Example Component: {text}</div>
}

export { ExampleComponent }
