import React from 'react';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionPreview} from '../../redux/shop/shop-selectors.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import './collection-overview.styles.scss';

const CollectionOverview=({collections})=>( 
	     <div className='collection-overview'>
             {
           	  collections.map(({id,...otherCollectionProps})=>(
           	  	<CollectionPreview key={id} {...otherCollectionProps}/>	
           	  	))
             }
         </div>
 )
const mapStateToProps=createStructuredSelector({
  collections:selectCollectionPreview
})
export default connect(mapStateToProps)(CollectionOverview);
