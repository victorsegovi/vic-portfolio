import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
  <App />
  </>
)
