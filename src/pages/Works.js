import { Col, Row } from "react-bootstrap";
import WorkCard from "../components/WorkCard.js";

/** Displays the Works page, which shows cards of Anthony's works.
 *  Each work has their own page, accessible by clicking on the work's card. */
export default function Works() {
  /** The work cards that will be displayed on the page. The elements should be ordered from newest to oldest. */
  const workCards = [
    /* Connect Four, 2023-08 */
    <WorkCard cardImage='/media/works/connect-four/cover.png' description='Connect Four with a GUI.'
      link='/works/connect-four' title='Connect Four'
    />,

    /* Tic-tac-toe, 2023-07 */
    <WorkCard cardImage='/media/works/tic-tac-toe/cover.png' description='Tic-tac-toe with a GUI.'
      link='/works/tic-tac-toe' title='Tic-tac-toe'
    />,

    /* Anthony Zhang's Website, 2023-03 */
    <WorkCard cardImage='/media/works/anthony-zhang-website/cover.png' description='A website for showing my works~'
      link='/works/anthony-zhang-website' title="Anthony Zhang's Website"
    />,

    /* Gatormmunity, Fall 2022 */
    <WorkCard cardImage='/media/works/gatormmunity/cover.png'
      description='A social networking site and marketplace for San Francisco State University!'
      link='/works/gatormmunity' title='Gatormmunity'
    />,

    /* Hitoribocchi, Fall 2022 */
    <WorkCard cardImage='/media/works/hitoribocchi/cover.png'
      description='An iOS flashcard app for memorizing with spaced repetition.' link='/works/hitoribocchi' title='Hitoribocchi'
    />,

    /* rratchan, Spring 2022 */
    <WorkCard cardImage='/media/works/rratchan/cover.png' description='A 4channel-esque imageboard.'
      link='/works/rratchan' title='rratchan'
    />,

    /* C File System, Fall 2021 */
    <WorkCard cardImage='/media/works/c-file-system/cover.png' description='A basic file system written in C.'
      link='/works/c-file-system' title='C File System'
    />,

    /* My Photo Website, Fall 2021 */
    <WorkCard cardImage='/media/works/my-photo-website/cover.png' description='A photo sharing website similar to Imgur.'
      link='/works/my-photo-website' title='My Photo Website'
    />,

    /* Moneyish, Fall 2021 */
    <WorkCard cardImage='/media/works/moneyish/cover.png' description='A mock online payment website similar to Venmo.'
      link='/works/moneyish' title='Moneyish'
    />,

    /* Text-Based RPG, March 2020 */
    <WorkCard cardImage='/media/works/text-based-rpg/cover.png' description='A text-based RPG written in Java.'
      link='/works/text-based-rpg' title='Text-Based RPG'
    />
  ];

  return (
    <div className='works-p page-content'>
      <h1 className='page-title'>Anthony's Works</h1>
      <p className='description'>The publicly available projects I have worked on, from newest to oldest.</p>

      {/* Each card is mapped onto a grid with 1-3 columns in each row, depending on screen width. */}
      <Row className='g-4' xs={1} sm={2} xl={3}>
        {workCards.map((card, index) => <Col key={index}>{card}</Col>)}
      </Row>
    </div>
  );
}