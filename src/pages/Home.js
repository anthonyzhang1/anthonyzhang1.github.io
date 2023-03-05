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
      description='An iOS flashcard app that uses a spaced repetition system and was heavily inspired by Anki.'
      link='/works/hitoribocchi' title='Hitoribocchi'
    />,

    /* Anthony Zhang's Website, March 2023 */
    <WorkCard cardImage='/images/works/anthony-zhang-website/cover.png' description='A website for showing my works~'
      link='/works/anthony-zhang-website' title="Anthony Zhang's Website"
    />,
  ];

  return (
    <div className='home-p page-content'>
      <h1 className='page-title'>Anthony Zhang</h1>
      <p>
        I am a Computer Science graduate, and this website contains a number of projects I have worked on. <br />
        Learn more about me through the links in the navigation bar above!
      </p>

      <h2 className='featured-works'>Featured Works</h2>
      {/* Each card is mapped onto a grid with 1-3 columns in each row, depending on screen width. */}
      <Row className='g-4' xs={1} sm={2} xl={3}>
        {workCards.map((card, index) => <Col key={index}>{card}</Col>)}
      </Row>
    </div>
  );
}