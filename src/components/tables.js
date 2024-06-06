import React from 'react';

class Tables extends React.Component {
    render() {
        return (
            <div className="tables">
                <h1 className="table-heading">Table showing my grocery shop information</h1>
                <table className="grocery-table"></table>
                <table>
                    <thead>
                        <tr>
                            <th>order id</th>
                            <th>items</th>
                            <th>order date</th>
                            <th>amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Onions</td>
                            <td>12.05.2024</td>
                            <td>12000</td>
                        </tr>

                        <tr>
                            <td>02</td>
                            <td>Tomatoes</td>
                            <td>15.05.2024</td>
                            <td>15000</td>
                        </tr>

                        <tr>
                            <td>03</td>
                            <td>Garlic</td>
                            <td>17.05.2024</td>
                            <td>6000</td>
                        </tr>

                        <tr>
                            <td>04</td>
                            <td>Coliflower</td>
                            <td>19.05.2024</td>
                            <td>25000</td>
                        </tr>

                        <tr>
                            <td>05</td>
                            <td>Fish</td>
                            <td>20.05.2024</td>
                            <td>35000</td>
                        </tr>

                        <tr>
                            <td>06</td>
                            <td>Rice</td>
                            <td>20.05.2024</td>
                            <td>15000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tables;
