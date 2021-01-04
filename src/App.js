import { Container } from "@material-ui/core"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import Main from "./pages/Main"
import ImagesProvider from "./providers/ImagesProvider"
import UsersProvider from "./providers/UsersProvider"

function App() {
  return (
    <UsersProvider>
      <ImagesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </BrowserRouter>
      </ImagesProvider>
    </UsersProvider>
  )
}

export default App
