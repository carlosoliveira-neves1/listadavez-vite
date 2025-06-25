import React, { useState } from 'react';
import './App.css';

function VendedorCard({ nome }) {
  const [status, setStatus] = useState('Lista de Espera');
  const statusOptions = ['Lista de Espera', 'Em Serviço', 'Fora da Loja'];

  return (
    <div className="card">
      <h2>{nome}</h2>
      <p>Status atual: <strong>{status}</strong></p>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        {statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <h1>Lista da Vez</h1>
      <VendedorCard nome="Carlos" />
      <VendedorCard nome="Joana" />
    </div>
  );
}