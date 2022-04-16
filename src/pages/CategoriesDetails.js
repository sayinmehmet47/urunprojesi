import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import NavbarComponent from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  addFovorites,
  favorites,
  fetchCategoriesDetails,
} from '../redux/categoriesDetails';
import { MdFavorite } from 'react-icons/md';
import axios from 'axios';

export default function CategoriesDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.categoriesDetails.data);
  const loading = useSelector((state) => state.categoriesDetails.loading);

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleFavorite = (id) => {
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
    dispatch(fetchCategoriesDetails(id));
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <NavbarComponent />
      <Row xs={1} md={2} lg={4} className="g-3">
        {products.map((product) => (
          <Col key={product.id} className="">
            <Card className="m-3 p-5 p-3 shadow h-100" role="button">
              <Card.Img
                variant="top"
                onClick={() => handleClick(product.id)}
                className=""
                src={`${process.env.REACT_APP_API_BASE_URL}/${product.productImage}`}
              />
              <Card.Body onClick={() => handleClick(product.id)}>
                <Card.Title>{product.name}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className="fs-3 text-info">{product.price} £</small>
                <MdFavorite
                  className="float-end "
                  color={product.isFavorite ? '#ff0000' : '#ccc'}
                  size={22}
                  onClick={() => handleFavorite(product.id)}
                />
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer />
    </>
  );
}
