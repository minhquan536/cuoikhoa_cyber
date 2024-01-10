// import { useState } from 'react'

import { RouterProvider } from "react-router-dom"
import { GlobalStyled } from "./component/global-styled"
import { router } from "./route"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <GlobalStyled>
        <RouterProvider router={router}/>
    </GlobalStyled>
  )
}

export default App
