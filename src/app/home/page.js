import "./home.css";

export default function Home() {

    return (
        <div className="home flex justify-center">
            <h1 className="desktop">
                Welcome to <span className="font-lemon-milk">flagbook</span> &#45; The Cyber Playground of kBxAc
            </h1>
            <h1 className="mobile">
                <span className="font-lemon-milk brush-3">flagbook</span><br />
                <i>CTF Tactics & Tools</i>
            </h1>
        </div>
    );
}