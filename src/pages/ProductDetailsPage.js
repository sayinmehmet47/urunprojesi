import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { MdFavorite } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import NavbarComponent from '../components/Navbar';
import { favorites, fetchProduct } from '../redux/product';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product.data);

  const handleFavorite = () => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/favorites`, {
        productId: id,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(favorites(id));
      });
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  return (
    <>
      <NavbarComponent />
      <Container className="d-lg-flex border shadow p-5 mt-5 justify-content-center align-items-center">
        <Image
          variant="top"
          className="rounded shadow p-3 mb-5 "
          style={{ maxWidth: '420px' }}
          src={`${process.env.REACT_APP_API_BASE_URL}/${product.productImage}`}
        />
        <div className="mx-3">
          <h3 className="">{product.name}</h3>
          <p className="">{product.description}</p>
          <h3 className="text-purple text-info">{product.price} £</h3>
          <div className="d-flex mt-5">
            <h4 className="me-3">Add to Favorites</h4>
            <MdFavorite
              className="float-end "
              color={product.isFavorite ? '#ff0000' : '#ccc'}
              onClick={() => handleFavorite()}
              size={40}
            />{' '}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
