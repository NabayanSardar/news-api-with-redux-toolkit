import { Provider } from 'react-redux'
import './App.css'
import store from './store/store'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import { Toaster } from 'sonner'

function App() {


  return (
    <>
    <Provider store={store}>
      <Toaster position='top-left' richColors closeButton/>
      <RouterProvider router={Routes}/>
    </Provider>
    </>
  )
}

export default App
