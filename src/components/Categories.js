import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../redux/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories.data);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleClick = (id) => {
    navigate(`/categories/${id}/products`);
  };
  return (
    <div className="mt-5 mb-5">
      <h2 className="d-flex  justify-content-center m-4 pb-3">Kategoriler</h2>
      <div className="d-md-flex  py-5 justify-content-around ">
        {categories.map((category) => (
          <div
            className="categories d-flex flex-column  justify-content-center align-items-center border p-5 shadow rounded"
            key={category.id}
          >
            <button
              className="btn btn-dark fs-1 mb-3"
              onClick={() => handleClick(category.id)}
            >
              {category.name}
            </button>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
