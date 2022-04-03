import React from 'react';
import {translate} from 'react-admin';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {notDoneRecommendation} from '../../actions/recommendationsActions';

const NotDoneButton = ({notDoneRecommendation, record, translate, onClick}) => (
  <Button
    color="secondary"
    variant="outlined"
    onClick={() => {
      notDoneRecommendation(record.id, record);
      if (onClick) {
        onClick();
      }
    }}
  >{translate('components.recommendations.notDoneButton.label')}</Button>);

NotDoneButton.propTypes = {
  notDoneRecommendation: PropTypes.func,
  record: PropTypes.object,
  onClick: PropTypes.func,
};

const enhance = compose(
  translate,
  connect(null, {notDoneRecommendation})
);

export default enhance(NotDoneButton);
