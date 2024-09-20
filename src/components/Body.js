import { Container } from "react-bootstrap";

const Body = () => {
    const playerStyles = {
        border: 0,
        width: "350px",
        height: "470px"
    }
    return (
        <Container>
            <iframe style={playerStyles} title="album-bandcamp-player" src="https://bandcamp.com/EmbeddedPlayer/album=2210495327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://noeditsband.bandcamp.com/album/we-all-end-up-the-same">We All End Up The Same by No Edits</a></iframe>
        </Container>
    );
};

export default Body;