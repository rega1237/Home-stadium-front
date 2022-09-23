import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { createStadium } from '../../API/api_calls';
import { fetchItems } from '../../redux/homereducer/homereducer';
import noImage from '../../assets/static/no-image.svg';
import './create-stadium.css';

const CreateStadium = (props) => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch((state) => state.home);
  const [selectedImage, setSelectedImage] = useState();
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [fetchDone, setFetchDone] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const { setIsModalOpen } = props;

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setSubmitDisabled(true);
    const stadium = {
      name: event.target.name.value,
      country: event.target.country.value,
      photo: event.target.photo.value,
      seats: event.target.seats.value,
    };

    const response = await createStadium(user, stadium);
    if (response.state) {
      setFetchDone(true);
      setTimeout(() => {
        setFetchDone(false);
      }, 1000);
      setIsModalOpen(false);
      event.target.reset();
      dispatch(fetchItems(user.token));
    }

    if (response.state === false) {
      setFetchError(true);
      setTimeout(() => {
        setFetchError(false);
      }, 1000);
    }
    setSelectedImage();
  };

  const changeImage = (event) => {
    if (event.target.value.length > 0) {
      setSelectedImage(event.target.value);
    }
  };

  return (
    <section className="create-stadium">
      <form onSubmit={handleOnSubmit}>
        <div className="image-input">
          <label htmlFor="photo" className="preview-container">
            {
              selectedImage ? (
                <>
                  <img
                    src={selectedImage}
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
          <input
            type="text"
            placeholder="Photo url"
            onInput={changeImage}
            id="photo"
            name="photo"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="name"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="country"
            required
          />
          <input
            type="number"
            name="seats"
            placeholder="seats"
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          disabled={submitDisabled}
          className={`submit-stadium ${fetchDone ? 'done' : ''} ${fetchError ? 'error' : ''}`}
        >
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
