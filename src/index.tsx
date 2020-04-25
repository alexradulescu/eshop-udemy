import React from 'react'
import { render } from 'react-dom'

import { AppWrapper } from './App'
import './assets/bootstrap.min.css'
import './assets/avantui.min.css'

const rootElement = document.querySelector('#root')
render(<AppWrapper />, rootElement)
