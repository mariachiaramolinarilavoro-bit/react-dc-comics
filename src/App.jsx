import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import comics from './components/comics'

function App() {


  return (
    <>
      <AppHeader />
      <AppMain comics={comics} />
      <AppFooter />
    </>
  )
}

export default App