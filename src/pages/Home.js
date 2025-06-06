import { Col, Row } from "react-bootstrap";
import WorkCard from "../components/WorkCard.js";

/** Displays the Home page, which contains a brief intro and some featured works. */
export default function Home() {
  /** The work cards that will be displayed on the page. The most featured elements should be first. */
  const workCards = [
    /* Gatormmunity, Fall 2022 */
    <WorkCard cardImage='/images/works/gatormmunity/cover.png'
      description='A social networking site and marketplace for San Francisco State University!'
      link='/works/gatormmunity' title='Gatormmunity'
    />,

    /* Hitoribocchi, Fall 2022 */
    <WorkCard cardImage='/images/works/hitoribocchi/cover.png'
      description='An iOS flashcard app for memorizing with spaced repetition.' link='/works/hitoribocchi' title='Hitoribocchi'
    />,

    /* Connect Four, 2023-08 */
    <WorkCard cardImage='/images/works/connect-four/cover.png' description='Connect Four with a GUI.'
      link='/works/connect-four' title='Connect Four'
    />,
  ];

  return (
    <div className='home-p page-content'>
      <h1 className='page-title'>Anthony Zhang</h1>
      <p>
        This website contains my works. Learn more about me through the links above!<br />
        Featured below are the works I think are the most interesting.
      </p>

      <h2 className='featured-works'>Featured Works</h2>
      {/* Each card is mapped onto a grid with 1-3 columns in each row, depending on screen width. */}
      <Row className='g-4' xs={1} sm={2} xl={3}>
        {workCards.map((card, index) => <Col key={index}>{card}</Col>)}
      </Row>
    </div>
  );
}