import { Col, Row } from "react-bootstrap";
import WorkCard from "../components/WorkCard.js";

/** Displays the Works page, which shows cards of Anthony's works.
 *  Each work has their own page, accessible by clicking on the work's card. */
export default function Works() {
  /** The work cards that will be displayed on the page. */
  const workCards = [
    <WorkCard link='/work/rrat' cardImage='/images/works/placeholder.jpg' title='Atelier Puni' description='This is a puni!' />,
    <WorkCard link='/work/rrat' cardImage='/images/works/placeholder.jpg' title='Atelier Puni' description='This is a puni!' />,
    <WorkCard link='/work/rrat' cardImage='/images/works/placeholder.jpg' title='Atelier Puni' description='This is a puni!' />,
    <WorkCard link='/work/rrat' cardImage='/images/works/placeholder.jpg' title='Atelier Puni' description='This is a puni!' />,
    <WorkCard link='/work/rrat' cardImage='/images/works/placeholder.jpg' title='Atelier Puni' description='This is a puni!' />,
    <WorkCard link='/work/rrat' cardImage='/images/works/placeholder.jpg' title='Atelier Puni' description='This is a puni!' />,
  ];

  return (
    <div className='works-p page-content'>
      <h1 className='page-title'>Anthony's Works~</h1>
      <p className='description'>Here are a few of the projects I have worked on. Click on a work's card to learn more about it.</p>

      {/* Each card is mapped onto a grid with 2 columns in each row. */}
      <Row className='g-4' xs={1} md={2}>
        {workCards.map((card, index) => <Col key={index}>{card}</Col>)}
      </Row>
    </div>
  );
}