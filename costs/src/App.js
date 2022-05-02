import {BrowserRouter as BrowserRouter} from "react-router-dom";
import MyRoutes from "./MyRoutes"
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container customClass="min-height">
        <MyRoutes />
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App;