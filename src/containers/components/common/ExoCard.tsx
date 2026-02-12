import {Card} from "react-bootstrap";
import type {ExoCardType} from "../../../types/types.ts";

const ExoCard = (exoCard:ExoCardType) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={exoCard.cardImagePath} />
            <Card.Body>
                <Card.Title>{exoCard.cardTitle}</Card.Title>
                <Card.Text>
                    {exoCard.cardDescription}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default ExoCard;