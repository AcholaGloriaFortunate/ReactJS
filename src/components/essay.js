import React from 'react';
// import './Essay.css';  // Ensure to create this CSS file for styling

class Essay extends React.Component {
    render() {
        return (
            <div className="essay">
                <h1>Welcome to my grocery shop</h1>
                <p>
                    Our grocery shop is dedicated to quality and convenience, serving the community with fresh, 
                    high-quality produce and a wide range of essential goods. 
                    We aim to be a trusted partner in our customers' daily lives.
                    
                </p>
                <p>
                    We meticulously source products from reputable suppliers to ensure freshness and quality. 
                    Our produce section offers a vibrant selection of fruits, vegetables, and herbs, carefully 
                    inspected to provide only the best.
                </p>
                <p>
                    We pride ourselves on offering a diverse variety of products, from pantry staples to specialty 
                    items and international goods, catering to every culinary preference and reflecting the 
                    multicultural fabric of our community.
                </p>
                <p>
                    Exceptional customer service is a cornerstone of our philosophy. Our knowledgeable and friendly 
                    staff ensure a pleasant shopping experience, helping customers find items and offering cooking tips.
                </p>
                <p>
                    Our shop is more than a place to buy food; it is a community hub prioritizing quality, variety,
                    and service. We are committed to sustainability and innovation, striving to positively impact our 
                    community and the broader world.
                    Thank you for choosing our grocery shop.
                </p>
            </div>
        );
    }
}

export default Essay;