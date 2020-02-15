import React from "react"
import style from "../styles/indexPageStyle.module.css"
import { Link } from "gatsby"
import { Container, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap"

const ApartmentButtonGroup = () => (
  <Container className={style.container}>
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup aria-label="First group" style={{ marginTop: "-15px" }}>
        <Link
          to="/"
          className={style.mainlink}
          style={{
            marginRight: "4px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Button variant="secondary">1</Button>
        </Link>
        <Link
          to="/index2/"
          className={style.mainlink}
          style={{
            marginRight: "4px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Button variant="secondary">2</Button>
        </Link>
        <Link
          to="/index3/"
          className={style.mainlink}
          style={{
            marginRight: "4px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Button variant="secondary">3</Button>
        </Link>
        <Link
          to="/index4/"
          className={style.mainlink}
          style={{
            marginRight: "4px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Button variant="secondary">4</Button>
        </Link>
      </ButtonGroup>
    </ButtonToolbar>
  </Container>
)

export default ApartmentButtonGroup
