import './componets/NavigationBar/NavigationBar.css';
import NavigationBar from './componets/NavigationBar/NavigationBar';
import OfferCard from './componets/OfferCard/OfferCard';
import OfferImg from './componets/OfferCard/images/offerFood.jpg';
import SuccessfulPayment from './componets/SuccessfulPayment/SuccessfulPayment';
import NewsletterForm from './componets/NewsletterForm/NewsletterForm';
import HotelCard from './componets/HotelCard/HotelCard';
import HotelImg from './componets/HotelCard/images/hotelMiami.jpg';
import PerfilMenu from './componets/PerfilMenu/PerfilMenu';
import ImgPerfil from './componets/PerfilMenu/images/perfilImage.jpg';

const App = () => (
  <div className="App">
    <SuccessfulPayment />
    <OfferCard title="Food Order" text="Complimantary Breakfast. Use Code RICAFOOD" image={OfferImg} />
    <NavigationBar />
    <NewsletterForm />
    <HotelCard hotelImg={HotelImg} name="The W South" place="Miami" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo distinctio, deserunt similique magnam ipsa commodi ea." reviews={26412} price={1300} finalPrice={1245} feature1="Swimming" feature2="Parking" />
    <PerfilMenu name="Mark Enderess" phone="+91 123 - 456 - 7890" email="mark.enderess@mail.com" imagePerfil={ImgPerfil} />
  </div>
);

export default App;
