// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { Header, Slider, Footer} from './components'
import './App.css'

function App() {

  return (
    <>
      <div className="App">
        <Header />
        <Slider />
        <Footer />
      </div>
    </>
  )
}

export default App
library.add(fab, fas, far)
