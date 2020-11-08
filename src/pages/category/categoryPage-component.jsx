import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component.jsx';
import {selectCategory} from '../../redux/shop/shop-selectors.js';


import './categoryPage.styles.scss';


const CategoryPage=({collections})=>{
	const {items,title}=collections;
	   return(
		<div className='collection-page'>
          <h2 className='title'>{title}</h2>
          <div className='items'>
          	{
          	 items.map(item=><CollectionItem key={item.id} item={item}/>)
          	}
          </div>
        </div>

		)
 }

const mapStateToProps=(state,ownProps)=>({
	collections:selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);