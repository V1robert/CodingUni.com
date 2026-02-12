import {Button, Card} from "react-bootstrap"
import type {ExoCardType} from "../../../types/types.ts"

const ExoCard = (exoCard: ExoCardType) => {
    return (
        <Card
            className="h-100 d-flex flex-column shadow-sm rounded-2 mx-auto"
            style={{maxWidth: "320px"}}   // bigger than before
        >
            <Card.Img
                variant="top"
                src={exoCard.cardImagePath}
                className="p-3"
                style={{height: "180px", objectFit: "contain"}}
            />

            <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-5">
                    {exoCard.cardTitle}
                </Card.Title>

                <Card.Text
                    className="text-muted flex-grow-1"
                    style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                    }}
                >
                    {exoCard.cardDescription}
                </Card.Text>

                <div className="text-center mt-auto">
                    <Button
                        variant="primary"
                        size="lg"
                        className="px-4"
                    >
                        Start
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ExoCard
