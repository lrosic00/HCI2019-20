import React from "react"
import style from "../styles/indexPageStyle.module.css"
import { Container, CardGroup, Card, Button } from "react-bootstrap"

const ApartmentCardGroup = () => (
  <Container className={style.container}>
    <p style={{ color: "black", marginTop: 30 }}>
      <b>Most popular apartments</b>
    </p>
    <CardGroup className={style.CardGroup}>
      <Card style={{ marginleft: ".8rem", marginRight: ".8rem" }}>
        <Card.Img
          variant="top"
          src="https://r-cf.bstatic.com/images/hotel/max1280x900/117/117165841.jpg"
        />
        <Card.Body style={{ padding: 7 }}>
          <Card.Title style={{ textAlign: "center" }}>Villa Domina</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ marginleft: ".8rem", marginRight: ".8rem" }}>
        <Card.Img
          variant="top"
          src="https://q-cf.bstatic.com/images/hotel/max1280x900/175/175298506.jpg"
        />
        <Card.Body style={{ padding: 7 }}>
          <Card.Title style={{ textAlign: "center" }}>
            Zoku Amsterdam
          </Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ marginleft: ".8rem", marginRight: ".8rem" }}>
        <Card.Img
          variant="top"
          src="https://q-cf.bstatic.com/images/hotel/max1280x900/236/236378586.jpg"
        />
        <Card.Body style={{ padding: 7 }}>
          <Card.Title style={{ textAlign: "center" }}>
            Aparment Ancora
          </Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ marginleft: ".8rem", marginRight: ".8rem" }}>
        <Card.Img
          variant="top"
          src="https://q-cf.bstatic.com/images/hotel/max1280x900/134/134195469.jpg"
        />
        <Card.Body style={{ padding: 7 }}>
          <Card.Title style={{ textAlign: "center" }}>Rooms Pino</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ marginleft: ".8rem", marginRight: ".8rem" }}>
        <Card.Img
          variant="top"
          src="https://r-cf.bstatic.com/images/hotel/max1280x900/427/42754663.jpg"
        />
        <Card.Body style={{ padding: 7 }}>
          <Card.Title style={{ textAlign: "center" }}>Villa Valeria</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  </Container>
)

export default ApartmentCardGroup
