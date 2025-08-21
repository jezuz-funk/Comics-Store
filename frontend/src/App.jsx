import { useState } from 'react'
import './App.css'
import { Page } from './components/Page'
import { Header } from './components/Header'
import { Title } from './components/Title'
import { Card } from './components/Card'
import { Button } from './components/Button'
import { Paragraph } from './components/Paragraph'
import { InlineCode } from './components/InlineCode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Page>
      <Header />
      <Title>Vite + React</Title>
      <Card>
        <Button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </Button>
        <Paragraph>
          Edit <InlineCode>src/App.jsx</InlineCode> and save to test HMR
        </Paragraph>
      </Card>
      <Paragraph>Click on the Vite and React logos to learn more</Paragraph>
    </Page>
  )
}

export default App
