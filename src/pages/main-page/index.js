import { useContext } from 'react';
import { useDataFetch } from '../../effects/useDataFetch';
import { HouseWithGradient } from '../../components/house-with-gradient';
import { HousesContext } from '../../context';
import { Spinner } from '../../components/spinner';
import styles from './styles.module.css';

const HousesPage = () => {
  const houses = useDataFetch();
  const { isLoading } = useContext(HousesContext);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        houses.map((house) => <HouseWithGradient house={house} key={house.name} />)
      )}
    </div>
  );
};

export { HousesPage };
