import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import Router from './router/router'

function App () {
  return (
    <BrowserRouter>
      <Router />
      <Toaster richColors position='top-right' />
    </BrowserRouter>
  )
}

export default App
