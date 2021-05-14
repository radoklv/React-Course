import { useRef } from 'react';

import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

const NewMeetupForm = ({ submitForm }) => {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const title = titleRef.current.value.trim();
    const image = imageRef.current.value.trim();
    const address = addressRef.current.value.trim();
    const description = descriptionRef.current.value.trim();

    const newMeetup = {
      title,
      image,
      address,
      description,
    };

    submitForm(newMeetup);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="5"
            required
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
