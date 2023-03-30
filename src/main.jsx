import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout'
import './index.css'

const Main = () => (
  <StrictMode>
    <Layout />
  </StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
);

export default Main;
