import React from 'react';

function ClientsList({ id, accountManagerId, name, nif, email, mobile, owner, city, address }) {
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{nif}</td>
      <td>{email}</td>
      <td>{mobile}</td>
      <td>{owner}</td>
      <td>{city}</td>
      <td>{address}</td>
    </tr>
  );
}

export default ClientsList;
