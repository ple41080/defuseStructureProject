import { Layout } from 'antd'
import '../styles/globals.css'
import Navbar from './Components/Navbar'


function MyApp({ Component, pageProps }) {

  return (
    <>
        <Component {...pageProps} />
    </>
  )


}

export default MyApp
