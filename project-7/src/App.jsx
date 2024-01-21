import { PlayerInfo } from "./components/PlayerInfo";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo name={"A"} symbol={"X"} />
          <PlayerInfo name={"A"} symbol={"Y"} />
        </ol>
      </div>
    </main>
  );
}

export default App;
