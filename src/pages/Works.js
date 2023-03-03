import { Col, Row } from "react-bootstrap";
import WorkCard from "../components/WorkCard.js";

/** Displays the Works page, which shows cards of Anthony's works.
 *  Each work has their own page, accessible by clicking on the work's card. */
export default function Works() {
  /** The work cards that will be displayed on the page. The elements are ordered from newest to oldest. */
  const workCards = [
    <WorkCard link='/work/anthony-website' cardImage='/images/works/placeholder.jpg' title="Anthony's Website [WIP]"
      description='A website for showing my projects~'
    />,
    <WorkCard link='/work/gatormmunity' cardImage='/images/works/gatormmunity/card-image.png' title='Gatormmunity [WIP]'
      description='A social networking site and marketplace for San Francisco State University!'
    />,
    <WorkCard link='/work/hitoribocchi' cardImage='/images/works/placeholder.jpg' title='Hitoribocchi [WIP]'
      description='An iOS flashcard app that uses a spaced repetition system and was heavily inspired by Anki.'
    />,
    <WorkCard link='/work/rratchan' cardImage='/images/works/placeholder.jpg' title='rratchan [WIP]'
      description='A 4channel-esque imageboard.'
    />,
    <WorkCard link='/work/c-file-system' cardImage='/images/works/placeholder.jpg' title='C File System [WIP]'
      description='A basic file system written in C.'
    />,
    <WorkCard link='/work/my-photo-website' cardImage='/images/works/placeholder.jpg' title='My Photo Website [WIP]'
      description='A photo sharing website similar to Imgur.'
    />,
    <WorkCard link='/work/moneyish' cardImage='/images/works/placeholder.jpg' title='Moneyish [WIP]'
      description='A mock online payment website similar to Venmo.'
    />,
    <WorkCard link='/work/text-based-rpg' cardImage='/images/works/placeholder.jpg' title='Text-Based RPG [WIP]'
      description='A text-based RPG written in Java.'
    />
  ];

  return (
    <div className='works-p page-content'>
      <h1 className='page-title'>Anthony's Works~</h1>
      <p className='description'>Here are a few of the projects I have worked on, ordered from newest to oldest.</p>

      {/* Each card is mapped onto a grid with 2 columns in each row. */}
      <Row className='g-4' xs={1} md={2}>
        {workCards.map((card, index) => <Col key={index}>{card}</Col>)}
      </Row>
    </div>
  );
}