import React from 'react'
import ReactDom from 'react-dom/client'
import {App} from './App'
import './index.css'
const root = ReactDom.createRoot(document.getElementById('root'))
 /* El nombre en Pascal ya qué siempre se pone el componente en React de esa forma ya qué así diferencia HTML a componente*/

root.render(
  <React.Fragment>
<App />
  </React.Fragment>
)
