import { Link } from 'react-router-dom';
import CaptionedImage from '../../components/CaptionedImage.js';

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
        {/* TODO: Write synopsis: use GitHub README and release, state game objective, etc. */}
      </p>

      {/* Additional Information */}
      <h2 className='section-title'>Additional Information</h2>
      <p className='section-body'>
        {/* TODO: Write technical details, start date, motivations, etc.  */}
        {/* The game is written in Python. tkinter is used for the graphical user interface, and pytest is used for testing.
            This project was created on 2023-08. */}
      </p>

      {/* Images */}
      <h2 className='section-title'>Images</h2>
      {/* TODO: Add images */}

      <p className='page-last-updated'>Page Last Updated: June 06, 2025</p>
    </div>
  );
}