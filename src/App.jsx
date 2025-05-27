import "./App.css";
// HOOKS
import { useGetCoins } from "./hooks/useGetCoins";
import { useCallback, useEffect, useState } from "react";
// COMPONENTS
import Card from "./components/Card";

function App() {
  let { data: coins, loding, refetch: refetchCoins } = useGetCoins();

  return (
    <>
      <div className="title">
        <h1>Crypto Info</h1>
      </div>
      <div
        className="update-section"
        onClick={() => {
          refetchCoins();
          alert("Coins updated!");
        }}
      >
        <img
          className="update-btn"
          width="40"
          height="40"
          src="https://img.icons8.com/ios-filled/40/FF0000/update-left-rotation.png"
          alt="update-left-rotation"
        />
        <p className="update-btn-text">Update</p>
      </div>
      <div className={"card-container"}>
        {coins?.data?.map((coin) => (
          <Card
            key={coin.id}
            name={coin.name}
            price={coin.price_usd}
            change_24h={coin.percent_change_24h}
            change_1h={coin.percent_change_1h}
            change_7d={coin.percent_change_7d}
          />
        ))}
      </div>
    </>
  );
}

export default App;
