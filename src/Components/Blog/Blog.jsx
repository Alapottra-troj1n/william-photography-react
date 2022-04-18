import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
        <h2 className="text-center fs-1 fw-bold my-5">Blog Post Q/A </h2>
      <div className="container my-5">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Difference between authorization and authentication ?</Accordion.Header>
            <Accordion.Body>
              Authorization is simply to determine a user's capabilities to access certain or speficied content, file, application or features. For example a website's admin will have access to everything from frontend to backend while a normal user will have less access or less authorization. While Authentication is about verifying a user's identification.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
            <Accordion.Body>
              The reason I am using firebase for authentication is because I find it very easy to implement and is backed by very renowned tech company called Google. Thus making it one of the most secure and dev friendly authentication methods available and also it is free. Yes, there are other options to implement authentication such as Auth0, OneLogin, Ping Identity etc
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
            <Accordion.Body>
              Firebase is a total backend solution provided by Google. There are other services Firebase offers other than authentication. Such as Realtime Database, Database, Analytic Tools, Hosting, Cloud Storage, Cloud Functions and much more.
            </Accordion.Body>
          </Accordion.Item>


        </Accordion>


      </div>
    </div>
  );
};

export default Blog;
