- Update to latest React
- Package a local version of Gatsby with hooks support
- Switch to SVG emoji heart

```jsx
import React, { useState } from 'react'

const handleSubmit = (value, mutation) => {
  return ev => {
    ev.preventDefault()
  }

  // use value
}

function() {
  const [value, setValue] = useState('')

  return (
    <form onSubmit={handleSubmit(value, mutation)}>
      <input value={value} onChange={ev => setValue(ev.target.value)} />
    </form>
  )
}
```
