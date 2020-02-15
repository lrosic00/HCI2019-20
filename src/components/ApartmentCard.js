import React from "react"
import { Link } from "gatsby"
import style from "../styles/indexPageStyle.module.css"
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  Badge,
} from "react-bootstrap"

const ApartmentCard = props => (
  <Container className={style.container}>
    <Link
      to="/apartment/"
      state={{ props: props.apartman }}
      className={style.mainlink}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card className={style.mainCard}>
        <Row className={style.row}>
          <Col md={4}>
            <Card.Img
              variant="bottom"
              src={props.apartman.img1}
              height="100%"
              width="auto"
              style={{ objectFit: "cover" }}
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{props.apartman.title}</Card.Title>
              <Card.Text>{props.apartman.longDesc}</Card.Text>
              <hr className="visibleSeperator" />
              <Row className={style.pillRow}>
                <Button disabled={true} size="sm" variant="outline-dark">
                  Price: {props.apartman.price}
                </Button>
                <Button disabled={true} variant="outline-dark">
                  Age: {props.apartman.age}
                </Button>
                <Button disabled={true} variant="outline-dark">
                  City: {props.apartman.city}
                </Button>
                <Button disabled={true} variant="outline-dark">
                  Country: {props.apartman.country}
                </Button>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Link>

    {/* 
    <Row className={style.row}>
      <Col>
        <Image
          src="https://r-cf.bstatic.com/images/hotel/max1280x900/134/134195468.jpg"
          fluid
        />
      </Col>
      <Col>
        <Card style={{ width: "200" }}>
          <Card.Img
            variant="bottom"
            src="https://r-cf.bstatic.com/images/hotel/max1280x900/134/134195468.jpg"
            width="200"
            height="250"
          />
          <Card.Body>
            <Card.Title>Apartment2</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {<Button variant="secondary">Go somewhere</Button>}
          </Card.Body>
        </Card>
      </Col>
    </Row> */}
  </Container>
)

export default ApartmentCard
