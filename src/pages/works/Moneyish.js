import { Link } from 'react-router-dom';
import CaptionedImage from '../../components/CaptionedImage.js';

/** Displays the Moneyish work page, which contains a cover image, links, a description of the application,
 *  and multiple images with captions. */
export default function Moneyish() {
  return (
    <div className='moneyish-p work-p page-content'>
      <h1 className='page-title'>Moneyish</h1>
      <img className='cover' src='/media/works/moneyish/cover.png' alt="Moneyish" />

      {/* GitHub repository link */}
      <h3 className='large-url'>
        GitHub Repository:&nbsp;<wbr />
        <Link className='undecorated-link' to='https://github.com/anthonyzhang1/Moneyish' target="_blank" rel="noopener noreferrer">
          https://github.com/anthonyzhang1/Moneyish
        </Link>
      </h3>

      {/* Synopsis */}
      <h2 className='section-title'>Synopsis</h2>
      <p className='section-body'>
        Moneyish is a mock online payment website similar to Venmo. Real money is not used. <br />
        Moneyish allows for users to create accounts, add and withdraw funds from their account balance,
        send/pay money to other users, and view one's payment history.
        There is also a live feed of payments other users have made, if they choose to make the payment public.
      </p>

      {/* Additional Information */}
      <h2 className='section-title'>Additional Information</h2>
      <p className='section-body'>
        Moneyish uses Java for the back end, MongoDB for the database, and React for the front end. <br /><br />

        Moneyish was created for my university's Software Development course in Fall 2021,
        where I worked on the application with another student. <br />
        I worked mostly on the back end, while my partner worked mostly on the front end.
        We made a decent team, I think. <br />
        
        My partner has written their own article on Moneyish here:&nbsp;<wbr />
        <Link className='undecorated-link' to='https://iampjc.com/portfolio-item4.html' target="_blank" rel="noopener noreferrer">
          https://iampjc.com/portfolio-item4.html
        </Link>
        . <br /><br />

        We did not use cookies or sessions to remember logins.
      </p>

      {/* Images */}
      <h2 className='section-title'>Images</h2>

      {/* Home Page image */}
      <CaptionedImage
        altText='Home Page'
        caption={
          `The home page, where users can log in, sign up, and view a list of public transactions.
          Private transactions are not shown here.`
        }
        imagePath='/media/works/moneyish/home.png'
      />

      {/* Check Balance Page image */}
      <CaptionedImage
        altText='Check Balance Page'
        caption='Users can check their account balance.'
        imagePath='/media/works/moneyish/check-balance.png'
      />

      {/* Manage Balance Page image */}
      <CaptionedImage
        altText='Manage Balance Page'
        caption={
          `Users can deposit or withdraw funds from their Moneyish account through their credit card.
          Since Moneyish is a mock website, it does not actually use anyone's credit card.`
        }
        imagePath='/media/works/moneyish/manage-balance.png'
      />

      {/* Send Money Page image */}
      <CaptionedImage
        altText='Send Money Page'
        caption={
          `Users can send money to other users using their Moneyish account balance, credit card, or through money order.
          Transactions can be made private or public, and a note can be attached to the payment.`
        }
        imagePath='/media/works/moneyish/send-money.png'
      />

      {/* Check Transactions Page image */}
      <CaptionedImage
        altText='Check Transactions Page'
        caption='Users can check their transaction history.'
        imagePath='/media/works/moneyish/check-transactions.png'
      />

      <p className='page-last-updated'>Page Last Updated: March 03, 2023</p>
    </div>
  );
}