import './Main.css';
import Card from '../Card/Card';

function Main({ month, isCardsData, setIsCardsData }) {
  return (
    <main className="main__content">
      <ul className="main__card-list">
			{isCardsData && isCardsData.map((card, index) => {
          return (
            <Card
              key={card._id}
              card={card}
              month={month[index]}
              index={index}
              setIsCardsData={setIsCardsData}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
