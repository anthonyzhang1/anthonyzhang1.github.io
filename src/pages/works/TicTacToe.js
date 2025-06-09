import { Link } from 'react-router-dom';
import CaptionedImage from '../../components/CaptionedImage.js';

/** Displays the Tic-tac-toe work page, which contains a cover image, links, a description of the application,
 *  and multiple images with captions. */
export default function TicTacToe() {
  return (
    <div className='tic-tac-toe-p work-p page-content'>
      <h1 className='page-title'>Tic-tac-toe</h1>
      <img className='cover' src='/media/works/tic-tac-toe/cover.png' alt="Tic-tac-toe" />

      {/* GitHub Repository Link */}
      <h3 className='large-url'>
        GitHub Repository:&nbsp;<wbr />
        <Link className='undecorated-link' to='https://github.com/anthonyzhang1/Tic-tac-toe' target="_blank" rel="noopener noreferrer">
          https://github.com/anthonyzhang1/Tic-tac-toe
        </Link>
      </h3>

      {/* Synopsis */}
      <h2 className='section-title'>Synopsis</h2>
      <p className='section-body'>
        Tic-tac-toe with a graphical user interface. The game is playable with 1 or 2 players using a mouse. <br />
        This guide was used to make the game:&nbsp;<wbr />
          <Link className='undecorated-link' to='https://realpython.com/tic-tac-toe-python/' target="_blank" rel="noopener noreferrer">
            https://realpython.com/tic-tac-toe-python/
          </Link><br /><br />

        The objective of the game is to get 3 of your pieces in a horizontal, vertical, or diagonal row.
      </p>

      {/* Additional Information */}
      <h2 className='section-title'>Additional Information</h2>
      <p className='section-body'>
        The game is written in Python, and tkinter is used for the graphical user interface. <br />
        This project was created in July 2023. <br /><br />

        I started this project to get better with Python, and to learn how to work with GUIs on a basic level. <br />
        Further, I can use what I learned here to make more complex games such as Connect Four.
      </p>

      {/* Images */}
      <h2 className='section-title'>Images</h2>

      {/* New Game */}
      <CaptionedImage
        altText='A new game.'
        caption='What a new game looks like.'
        imagePath='/media/works/tic-tac-toe/new-game.png'
      />

      {/* Won Game */}
      <CaptionedImage
        altText='A won game.'
        caption='What a victory looks like.'
        imagePath='/media/works/tic-tac-toe/won-game.png'
      />

      {/* Tied Game */}
      <CaptionedImage
        altText='A tied game.'
        caption='What a tie looks like.'
        imagePath='/media/works/tic-tac-toe/tied-game.png'
      />

      <p className='page-last-updated'>Page Last Updated: August 07, 2023</p>
    </div>
  );
}