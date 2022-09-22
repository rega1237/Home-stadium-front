import React, { useState } from 'react';
import PropTypes from 'prop-types';
import noImage from '../../assets/static/no-image.svg';
import './create-stadium.css';

const CreateStadium = (props) => {
  const [selectedImage, setSelectedImage] = useState();
  const { setIsModalOpen } = props;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(false);
    event.target.reset();
    setSelectedImage();
  };

  const changeImage = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  return (
    <section className="create-stadium">
      <form onSubmit={handleOnSubmit}>
        <div className="image-input">
          <input
            type="file"
            accept="image/"
            onChange={changeImage}
            id="photo"
            name="photo"
            required
          />

          <label htmlFor="photo" className="preview-container">
            {
              selectedImage ? (
                <>
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    className="image-preview"
                    alt="Preview"
                  />
                </>
              ) : (
                <img
                  src={noImage}
                  className="image-no-image"
                  alt="Preview"
                />
              )
            }
          </label>
        </div>
        <div className="input-fields">
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Country" required />
          <input type="number" placeholder="Seats" min="1" required />
        </div>
        <button type="submit" className="submit-stadium">
          Add
        </button>
      </form>
    </section>
  );
};

CreateStadium.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};

export default CreateStadium;
