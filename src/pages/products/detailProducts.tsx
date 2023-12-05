

// import React, { useEffect, useState } from 'react';
// import { Product } from '../../interfaces/products';


// const App: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data: Product[] = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Fake Store</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
//             <div>
//               <h3>{product.title}</h3>
//               <p>{product.desc}</p>
//               <p>${product.price}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
