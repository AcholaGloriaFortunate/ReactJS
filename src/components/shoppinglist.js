import React from 'react';

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Onions</li>
                    <li>Tomatoes</li>
                    <li>Garlic</li>
                    <li>Coliflower</li>
                    <li>Fish</li>
                    <li>Rice</li>
                    <li>Matooke</li>
                    <li>Goats Meat</li>
                </ul>
            </div>
        );
    }
}

export default ShoppingList;

