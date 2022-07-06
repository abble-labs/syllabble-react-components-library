import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fat } from '@fortawesome/pro-thin-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fad, fal, far, fat, fab)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
