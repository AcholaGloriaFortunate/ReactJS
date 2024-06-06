import React from 'react';
// import './Cars.css';  // Ensure to create this CSS file for styling

class Cars extends React.Component {
    render() {
        const cars = [
            { id: 1, name: 'Kuluger', year: 2012, price: 'shs.15,000,000' },
            { id: 2, name: 'BMW 3 Series', year: 2015, price: 'shs.30,000,000' },
            { id: 3, name: 'Subaru', year: 2019, price: 'shs.20,000,000' },
            { id: 4, name: 'Mercedes-Benz C-Class', year: 2020, price: 'shs35,000,000' },
            { id: 5, name: 'Primo', year: 2022, price: 'shs.10,000,000' }
        ];

        return (
            <div className="cars">
                <h1>Car Inventory</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map(car => (
                            <tr key={car.id}>
                                <td>{car.id}</td>
                                <td>{car.name}</td>
                                <td>{car.year}</td>
                                <td>{car.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Cars;
