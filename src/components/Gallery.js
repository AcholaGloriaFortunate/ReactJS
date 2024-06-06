import React from 'react';
import './Gallery.css';  // Ensure to create this CSS file for styling

class Gallery extends React.Component {
    render() {
        const images = [
            { id: 1, src: 'image1.jpg', alt: 'Image 1', title: 'Beautiful Landscape' },
            { id: 2, src: 'image2.jpg', alt: 'Image 2', title: 'City at Night' },
            { id: 3, src: 'image3.jpg', alt: 'Image 3', title: 'Mountain View' },
            { id: 4, src: 'image4.jpg', alt: 'Image 4', title: 'Forest Path' },
            { id: 5, src: 'image5.jpg', alt: 'Image 5', title: 'Sunset Beach' },
            { id: 6, src: 'image6.jpg', alt: 'Image 6', title: 'Desert Dunes' }
        ];

        return (
            <div className="gallery">
                <h1>Image Gallery</h1>
                <div className="gallery-grid">
                    {images.map(image => (
                        <div key={image.id} className="gallery-item">
                            <img src={image.src} alt={image.alt} />
                            <p>{image.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Gallery;
