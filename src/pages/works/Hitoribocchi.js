import { Link } from 'react-router-dom';
import CaptionedImage from '../../components/CaptionedImage.js';

/** Displays the Hitoribocchi work page, which contains a cover image, links, a description of the application,
 *  and multiple images with captions. */
export default function Hitoribocchi() {
  return (
    <div className='hitoribocchi-p work-p page-content'>
      <h1 className='page-title'>Hitoribocchi</h1>
      <img className='cover' src='/images/works/hitoribocchi/cover.png' alt="Hitoribocchi" />

      {/* GitHub repository link */}
      <h3 className='large-url'>
        GitHub Repository:&nbsp;<wbr />
        <Link className='undecorated-link' to='https://github.com/anthonyzhang1/Hitoribocchi' target="_blank" rel="noopener noreferrer">
          https://github.com/anthonyzhang1/Hitoribocchi
        </Link>
      </h3>

      {/* Synopsis */}
      <h2 className='section-title'>Synopsis</h2>
      <p className='section-body'>
        Hitoribocchi (一人ぼっち) is an iOS flashcard application that uses a spaced repetition system
        and was very heavily inspired by Anki. <br />
        You can create flashcard decks, create flashcards of different types (e.g. basic or multiple choice), delete flashcards,
        search for flashcards, review flashcards, and maybe more. <br /><br />

        Spaced repetition is a learning technique where newly introduced and more difficult flashcards
        are shown more frequently, while older and less difficult flashcards are shown less frequently in order to exploit
        the psychological spacing effect, according to Wikipedia.
      </p>

      {/* Additional Information */}
      <h2 className='section-title'>Additional Information</h2>
      <p className='section-body'>
        Hitoribocchi uses Swift, UIKit, and Core Data. Core Data is used to store the decks/cards and their metadata,
        e.g. their due dates. <br />
        Hitoribocchi was created for my university's iOS Application Development course in Fall 2022. <br /><br />

        Hitoribocchi can mean "aloneness", "loneliness", or "solitude".
      </p>

      {/* Images */}
      <h2 className='section-title'>Images</h2>

      {/* Decks image */}
      <CaptionedImage
        altText='Decks'
        caption='Flashcard decks can be created and deleted in the Decks screen.'
        imagePath='/images/works/hitoribocchi/decks.png'
      />

      {/* Create Card image */}
      <CaptionedImage
        altText='Create Card'
        caption='Here is a multiple choice card being created. There are other types of flashcards that can be created too.'
        imagePath='/images/works/hitoribocchi/create-card.png'
      />

      {/* Basic Card Prompt image */}
      <CaptionedImage
        altText='Basic Card Prompt'
        caption="You can review your due flashcards. Here is a basic flashcard's prompt."
        imagePath='/images/works/hitoribocchi/basic-prompt.png'
      />

      {/* Basic Card Solution image */}
      <CaptionedImage
        altText='Basic Card Solution'
        caption={
          `The answer to a basic flashcard can be revealed by tapping the screen.
          You then determine when the card will be shown again by tapping one of the buttons on the bottom: \
          the harder the answer was to recall, the sooner you should have it due.`
        }
        imagePath='/images/works/hitoribocchi/basic-solution.png'
      />

      {/* True/False Card Prompt image */}
      <CaptionedImage
        altText='True/False Card Prompt'
        caption={
          `Here is a true/false card's prompt. Pressing the wrong answer makes the card due sooner, \
          whereas getting it right makes it due later.`
        }
        imagePath='/images/works/hitoribocchi/true-false-prompt.png'
      />

      {/* Multiple Choice Card Prompt image */}
      <CaptionedImage
        altText='Multiple Choice Card Prompt'
        caption={
          `Here is a multiple choice card's prompt. Pressing the wrong answer makes the card due sooner, \
          whereas getting it right makes it due later.`
        }
        imagePath='/images/works/hitoribocchi/multiple-choice-prompt.png'
      />

      {/* Card Search image */}
      <CaptionedImage
        altText='Card Search'
        caption={
          `You can search for a particular flashcard in the search screen. \
          Tapping one of the search results shows that card's details.`
        }
        imagePath='/images/works/hitoribocchi/search.png'
      />

      {/* Card Details image */}
      <CaptionedImage
        altText='Card Details'
        caption={
          `You can view a card's details such as when it was created, when it is due, and your proficiency with the card. \
          Larger next due date multipliers indicate greater proficiency.`
        }
        imagePath='/images/works/hitoribocchi/card-details.png'
      />

      <p className='page-last-updated'>Page Last Updated: March 04, 2023</p>
    </div>
  );
}