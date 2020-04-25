import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-prevew/collection-preview.component';

class ShopPage extends Component {
    state = {
        collections: SHOP_DATA          
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections
                        .map(({id, ...otherCollectionProps}) => (
                            <div key={id}>
                                <CollectionPreview
                                    {...otherCollectionProps}
                                />
                            </div>
                        )
                    )
                }
            </div>
        );
    }
}

export default ShopPage;