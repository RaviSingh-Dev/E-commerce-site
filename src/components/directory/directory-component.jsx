import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory-selectors.js';

import MenuItem from './../menu-item/menu-item.component.jsx';

import './directory-component.styles.scss';


const Directory=({sections})=>(
		<div className='directory-menu'>
		  {
		  	sections.map(({id,...otherSectionProps})=>(
		  		<MenuItem key={id} {...otherSectionProps} />
		  		))
		  }
		</div>
)


const mapStateToProps=createStructuredSelector({
   sections:selectDirectorySections
});
export default connect(mapStateToProps)(Directory);
