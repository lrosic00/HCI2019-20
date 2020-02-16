import React from "react"
import Layout from "../components/layout"
import style from "../styles/contactStyle.module.css"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

const Contact = () => (
  <Layout activePage="./Contact">
    <Container className={style.container}>
      <ul>
        <Form>
          <span>Contact us</span>

          <li>
            <p>Send us a message and we'll respond as soon as possible</p>
          </li>
          <li>
            <Form.Label>Your name*</Form.Label>
          </li>
          <li>
            <Form.Control size="lg" />
          </li>
          <Form.Group controlId="formBasicEmail">
            <li>
              <Form.Label>Email address*</Form.Label>

              <Form.Control size="lg" type="email" />
            </li>
          </Form.Group>

          <li>
            <Form.Label>Message*</Form.Label>
          </li>
          <li>
            <Form.Control size="lg" as="textarea" rows="10" />
          </li>
          <li>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={
                <Tooltip id="requiredid">Not yet implemented, sorry!</Tooltip>
              }
            >
              <Button
                size="lg"
                variant="primary"
                type="submit"
                style={{ width: "100%", marginTop: "1.5rem" }}
              >
                SEND MESSAGE
              </Button>
            </OverlayTrigger>
          </li>
        </Form>
      </ul>
    </Container>
  </Layout>
)
export default Contact
