import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import NavbarComponent from '../components/Navbar';
import Footer from '../components/Footer';

import { MdFavorite } from 'react-icons/md';
import { fetchFavorites, toggleFavorite } from '../redux/favorites';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.data);

  const handleFavorite = (id) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/favorites`, {
        productId: id,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(toggleFavorite(id));
      });
  };

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <>
      <NavbarComponent />
      <Row xs={1} md={2} lg={4} className="g-3">
        {favorites.map((favorite) => (
          <Col key={favorite.id} className="">
            <Card className="m-3 p-5 p-3 shadow h-100">
              <Card.Img
                variant="top"
                className=""
                src={`${process.env.REACT_APP_API_BASE_URL}/${favorite.productImage}`}
              />
              <Card.Body>
                <Card.Title>{favorite.name}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{favorite.price} £</small>
                <MdFavorite
                  className="float-end "
                  color={favorite.isFavorite ? '#ff0000' : '#ccc'}
                  onClick={() => handleFavorite(favorite.id)}
                  size={40}
                />{' '}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer />
    </>
  );
}
