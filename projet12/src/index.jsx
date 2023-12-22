// App.js
import React from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage'

const rootElement = document.getElementById('root')

// Utilisez createRoot depuis "react-dom/client"
const root = createRoot(rootElement)

root.render(<HomePage />)
