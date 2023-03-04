import { Col, Row } from "react-bootstrap";
//import WorkCard from "../components/WorkCard.js";

/** Displays the Home page, which contains a brief intro and some featured works. */
export default function Home() {
  // TODO: Fill the array
  /** The work cards that will be displayed on the page. The most featured elements should be first. */
  const workCards = [];

  return (
    <div className='home-p page-content'>
      <h1 className='page-title'>Anthony Zhang</h1>
      <p>
        I am a Computer Science graduate, and this website contains a number of projects I have worked on. <br />
        Learn more about me through the links in the navigation bar above!
      </p>

      <h3 className='featured-works'>Featured Works</h3>
      <p>Coming soon... 🙏</p>
      
      {/* Each card is mapped onto a grid with 2 columns in each row. */}
      <Row className='g-4' xs={1} md={2}>
        {workCards.map((card, index) => <Col key={index}>{card}</Col>)}
      </Row>
    </div>
  );
}