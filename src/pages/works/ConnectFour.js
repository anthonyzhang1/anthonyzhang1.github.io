import { Link } from 'react-router-dom';
import CaptionedImage from '../../components/CaptionedImage.js';
import CaptionedVideo from '../../components/CaptionedVideo.js';

/** Displays the Connect Four work page, which contains a cover image, links, a description of the application,
 *  and multiple images with captions. */
export default function ConnectFour() {
  return (
    <div className='connect-four-p work-p page-content'>
      <h1 className='page-title'>Connect Four</h1>
      <img className='cover' src='/images/works/connect-four/cover.png' alt="Connect Four" />

      {/* GitHub Repository Link */}
      <h3 className='large-url'>
        GitHub Repository:&nbsp;<wbr />
        <Link className='undecorated-link' to='https://github.com/anthonyzhang1/Connect-Four' target="_blank" rel="noopener noreferrer">
          https://github.com/anthonyzhang1/Connect-Four
        </Link>
      </h3>

      {/* Synopsis */}
      <h2 className='section-title'>Synopsis</h2>
      <p className='section-body'>
        Connect Four with a graphical user interface. You can play against yourself or a friend next to you.<br /><br />

        To win, connect 4 tokens of your colour in a row while preventing your opponent from doing the same.<br />
        You may form rows horizontally, vertically, or diagonally.<br/><br/>
        
        Install the game&nbsp;
        <Link className='undecorated-link' to='https://github.com/anthonyzhang1/Connect-Four/blob/main/README.md#installing-the-game'
         target="_blank" rel="noopener noreferrer">here</Link> by following the instructions in the "Installing the Game" section.
      </p>

      {/* Additional Information */}
      <h2 className='section-title'>Additional Information</h2>
      <p className='section-body'>
        I started this project to get more familiar with creating GUIs and to build on what I learned from my last project,&nbsp;
        <Link className='undecorated-link' to='/works/tic-tac-toe' target="_blank" rel="noopener noreferrer">Tic-tac-toe</Link>.<br /><br />

        This project is written in Python and uses tkinter for the graphics, and pytest for testing.<br />
        Its development started on 2023-08.<br /><br />
      </p>

      {/* Media */}
      <h2 className='section-title'>Media</h2>
      {/* Demo Video */}
      <CaptionedVideo
        caption='A gameplay demo.'
        path='/images/works/connect-four/demo.mp4'
      />

      {/* New Game */}
      <CaptionedImage
        altText='A new game.'
        caption='Starting a game.'
        imagePath='/images/works/connect-four/new-game.png'
      />

      {/* Won Game */}
      <CaptionedImage
        altText='A won game.'
        caption='Winning a game.'
        imagePath='/images/works/connect-four/won-game.png'
      />

      {/* Tied Game */}
      <CaptionedImage
        altText='A tied game.'
        caption='Tying a game.'
        imagePath='/images/works/connect-four/tied-game.png'
      />

      <p className='page-last-updated'>Page last updated on 2025-06-08.</p>
    </div>
  );
}