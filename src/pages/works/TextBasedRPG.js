import { Link } from 'react-router-dom';
import CaptionedImage from '../../components/CaptionedImage.js';

/** Displays the Text-Based RPG work page, which contains a cover image, links, a description of the application,
 *  and multiple images with captions. */
export default function TextBasedRPG() {
  return (
    <div className='text-based-rpg-p work-p page-content'>
      <h1 className='page-title'>Text-Based RPG</h1>
      <img className='cover' src='/media/works/text-based-rpg/cover.png' alt="Text-based RPG" />

      {/* GitHub repository link */}
      <h3 className='large-url'>
        GitHub Repository:&nbsp;<wbr />
        <Link className='undecorated-link' to='https://github.com/anthonyzhang1/Text-Based-RPG' target="_blank" rel="noopener noreferrer">
          https://github.com/anthonyzhang1/Text-Based-RPG
        </Link>
      </h3>

      {/* Synopsis */}
      <h2 className='section-title'>Synopsis</h2>
      <p className='section-body'>
        A text-based RPG (role-playing game) created in March 2020. The game is coded entirely in Java. <br />
        There is little content and no story -- the game is barely a game.
        All there is to do is to fight increasingly strong enemies and watch your stats grow. <br /><br />

        Also, there is no way to save your game.
      </p>

      {/* Images */}
      <h2 className='section-title'>Images</h2>

      {/* Combat image */}
      <CaptionedImage
        altText='combat'
        caption='Fighting and slaying a mouse, then leveling up.'
        imagePath='/media/works/text-based-rpg/combat.png'
      />

      {/* Shop image */}
      <CaptionedImage
        altText='shopping'
        caption='Entering the shop and buying an item.'
        imagePath='/media/works/text-based-rpg/shop.png'
      />

      {/* Stats image */}
      <CaptionedImage
        altText='character stats'
        caption='Examining your own stats.'
        imagePath='/media/works/text-based-rpg/stats.png'
      />

      <p className='page-last-updated'>Page Last Updated: March 04, 2023</p>
    </div>
  );
}