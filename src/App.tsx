import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './App.css'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcons } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'

function App() {
  const { fromLanguage, toLanguage, setFromLanguage, interChangeLanguage } =
    useStore()
  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector />
        </Col>
        <Col>
          <Button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interChangeLanguage}
          >
            <ArrowsIcons />
          </Button>
        </Col>
        <Col>
          <LanguageSelector />
        </Col>
      </Row>
    </Container>
  )
}

export default App
