import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
  if (!alerts) return null;
  const alertList = alerts.map((a) => (
    <div className={`alert ${a.type}`} key={a.id}>
      {a.message}
    </div>
  ));
  return <div className='alert-container'>{alertList}</div>;
};
const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps, {})(Alert);
