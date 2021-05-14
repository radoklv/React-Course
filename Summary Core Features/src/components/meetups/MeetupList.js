import classes from './MeetupList.module.css';

import MeetupItem from './MeetupItem';

const MeetupList = ({ meetups }) => {
  let meetupList = <h2>There is no meetups data...</h2>;

  if (meetups.length > 0) {
    meetupList = meetups.map((meetup) => {
      return <MeetupItem key={meetup.id} meetup={meetup} />;
    });
  }

  return <div className={classes.list}>{meetupList}</div>;
};

export default MeetupList;
