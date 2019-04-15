import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import renderDropZoneMultipleField from './DropZoneMultiple';

// eslint-disable-next-line react/prop-types
const FieldsForm = ({
  // eslint-disable-next-line react/prop-types
  name, label, type, placeholder, component, isFile = false,
}) => (
  <div className="form__form-group">
    <span className="form__form-group-label">{label}</span>
    <div className="form__form-group-field">
      { !isFile
        ? (
          <Field
            name={name}
            component={component}
            type={type}
            placeholder={placeholder}
          />
        )
        : (
          <Field
            name={name}
            component={renderDropZoneMultipleField}
            type={type}
            placeholder={placeholder}
          />
        )
      }
    </div>
  </div>
);

// eslint-disable-next-line react/no-typos
FieldsForm.PropTypes = {
  label: PropTypes.element,
  type: PropTypes.element,
  placeholder: PropTypes.element,
  component: PropTypes.element,
};
export default FieldsForm;
