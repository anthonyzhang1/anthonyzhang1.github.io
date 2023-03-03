import { Link } from 'react-router-dom';

/** Displays the Contact page, which shows Anthony's contact information. */
export default function Contact() {
  return (
    <div className='contact-p page-content'>
      <h1 className='page-title'>Contact Anthony!</h1>

      {/* My email, which is just plaintext. */}
      <p>
        <img className='icon' src='/images/assets/envelope-icon.png' alt='email icon' />
        anthony.zhang56@gmail.com
      </p>

      {/* My GitHub profile, which is a clickable link that opens in a new tab. */}
      <Link className='link' to='https://github.com/anthonyzhang1' target="_blank" rel="noopener noreferrer">
        <img className='icon' src='/images/assets/github-icon.svg' alt='GitHub icon' />
        anthonyzhang1
      </Link>
    </div>
  );
}