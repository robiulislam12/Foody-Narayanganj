import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Blog() {
  return (
    <div className="my-5 py-5">
      <h2 className="text-center subtitle">Our Blogs</h2>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <Card.Img variant="top" src="https://livedemo00.template-help.com/wt_61177_v1/images/post-04-570x321.jpg" />
            <Card.Body>
              <Card.Title>The History of Sandwiches</Card.Title>
              <Card.Text>
              At the very least, everyone has probably heard the name of the fourth Earl of Sandwich (born John Montagu), the British statesman whose name is forever affixed to our favorite lunchtime staple. 
              </Card.Text>
              <Button className="mt-1">Read More</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 2 days ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-4">
        <Card>
            <Card.Img variant="top" src="https://livedemo00.template-help.com/wt_61177_v1/images/post-07-546x321.jpg" />
            <Card.Body>
              <Card.Title>Making Tasty Turkey Burgers</Card.Title>
              <Card.Text>
              At the very least, everyone has probably heard the name of the fourth Earl of Sandwich (born John Montagu), the British statesman whose name is forever affixed to our favorite lunchtime staple.
              </Card.Text>
              <Button className="mt-1">Read More</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 days ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col-md-4">
        <Card>
            <Card.Img variant="top" src="https://livedemo00.template-help.com/wt_61177_v1/images/blog-grid-4-570x321.jpg" />
            <Card.Body>
              <Card.Title>Interesting Facts About Pizza</Card.Title>
              <Card.Text>
              At the very least, everyone has probably heard the name of the fourth Earl of Sandwich (born John Montagu), the British statesman whose name is forever affixed to our favorite lunchtime staple.
              </Card.Text>
              <Button className="mt-1">Read More</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 5 days ago</small>
            </Card.Footer>
          </Card>
        </div>
      </div>
      
    </div>
  );
}
