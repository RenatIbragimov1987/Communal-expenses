import './Main.css';
import Card from '../Card/Card';

function Main({ togleChecked, isTogleCheckbox, month, setIsTogleCheckbox }) {
  return (
    <main className="main__content">
      <ul className="main__card-list">
        {[...Array(12)].map((card, index) => {
          return (
            <Card
              key={index}
              month={month[index]}
              togleChecked={togleChecked}
              isTogleCheckbox={isTogleCheckbox}
              setIsTogleCheckbox={setIsTogleCheckbox}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
