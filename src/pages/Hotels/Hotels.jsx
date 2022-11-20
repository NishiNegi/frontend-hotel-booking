import './styles.css';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import HotelFilter from '../../components/HotelFilter/HotelFilter';
import HotelCard from '../../components/HotelCard/HotelCard';
import HotelsList from '../../assets/hotelsList.json';

const Hotels = () => (
  <div>
    <nav className="page_navbar">
      <NavigationBar />
    </nav>
    <nav>
      <HotelFilter />
    </nav>
    <section className="page__hotelsList">
      {
        HotelsList.map((hotel) => (
          <HotelCard
            hotelImg={hotel.hotelImg}
            name={hotel.name}
            place={hotel.place}
            text={hotel.text}
            reviews={hotel.reviews}
            price={hotel.price}
            finalPrice={hotel.finalPrice}
            feature1={hotel.feature1}
            feature2={hotel.feature2}
            key={hotel.id}
          />
        ))
      }
    </section>
  </div>
);

export default Hotels;
