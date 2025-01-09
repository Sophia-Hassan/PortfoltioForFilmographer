import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import ContactMe from "./ContactMe";

import {motion,useInView} from 'motion/react'


const Cform = {
  initial: {x:-100, opacity :0},

       animate:{ x:0, opacity :1},

       transition:{duration:1, staggerChildren: 0.2},
      
}

const Contact = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      import.meta.env.VITE_YOUR_SERVICE_ID, 
      import.meta.env.VITE_YOUR_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_YOUR_PUBLIC_KEY 
    )
    .then(
      () => {
        setSuccess(true);
        setError(false);
      },
      (error) => {
        console.log(error);
        setError(true);
        setSuccess(false);
      }
    );
  };
  const ref = useRef();
 
  const isInView = useInView(ref,{margin:'-200px'});
  
  
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <Container fluid>  
        <Row>
          <Col>
            <div className="left w-100">
              
              <motion.Form className="w-75"  ref={ref} onSubmit={sendEmail}  variants={Cform} animate= {isInView?"animate" : "initial"} >
              <Form.Group className="mb-3" >
                  <Form.Label>Your name</Form.Label>
                  <Form.Control type="name" placeholder="John Doe"  name="username" />
                </Form.Group>
                <Form.Group className="mb-3" >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="useremail"/>
                  <Form.Text className="text-muted">
                    we will never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

            
              
                <Form.Group
                  className="mb-3"
                 
                >
                  <Form.Label>Example textare</Form.Label>
                  <Form.Control as="textarea" rows={3} name='usermessage'/>
                </Form.Group>
                <Button  type="submit" className="m-auto btn">
                  Submit
                </Button>
              </motion.Form>
              {success && <span> message sent!</span>}
              {error && <span> message not sent!</span>}
            </div>
          </Col>

         
        </Row>
        <Row>
        <div className="right">
               <ContactMe />
                       
                </div>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
