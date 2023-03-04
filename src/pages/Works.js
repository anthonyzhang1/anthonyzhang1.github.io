import { Col, Row } from "react-bootstrap";
import WorkCard from "../components/WorkCard.js";

/** Displays the Works page, which shows cards of Anthony's works.
 *  Each work has their own page, accessible by clicking on the work's card. */
export default function Works() {
  /** The work cards that will be displayed on the page. The elements should be ordered from newest to oldest. */
  const workCards = [
    /* Anthony's Website, March 2023 */
    <WorkCard cardImage='/images/works/placeholder.jpg' description='A website for showing my projects~'
      link='/work/anthony-website' title="Anthony's Website [WIP]"
    />,

    /* Gatormmunity, Fall 2022 */
    <WorkCard cardImage='/images/works/gatormmunity/cover.png'
      description='A social networking site and marketplace for San Francisco State University!'
      link='/work/gatormmunity' title='Gatormmunity'
    />,

    /* Hitoribocchi */
    <WorkCard cardImage='/images/works/placeholder.jpg'
      description='An iOS flashcard app that uses a spaced repetition system and was heavily inspired by Anki.'
      link='/work/hitoribocchi' title='Hitoribocchi [WIP]'
    />,

    /* rratchan */
    <WorkCard cardImage='/images/works/placeholder.jpg' description='A 4channel-esque imageboard.'
      link='/work/rratchan' title='rratchan [WIP]'
    />,

    /* C File System */
    <WorkCard cardImage='/images/works/placeholder.jpg' description='A basic file system written in C.'
      link='/work/c-file-system' title='C File System [WIP]'
    />,

    /* My Photo Website */
    <WorkCard cardImage='/images/works/placeholder.jpg' description='A photo sharing website similar to Imgur.'
      link='/work/my-photo-website' title='My Photo Website [WIP]'
    />,

    /* Moneyish, Fall 2021 */
    <WorkCard cardImage='/images/works/moneyish/cover.png' description='A mock online payment website similar to Venmo.'
      link='/work/moneyish' title='Moneyish'
    />,

    /* Text-Based RPG, March 2020 */
    <WorkCard cardImage='/images/works/text-based-rpg/cover.png' description='A text-based RPG written in Java.'
      link='/work/text-based-rpg' title='Text-Based RPG'
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