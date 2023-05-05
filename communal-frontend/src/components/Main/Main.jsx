import './Main.css';
import Card from '../Card/Card';

function Main({ month, isCardsData, addCardData }) {
  return (
    <main className="main__content">
      <ul className="main__card-list">
        {[...Array(12)].map((card, index) => {
          return (
            <Card
							card={card}
              key={index}
              isCardsData={isCardsData[index]}
              month={month[index]}
							index={index}
              // onChangeHandler={onChangeHandler}
              
							addCardData={addCardData}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
