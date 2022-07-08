import Layout from '../layouts/layout'
import '../styles/globals.css'
import {  QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient()
function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <QueryClientProvider client={queryClient}>
       <Component {...pageProps} />
       </QueryClientProvider>
    </Layout>
  )
}

export default MyApp
