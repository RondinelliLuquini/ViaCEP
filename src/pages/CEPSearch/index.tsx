import './style.css';
import React from 'react';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import { Address } from './SearchTypes/ApiJsonType';
import axios from 'axios';

type FormData = {
  zip: string;
};

const CEPSearch = () => {
  const [address, setAddress] = useState<Address>();

  const [formData, setFormData] = useState<FormData>({
    zip: '',
  });

  const changeHandler = (change: React.ChangeEvent<HTMLInputElement>) => {
    const name = change.target.name;
    const value = change.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const submissionHandler = (submission: React.FormEvent<HTMLFormElement>) => {
    submission.preventDefault();
    axios
      .get(`https://viacep.com.br/ws/${formData.zip}/json/`)
      .then((response) => {
        setAddress(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setAddress(undefined);
        console.log(error);
      });
  };

  return (
    <div className="zip-search-container">
      <h1 className="text-primary">CEP Search</h1>
      <div className="search-container container">
        <form onSubmit={submissionHandler}>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="CEP (Brazilian ZIP Code - Numbers Only)"
              name="zip"
              value={formData.zip}
              onChange={changeHandler}
            />
            <button type="submit" className="search-button btn btn-primary">
              Buscar
            </button>
          </div>
        </form>
        {address && (
          <>
            <ResultCard title="State" description={address.uf} />
            <ResultCard title="City" description={address.localidade} />
            <ResultCard title="Address" description={address.logradouro} />
          </>
        )}
      </div>
    </div>
  );
};

export default CEPSearch;
