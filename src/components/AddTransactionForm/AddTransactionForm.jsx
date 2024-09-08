import React, { useState } from 'react';

const ModalAddTransaction = () => {
    const [showModal, setShowModal] = useState(false);
  
    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    if (!showModal) return (
      <div>
        <button onClick={handleOpenModal}>+</button>
      </div>
    );
  
    return (
      <div className="modal-backdrop">
        <div className="modalAddTransaction">
          <h2>Add transaction</h2>
          <form>
            <div>
              <label>
                <p>Income <input type="checkbox" /> Expense</p>
              </label>
            </div>
            <div>
              <label>
                Select a category
                <select>
                  <option value="1">Main expenses</option>
                  <option value="2">Products</option>
                  <option value="3">Car</option>
                  <option value="4">Self care</option>
                  <option value="5">Others</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                <input type="number" placeholder="0.00" />
              </label>
            </div>
            <div>
              <label>
                <input type="date" />
              </label>
            </div>
            <div>
              <label>
                <textarea placeholder="Comments"></textarea>
              </label>
            </div>
            <div className="buttons-group">
              <button type="submit">
                ADD
              </button>
              <button type="button" onClick={handleCloseModal}>CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default ModalAddTransaction;