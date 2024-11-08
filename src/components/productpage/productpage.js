import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const products = [
    { id: 1, name: "Zebronics Zeb-Transformer-M Wireless Keyboard Mouse Combo", price: 1099.00, rating: 4, image: "https://m.media-amazon.com/images/I/61KZWPeNgHL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 2, name: "HP 255 G8 Laptop", price: 3599.00, rating: 4, image: "https://m.media-amazon.com/images/I/51hZtBRUFBL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 3, name: "Logitech M221 Wireless Mouse", price: 599.00, rating: 4, image: "https://m.media-amazon.com/images/I/41bEr2Oi3KL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 4, name: "Wacom One by CTL-472/K0-CX Small 6-inch x 3.5-inch Graphic Tablet", price: 2599.00, rating: 4, image: "https://m.media-amazon.com/images/I/61Pg1H7U15L._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 5, name: "ZEBRONICS Zeb-Sound Bomb 1 TWS Earbuds", price: 599.00, rating: 4, image: "https://m.media-amazon.com/images/I/51D37uhFFBL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 6, name: "NU Republic Zeta Adjustable Laptop Table", price: 299.00, rating: 4, image: "https://m.media-amazon.com/images/I/713Q0lVmCTL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 7, name: "ESR HaloLock Magnetic Wireless Car Charger Mount", price: 1599.00, rating: 4, image: "https://m.media-amazon.com/images/I/71ZMXqrB9XL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 8, name: "Sounce Study from Home Kit with Webcam", price: 259.00, rating: 3, image: "https://m.media-amazon.com/images/I/61+XjHbWrZL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 9, name: "Audio-Technica AT2020 Cardioid Condenser Studio Microphone", price: 7989.00, rating: 5, image: "https://m.media-amazon.com/images/I/71eM1Lx0CiL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 10, name: "SteelSeries Arctis Pro Wireless Gaming Headset", price: 7499.00, rating: 4, image: "https://m.media-amazon.com/images/I/51x9HSFrFrL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 11, name: "Acer Aspire 5 Gaming Laptop", price: 51999.00, rating: 4, image: "https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 12, name: "DIGITEK® (DSG 005) Gorilla Tripod", price: 1698.00, rating: 4, image: "https://m.media-amazon.com/images/I/61RGJpcuU0L._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 13, name: "Noise Buds VS104 Max", price: 1799.00, rating: 4, image: "https://m.media-amazon.com/images/I/61JdkOFXixL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 14, name: "Logitech M331 Silent Plus Wireless Mouse", price: 1295.00, rating: 4, image: "https://m.media-amazon.com/images/I/618-45t0P5L._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 15, name: "Mi 20000mAh Power Bank", price: 1999.00, rating: 5, image: "https://m.media-amazon.com/images/I/517A8JGGlsL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 16, name: "Cosmic Byte CB-GK-16 Firefly RGB Mechanical Keyboard", price: 2499.00, rating: 4, image: "https://m.media-amazon.com/images/I/61EsJy5XPBL._AC_UL480_FMwebp_QL65_.jpg" },
    { id: 17, name: "Samsung Galaxy M14 5G (ICY Silver, 6GB, 128GB Storage)", price: 14990.00, rating: 4, image: "https://m.media-amazon.com/images/I/81ZSn2rk9WL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 18, name: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)", price: 19999.00, rating: 4, image: "https://m.media-amazon.com/images/I/61QRgOgBx0L.AC_UY327_FMwebp_QL65.jpg" },
    { id: 19, name: "realme narzo N55 (Prime Blue, 6GB+128GB) 33W Segment Fastest Charging", price: 10999.00, rating: 4, image: "https://m.media-amazon.com/images/I/81ogvU1j6qL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 20, name: "iQOO Z7s 5G by vivo (Norway Blue, 8GB RAM, 128GB Storage)", price: 18999.00, rating: 4, image: "https://m.media-amazon.com/images/I/61JS7lF2aqL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 21, name: "Redmi 12C (Matte Black, 4GB RAM, 64GB Storage)", price: 8499.00, rating: 4, image: "https://m.media-amazon.com/images/I/81YEyQqHjPL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 22, name: "Apple iPhone 14 (128 GB) - Midnight", price: 69999.00, rating: 4, image: "https://m.media-amazon.com/images/I/61cwywLZR-L.AC_UY327_FMwebp_QL65.jpg" },
    { id: 23, name: "Redmi Note 12 5G Mystique Blue 6GB RAM 128GB ROM", price: 18999.00, rating: 4, image: "https://m.media-amazon.com/images/I/81ZZPvIWnYL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 24, name: "Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage", price: 7499.00, rating: 4, image: "https://m.media-amazon.com/images/I/813sVzTfvaL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 25, name: "Redmi A2 (Classic Black, 2GB RAM, 32GB Storage)", price: 5699.00, rating: 4, image: "https://m.media-amazon.com/images/I/81RRU5yR6eL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 26, name: "realme narzo 50i Prime (Dark Blue 4GB RAM+64GB Storage)", price: 7599.00, rating: 4, image: "https://m.media-amazon.com/images/I/81WPIz1l5wL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 27, name: "Oppo A78 5G (Glowing Black, 8GB RAM, 128 Storage)", price: 18999.00, rating: 4, image: "https://m.media-amazon.com/images/I/8104evx11QL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 28, name: "Tecno Spark 9 5G (Meta Blue, 8GB RAM,256GB Storage)", price: 14999.00, rating: 4, image: "https://m.media-amazon.com/images/I/61yHIxBZ6iL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 29, name: "Lava Blaze 5G (Glass Green, 6GB RAM, 128GB Storage)", price: 11999.00, rating: 4, image: "https://m.media-amazon.com/images/I/516SDDhc+PL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 30, name: "Nokia C12 Android 12 (Go Edition) Smartphone, All-Day Battery", price: 5399.00, rating: 3, image: "https://m.media-amazon.com/images/I/71x+m2-yb7L.AC_UY327_FMwebp_QL65.jpg" },
    { id: 31, name: "Itel Aura 05i (4GB RAM + 64GB ROM, 6000mAh Battery)", price: 6299.00, rating: 4, image: "https://m.media-amazon.com/images/I/81tKmTANiLL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 32, name: "Motorola g32 (Mineral Gray, 8GB RAM 128GB Storage)", price: 11999.00, rating: 4, image: "https://m.media-amazon.com/images/I/41mQKmbkVWL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 33, name: "Spigen Ultra Hybrid Back Cover Case for iPhone 14 Pro Max", price: 1599.00, rating: 4, image: "https://m.media-amazon.com/images/I/61sDyXAepuL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 34, name: "Ambrane 10000mAh Slim Power Bank, 20W Fast Charging", price: 699.00, rating: 4, image: "https://m.media-amazon.com/images/I/31grUs8OpvL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 35, name: "boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds", price: 1299.00, rating: 4, image: "https://m.media-amazon.com/images/I/51HBom8xz7L.AC_UY327_FMwebp_QL65.jpg" },
    { id: 36, name: "MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery", price: 2199.00, rating: 4, image: "https://m.media-amazon.com/images/I/71lVwl3q-kL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 37, name: "Amazon Basics Lightning to USB A Cable", price: 399.00, rating: 4, image: "https://m.media-amazon.com/images/I/61stQYWQO4L.AC_UY327_FMwebp_QL65.jpg" },
    { id: 38, name: "Anker Nano 20W iPhone Fast Charger", price: 1099.00, rating: 4, image: "https://m.media-amazon.com/images/I/31wacBawB3L.AC_UY327_FMwebp_QL65.jpg" },
    { id: 39, name: "Noise ColorFit Pulse 2 Max Advanced Bluetooth Calling Smart Watch", price: 1999.00, rating: 4, image: "https://m.media-amazon.com/images/I/61Q0R5cdxWL.AC_UY327_FMwebp_QL65.jpg" },
    { id: 40, name: "Fire-Boltt Phoenix Smart Watch with Bluetooth Calling", price: 1999.00, rating: 4, image: "https://m.media-amazon.com/images/I/61S9aVnRZDL.AC_UY327_FMwebp_QL65.jpg" },
]

export default function ProductPage() {
  const { id } = useParams()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const product = products.find(p => p.id === parseInt(id))
    setSelectedProduct(product)
  }, [id])

  if (!selectedProduct) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#121212',
        color: '#fff'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Loading...</div>
      </div>
    )
  }

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value))
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      quantity: quantity,
      image: selectedProduct.image
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || []
    const existingItemIndex = cart.findIndex(item => item.id === cartItem.id)

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity
    } else {
      cart.push(cartItem)
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    alert(`Added ${quantity} ${selectedProduct.name}(s) to cart`)

    // Trigger a custom event to notify the Navbar of the cart update
    window.dispatchEvent(new Event('cartUpdated'))
  }

  return (
    <div style={{
      backgroundColor: '#121212',
      color: '#fff',
      minHeight: '100vh',
      padding: '7rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '52px',
          padding: '2rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            style={{
              height: '40rem',
              width: '20rem',
              objectFit: 'contain',
              borderRadius: '22px',
              transition: 'transform 0.3s ease-in-out'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#E0E0E0' }}>{selectedProduct.name}</h1>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '1rem'
          }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                style={{
                  color: i < selectedProduct.rating ? '#FFD700' : '#4A4A4A',
                  fontSize: '1.5rem'
                }}
              >
                ★
              </span>
            ))}
            <span style={{ marginLeft: '0.5rem', color: '#B0B0B0' }}>{selectedProduct.rating}/5</span>
          </div>
          <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>
            ₹{selectedProduct.price.toLocaleString('en-IN')}
          </p>
          <p style={{ marginBottom: '1.5rem', color: '#B0B0B0', lineHeight: '1.6' }}>
            Experience cutting-edge technology and unparalleled performance with the {selectedProduct.name}. 
            Designed for both professionals and enthusiasts, this product combines innovative features with 
            sleek aesthetics to elevate your digital experience.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
            <label htmlFor="quantity" style={{ marginRight: '1rem', color: '#B0B0B0' }}>Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              style={{
                backgroundColor: '#2A2A2A',
                color: '#fff',
                border: '1px solid #4A4A4A',
                borderRadius: '4px',
                padding: '0.5rem',
                width: '60px',
                fontSize: '1rem'
              }}
            />
          </div>
          <button 
            onClick={handleAddToCart}
            style={{
              backgroundColor: 'gray',
              color: '#fff',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Add to Cart
          </button>
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
            {['Free Shipping', '30-Day Returns', 'Secure Payment'].map((feature, index) => (
              <div key={index} style={{ textAlign: 'center', color: '#B0B0B0' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  {index === 0 ? '🚚' : index === 1 ? '↩️' : '🔒'}
                </div>
                <div style={{ fontSize: '0.9rem' }}>{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}