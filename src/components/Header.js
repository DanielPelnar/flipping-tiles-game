import { useEffect } from "react";

function Header({ onClick, wins}) {
    // Show current win count in the web title:
    useEffect(() => {
        document.title = `Wins: ${wins}`;
    }); // ??? doesnt have to run all the time

    return (
        <header className="header">
            <h4>Wins: {wins}</h4>
            <h3>Matching Memory Game</h3>
            <button onClick={onClick}>New Game</button>
        </header>
    );
}

export default Header;

