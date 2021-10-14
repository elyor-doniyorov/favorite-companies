import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSellers } from '../redux/home/home';
import Seller from './Seller';
import './HomePage.css';

const HomePage = () => {
  const sellers = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!sellers.length > 0) {
      dispatch(fetchSellers());
    }
  }, []);
  return (
    <div>
      <div className="row homepage-logo">
        <div className="col-6">
          <img
            className="homepage-logo-img"
            src="/images/favorite.png"
            alt="logo"
          />
        </div>
        <div className="col-6 homepage-logo-text">
          <h2>Visit Big sellers online</h2>
          <p className="top">Top 100</p>
        </div>
      </div>
      <div className="row home-sub-title">START BY SELLER</div>
      <div className="seller-container row">
        {sellers.map((seller) => (
          <Seller key={seller.symbol} seller={seller} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
