import "../App.css"
import album from "../assets/FRONT.png"

const Body = () => {
    const styles = {
        width: "50%",

    }
    return (
        <div className="App">
            <img src={album} style={styles} alt="album-cover" />
        </div>
    );
};

export default Body