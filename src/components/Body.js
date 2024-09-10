import Button from 'react-bootstrap/Button';

const Body = () => {
    const divStyles = {
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
        position: "relative",
        margin: "-45% auto auto auto",
    }
    const playerStyles = {
        border: 0,
        width: "350px",
        height: "470px"
    }
    return (
        <>
            <div style={divStyles}>
                <iframe style={playerStyles} title="album-bandcamp-player" src="https://bandcamp.com/EmbeddedPlayer/album=2210495327/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://noeditsband.bandcamp.com/album/we-all-end-up-the-same">We All End Up The Same by No Edits</a></iframe>
            </div>
            <div>
                <Button variant="outline-light">ORDER NOW</Button>{' '}
            </div>
        </>
    );
};

export default Body;