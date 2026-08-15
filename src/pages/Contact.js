import { Link } from 'react-router-dom';

/** Displays the Contact page, which shows Anthony's contact information. */
export default function Contact() {
  return (
    <div className='contact-p page-content'>
      <h1 className='page-title'>Contact Anthony</h1>

      {/* Email */}
      <p>
        <img className='icon' src='/media/assets/envelope-icon.png' alt='email icon' />
        anthony.zhang56@gmail.com
      </p>

      {/* LinkedIn */}
      <Link className='link' to='https://linkedin.com/in/zhang-anthony' target="_blank" rel="noopener noreferrer">
        <img className='icon' src='/media/assets/linkedin-icon.png' alt='LinkedIn icon' />
        LinkedIn
      </Link>

      {/* GitHub */}
      <Link className='link' to='https://github.com/anthonyzhang1' target="_blank" rel="noopener noreferrer">
        <img className='icon' src='/media/assets/github-icon.svg' alt='GitHub icon' />
        GitHub
      </Link>
    </div>
  );
}