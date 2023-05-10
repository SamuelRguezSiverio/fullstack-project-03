import  { useState, useEffect, useContext } from 'react';
import PhoneCard from '../../components/PhoneCard/PhoneCard';
import { Link } from 'react-router-dom';
import './Phones.css';
import { getAllPhones } from '../../services/phoneAPI';
import { getAllBrands } from '../../services/phoneAPI';
import { SearchContext } from '../../Contexts/SearchContext';
import { useLocation } from 'react-router-dom';

function Phones() {
  const { search } = useContext(SearchContext);
  const [ phones, setPhones ] = useState([])
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const { state } = useLocation();
  let id = state?.id;

  useEffect(() => {
    async function getAllAndSetPhones() {
      const phones = await getAllPhones();
      setPhones(phones);
    }
    getAllAndSetPhones();
  }, []);

  useEffect(() => {
    async function getAllAndSetBrands() {
      const brands = await getAllBrands();
      setBrands(brands);
    }
    getAllAndSetBrands();
  }, []);

  function filterPhones() {
    let filteredPhones = phones;
    if (search !== '') {
      filteredPhones = phones.filter((phone) =>
        search ? phone.modelo.toLowerCase().includes(search.toLowerCase()) : true
      );
    } 
    if (id !== undefined) {
      filteredPhones = filteredPhones.filter((phone) => phone.brandId === id);
    }
    if (selectedBrand !== '') {
      filteredPhones = filteredPhones.filter((phone) => phone.modelo.startsWith(selectedBrand));
    }
    filteredPhones = filteredPhones.map((phone) => (
      <Link key={phone.id} to={`/smartphones/${phone.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <PhoneCard {...phone} />
      </Link>
    ));
    if (filteredPhones.length > 0) {
      return filteredPhones;
    } else {
      return <h1>No Results Found!</h1>;
    }
  }

  function handleBrandSelect(event) {
    setSelectedBrand(event.target.value);
  }
  return (
    <div className="main">
      <h1 className="title">Smartphones</h1>
      <div className='filter'>
        <label htmlFor="brandSelect">Marcas:</label>
        <select id="brandSelect" className='classic' value={selectedBrand} onChange={handleBrandSelect}>
          <option value="">Todas</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.brand}>
              {brand.brand}
            </option>
          ))}
        </select>
      </div>
      <div className="phone-boxes">
        {phones.length > 0 && filterPhones()}
      </div>
    </div>
  );
}

export default Phones;
