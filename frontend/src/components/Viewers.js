import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ws from '../../websocket';

const Viewers = ({ productId }) => {
  const [viewers, setViewers] = useState(0);

  const decrementView = () => {
    ws.send(JSON.stringify({ action: 'DECREMENT_VIEW', pid: productId }));
  };

  useEffect(() => {
    window.addEventListener('beforeunload', decrementView);

    ws.onopen = () => {
      ws.send(JSON.stringify({ action: 'INCREMENT_VIEW', pid: productId }));
    };

    ws.onmessage = (message) => {
      const messageObject = JSON.parse(message.data);
      switch (messageObject.type) {
        case 'UPDATED_VIEW':
          if (messageObject.pid === productId) {
            setViewers(messageObject.viewers);
          }
          break;
        default:
          console.log('default');
          break;
      }
    };

    return () => {
      decrementView();
      window.removeEventListener('beforeunload', decrementView);
    };
  }, []);

  return (
    <div>
      <div>
        Total Viewers:
        {viewers}
      </div>
    </div>
  );
};

Viewers.defaultProps = {
  productId: '0',
};

Viewers.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Viewers;
