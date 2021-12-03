import './style.css';
import React from 'react';
import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import { Address } from './SearchTypes/ApiJsonType';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';


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
      <h1 className="text-primary">Onde você mora ?</h1>
      <div className="search-container container">
        <form onSubmit={submissionHandler}>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Informe seu CEP"
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
            <ResultCard title="Estado" description={address.uf} />
            <ResultCard title="Cidade" description={address.localidade} />
            <ResultCard title="Endereço" description={address.logradouro} />
            <ResultCard title="Bairro" description={address.bairro} />
            
            
          </>
        )}
      </div>
    </div>
  );
};

export default CEPSearch;


