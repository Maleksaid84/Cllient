// import React, { useRef, useEffect } from 'react';
// import video_nature from '../Assets/nature.mp4';
// import { useHistory } from 'react-router-dom';
// import './Preloader.css';
// import gsap from 'gsap';

// const Preloader = () => {
//   const preload = useRef(null);
//   const history = useHistory();

//   useEffect(() => {
//     // Utilisation de gsap pour l'animation de préchargement si nécessaire
//     gsap.from(preload.current, { opacity: 0, duration: 1 });

//     // Ajout d'un écouteur d'événements pour écouter la fin de la vidéo
//     preload.current.addEventListener('ended', redirectToHero);

//     // Nettoyage de l'écouteur d'événements lors du démontage du composant
//     return () => {
//       preload.current.removeEventListener('ended', redirectTohomme);
//     };
//   }, []);

//   // Fonction pour rediriger vers la page Hero
//   const redirectToHero = () => {
//     // Redirection vers la page Hero
//     history.push('/');
//   };

//   return (
//     <video ref={preload} autoPlay loop muted className="video-background">
//       <source src={video_nature} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//   );
// };

// export default Preloader;
