import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

/**
 * A card that shows an image of the work, its title, and its description.
 * The card can be clicked on to go to the work's page.
 * 
 * @prop {string} link The URL to the work on Anthony's website.
 * @prop {string} cardImage The path to the image of the work.
 * @prop {string} title The title of the work.
 * @prop {string} description A short description of the work.
 */
export default function WorkCard(props) {
  const { link, cardImage, title, description } = props;
  const navigate = useNavigate();

  return (
    // Clicking on the card takes the user to the work's page.
    <Card className='work-card-c' onClick={() => navigate(link)}>
      <Card.Img src={cardImage} />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}