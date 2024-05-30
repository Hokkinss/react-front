import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Instruments() {
  const [instruments, setInstruments] = useState([]);
  const [newInstrument, setNewInstrument] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    fetchInstruments();
  }, []);

  const fetchInstruments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/instruments');
      setInstruments(response.data);
    } catch (error) {
      console.error('Error fetching instruments:', error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/instrument', newInstrument);
      setInstruments([...instruments, response.data]);
      setNewInstrument({ name: '', description: '', price: '' });
    } catch (error) {
      console.error('Error adding instrument:', error);
    }
  };

  const handleEdit = (instrument) => {
    // Код для редактирования инструмента
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://yourbackendurl.com/api/v1/instruments/${id}`);
      setInstruments(instruments.filter(instrument => instrument.id !== id));
    } catch (error) {
      console.error('Error deleting instrument:', error);
    }
  };

  return (
    <div>
      <h2>Мои инструменты</h2>
      <div>
        {instruments.map(instrument => (
          <div key={instrument.id}>
            <p>Инструмент №{instrument.id}</p>
            <input type="text" value={instrument.name} readOnly />
            <a href="#" onClick={() => handleEdit(instrument)}>Редактировать</a>
            <a href="#" onClick={() => handleDelete(instrument.id)}>Удалить</a>
          </div>
        ))}
      </div>
      <div>
        <h3>Добавить инструмент</h3>
        <input type="text" value={newInstrument.name} onChange={e => setNewInstrument({ ...newInstrument, name: e.target.value })} />
        <input type="text" value={newInstrument.description} onChange={e => setNewInstrument({ ...newInstrument, description: e.target.value })} />
        <input type="number" value={newInstrument.price} onChange={e => setNewInstrument({ ...newInstrument, price: parseFloat(e.target.value) })} />
        <button onClick={handleAdd}>Сохранить</button>
      </div>
    </div>
  );
}

export default Instruments;