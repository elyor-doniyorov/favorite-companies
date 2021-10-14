import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadData, addData } from '../redux/details/details';
import './DetailsPage.css';

const DetailsPage = () => {
  const detailsReducer = useSelector((state) => state.detailsReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    loadData(id).then((data) => {
      dispatch(addData(data));
    });
  }, []);

  const { response1 } = detailsReducer;

  return (
    <div className="details-container">
      <div>
        <h2 className="details-title text-center">
          Learn more about
          {' '}
          <span className="seller-name text-info">
            {response1 && response1[0].companyName}
            {' '}
          </span>
        </h2>
        <table className="table table-dark table-striped">
          <tbody>
            <tr>
              <th scope="row">Company Name:</th>
              <td>{response1 && response1[0].companyName}</td>
            </tr>
            <tr>
              <th scope="row">CEO:</th>
              <td>{response1 && response1[0].ceo}</td>
            </tr>
            <tr>
              <th scope="row">Phone:</th>
              <td>{response1 && response1[0].phone}</td>
            </tr>
            <tr>
              <th scope="row">country:</th>
              <td>{response1 && response1[0].country}</td>
            </tr>
            <tr>
              <th scope="row">Description:</th>
              <td>{response1 && response1[0].description}</td>
            </tr>
            <tr>
              <th scope="row">Website:</th>
              <td>{response1 && response1[0].website}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsPage;
