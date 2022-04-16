import React from 'react';
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillFacebook,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="d-flex justify-content-between mt-auto">
        <p className="m-2">Katalog App © All rights reserved</p>
        <div className="m-2">
          <AiFillInstagram size={30} />
          <AiFillTwitterCircle size={30} />
          <AiFillFacebook size={30} />
        </div>
      </div>
    </footer>
  );
}
