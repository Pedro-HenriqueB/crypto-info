import styles from "./Card.module.css";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const Card = ({ name, price, change_24h, change_1h, change_7d }) => {
  //converting price to real
  price *= 5.68;
  function lastFloatingNumber(price) {
    let start_index = String(price).indexOf(".");
    let price_length = price.toString().length;

    for (let i = 2; i <= price_length - start_index; i++) {
      if (
        price.toString()[1 + start_index] != "0" ||
        price.toString()[i + start_index] != "0"
      ) {
        return i;
      }
    }
  }

  return (
    <>
      <div className={styles.card}>
        <p>{name}</p>
        <p>
          {new Intl.NumberFormat("br-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
            maximumFractionDigits: lastFloatingNumber(price),
          }).format(price)}
        </p>
        <div className={styles.chartBg}>
          <Line
            data={{
              labels: [
                "7 Dias",
                "6 Dias",
                "5 Dias",
                "4 Dias",
                "3 Dias",
                "2 Dias",
                "1 Dia",
                "1 Hora",
              ],
              datasets: [
                {
                  label: "Change Percent",
                  data: [
                    price + (price * change_7d) / 100,
                    price +
                      price *
                        ((parseFloat(change_7d + change_24h) * 0.1) / 100),
                    price +
                      price *
                        parseFloat(
                          (parseFloat(change_7d + change_24h) * 0.1) / 100
                        ),
                    price +
                      price *
                        parseFloat(
                          (parseFloat(change_7d + change_24h) * 0.3) / 100
                        ),
                    price +
                      price *
                        parseFloat(
                          (parseFloat(change_7d + change_24h) * 0.5) / 100
                        ),
                    price +
                      price *
                        parseFloat(
                          (parseFloat(change_7d + change_24h) * 0.7) / 100
                        ),
                    price + (price * change_24h) / 100,
                    price + (price * change_1h) / 100,
                  ],
                },
              ],
            }}
            options={{
              backgroundColor: "rgb(255, 0, 0)",
              pointBorderColor: "rgb(255, 115, 0)",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
