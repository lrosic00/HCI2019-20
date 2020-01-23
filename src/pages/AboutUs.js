import React from "react"
import Layout from "../components/layout"
import Container from "react-bootstrap/Container"
import style from "../styles/about.module.css"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Card from "react-bootstrap/Card"
import avatar1 from "../images/avatar1.svg"
import avatar2 from "../images/avatar2.svg"
import CardDeck from "react-bootstrap/CardDeck"

const AboutUs = () => (
  <Layout activePage="./AboutUs">
    <div className={style.imageBanner}>
      <Container>
        <Row>
          <Col md={12}>
            <h1 className={style.lgText}>About Us</h1>
            <p style={{ color: "#fff" }}>
              CR Group has been largest growing company since the second quarter
              of 2019.
            </p>
          </Col>
        </Row>
      </Container>
    </div>

    <div className={style.section}>
      <Container>
        <Row>
          <Col md={6}>
            <h1>
              Who we are and
              <br />
              what we do
            </h1>
            <p>
              This is the world's leading portal for
              <br />
              easy and quick rental services
            </p>
          </Col>
          <Col md={6}>
            <p>
              CR Group is one of the leading real estate companies in Croatia.
              We offer a complete portfolio of real estate services including
              sales and leasing of residential and commercial properties. We
              conduct research studies and valuations surveys upon request.
            </p>
            <p>
              CR Group was founded by 2 young ambitious inviduals in 2015 with a
              goal of bringing renting services to the majority and making them
              easy to use for a large number of people of any age & computer
              knowledge
            </p>
          </Col>
        </Row>
      </Container>
    </div>
    <Container className={style.section}>
      <Row>
        <div className={(style.siteHeading, "text-center")}>
          <h3>Our Team</h3>
          <p>
            At this moment we're hiring, we're looking for young ambitious folks
            so if you see yourself <br /> as a potential part of the team, make
            sure you drop by
          </p>
          <div className={style.border}></div>
        </div>
      </Row>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={avatar1} />
          <Card.Body>
            <Card.Title>Petar Caleta CEO</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={avatar2} />
          <Card.Body>
            <Card.Title>Luka Rosic CEO</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  </Layout>
)

export default AboutUs
