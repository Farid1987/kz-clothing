import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryMenu } from './directory.styles';
// import "./directory.styles.scss";


const Directory = ({sections}) => (
  <DirectoryMenu>
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

Directory.propTypes = {
  sections: PropTypes.array
}

export default connect(mapStateToProps)(Directory);
