import React from 'react';
import {translate} from 'react-admin';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {doneRecommendation} from '../../actions/recommendationsActions';

const DoneButton = ({doneRecommendation, record, translate, onClick}) => (
  <Button
    color="primary"
    variant="outlined"
    onClick={() => {
      doneRecommendation(record.id, record);
      if (onClick) {
        onClick();
      }
    }}
  >{translate('components.recommendations.doneButton.label')}</Button>);

DoneButton.propTypes = {
  doneRecommendation: PropTypes.func,
  record: PropTypes.object,
  onClick: PropTypes.func,
};

const enhance = compose(
  translate,
  connect(null, {doneRecommendation})
);

export default enhance(DoneButton);
