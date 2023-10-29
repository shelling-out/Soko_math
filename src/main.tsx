import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { BrowserRouter } from "react-router-dom";
import { postsSlice } from './features/posts/postSlice.ts'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    </BrowserRouter> 
  </Provider>
)
