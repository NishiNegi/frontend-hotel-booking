import PropTypes from 'prop-types';
import './styles.css';

const UserInfo = ({
  name, birthday, gender, address, city, zip, email, phone, password,
}) => (
  <div className="card">
    <section className="card__title">
      <h2>Profile</h2>
      <button className="card__titleButton" type="submit">Edit</button>
    </section>
    <section className="card__info">
      <div className="card__infoRequested">
        <h4 className="card__infoRequestedForm">Name</h4>
        <h4 className="card__infoRequestedForm">Birthday</h4>
        <h4 className="card__infoRequestedForm">Gender</h4>
        <h4 className="card__infoRequestedForm">Street Address</h4>
        <h4 className="card__infoRequestedForm">City/State</h4>
        <h4 className="card__infoRequestedForm">Zip</h4>
      </div>
      <div className="card__infoUser">
        <p className="card__infoUserData">{name}</p>
        <p className="card__infoUserData">{birthday}</p>
        <p className="card__infoUserData">{gender}</p>
        <p className="card__infoUserData">{address}</p>
        <p className="card__infoUserData">{city}</p>
        <p className="card__infoUserData">{zip}</p>
      </div>
    </section>
    <h2 className="card__loginTitle">Login Details</h2>
    <section className="card__login">
      <div className="card__loginInfo">
        <h4 className="card__loginInfoRequested">Email Address</h4>
        <h4 className="card__loginInfoRequested">Phone No</h4>
        <h4 className="card__loginInfoRequested">Password</h4>
      </div>
      <div className="card__loginUser">
        <p className="card__loginUserData">{email}</p>
        <p className="card__loginUserData">{phone}</p>
        <p className="card__loginUserData">{password}</p>
      </div>
      <div className="card__loginEdit">
        <button type="submit" className="card__loginEditButton">Edit</button>
        <button type="submit" className="card__loginEditButton">Edit</button>
        <button type="submit" className="card__loginEditButton">Edit</button>
      </div>
    </section>
  </div>
);

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default UserInfo;
