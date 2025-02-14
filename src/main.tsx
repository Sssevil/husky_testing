
import { createRoot } from 'react-dom/client'
import './app/style/global.scss'
import App from './app/App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: true,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
 
)
