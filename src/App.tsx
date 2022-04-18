import { useState } from 'react'
import './App.css'
import Example from './components/example'
import List from './components/list'
import Sidenav from './components/sidenav'
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

function App() {
  const [loadRepos, setLoadRepos] = useState(true);
  const [marginLeftContent, setMarginLeftContent] = useState<string>('0')
  const toogleSideNav = () => setMarginLeftContent((prev) => {
    return '0';
   console.log('change the margin');
  })
  console.log(marginLeftContent)
  return (
      <QueryClientProvider client={queryClient}>
        <Sidenav />
      </QueryClientProvider>
  )
}

export default App
