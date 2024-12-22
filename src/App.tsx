import React from 'react';
import { Instagram, MapPin, Star } from 'lucide-react';
import './index.css';
import { Phone } from 'lucide-react';


function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img 
          src="src/img/facade.jpeg"
          alt="Café ambiance" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
        <h1 style={{ fontFamily: 'Milestone', color:'#d4af37', textShadow: '2px 2px 8px rgba(230, 180, 18, 0.5)' }} className="text-6xl mb-4">Yummy</h1>
        <p style={{ fontFamily: 'Bright' }} className="text-xl">La gourmandise by Yummy</p>
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* tony */}
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="src/img/tonyM.jpg"
              alt="Brunch" 
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        <h2 style={{ color: '#609b85', fontFamily: 'Bright', marginBottom: '-10px' }} className="text-4xl font-bold text-center mb-12">MENUS</h2>
          {/* Brunch Card */}
          <a href='https://www.yummyvalenciennes.fr' target='_blank'>
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src="src/img/mali.jpg"
                alt="Brunch" 
                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
                <h3 style={{fontFamily:'American', fontSize:'2.5rem'}} className="text-white text-2xl">Notre menu</h3>
                {/* <p className="text-white">Mardi au vendredi • 11h00-15h00</p> */}
              </div>
            </div>
          </a>

          {/* Sweet Card */}
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="src/img/mj.jpeg"
              alt="Sweet" 
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
            <h3 style={{fontFamily:'American', fontSize:'2.5rem'}} className="text-white text-2xl">Brunch du Dimanche</h3>
              {/* <p className="text-white">Mardi au vendredi • 15h00-18h00</p> */}
            </div>
          </div>
        </div>
      </div>
      <h2 style={{ color: '#609b85', fontFamily: 'Bright', marginBottom: '-30px', marginTop: '-35px'  }} className="text-4xl font-bold text-center mb-12">RÉSEAUX</h2>

      {/* Social Links */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Google Reviews */}
            {/* <a href="https://www.google.com/search?sca_esv=8453c91464d7cb43&sxsrf=ADLYWIJwWfFyb7wi7yO4b8eWhGZY6kwAdQ:1734886151702&q=yummy+valenciennes&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7lk0b3altx6KAWJLlrqYY78okZElN9Zspgjt4p0W43TptMgwWf7o2G972tFVKi8FqP_91ug%3D&uds=ADvngMhGB-VtBMom1-3tEuR0_dZA_K9N_wut5bdI2qF1WDjb80_xF6TeQQK953VaRabGWP_Oz6WuyrK99fzswdTd2zk4YzwcPGTV0QjfUs4Tx4j24qG12Ng&sa=X&ved=2ahUKEwis27DG6ruKAxUWcaQEHfCGHx4Q3PALegQIIxAE&biw=1920&bih=959&dpr=1" target="_blank" rel="noopener noreferrer" 
               className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Star className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Avis Google</h3>
              <p className="text-gray-600 text-center">Partagez votre expérience</p>
            </a> */}
            <a href="https://www.google.com/search?sca_esv=8453c91464d7cb43&sxsrf=ADLYWIJwWfFyb7wi7yO4b8eWhGZY6kwAdQ:1734886151702&q=yummy+valenciennes&si=ACC90nwjPmqJHrCEt6ewASzksVFQDX8zco_7MgBaIawvaF4-7lk0b3altx6KAWJLlrqYY78okZElN9Zspgjt4p0W43TptMgwWf7o2G972tFVKi8FqP_91ug%3D&uds=ADvngMhGB-VtBMom1-3tEuR0_dZA_K9N_wut5bdI2qF1WDjb80_xF6TeQQK953VaRabGWP_Oz6WuyrK99fzswdTd2zk4YzwcPGTV0QjfUs4Tx4j24qG12Ng&sa=X&ved=2ahUKEwis27DG6ruKAxUWcaQEHfCGHx4Q3PALegQIIxAE&biw=1920&bih=959&dpr=1" target="_blank" rel="noopener noreferrer" 
               className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="src/img/obama.jpeg" alt="Avis Google" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <Star className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Avis Google</h3>
              {/* <p className="text-gray-200 text-center">Partagez votre expérience</p> */}
              </div>
            </a>
            <a href="https://www.instagram.com/yummy_valenciennes/" target="_blank" rel="noopener noreferrer"
               className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="src/img/cravate.jpeg" alt="Avis Google" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <Instagram className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Instagram</h3>
              {/* <p className="text-gray-200 text-center">Partagez votre expérience</p> */}
              </div>
            </a>
            {/* Instagram */}
            {/* <a href="https://www.instagram.com/yummy_valenciennes/" target="_blank" rel="noopener noreferrer"
               className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Instagram className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-gray-600 text-center">Suivez nos aventures</p>
            </a> */}

            {/* Menu Card */}
            {/* <a href="/menu" className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Notre Carte</h3>
              <p className="text-gray-600 text-center">Découvrez nos délices</p>
            </a> */}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-white py-8" style={{ backgroundColor: '#609b85' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Contactez-nous</h3>
          <br />
          <div className="flex items-center space-x-2">
            <Phone className="w-6 h-6 text-white" />
            <p>06 10 42 47 57</p>
          </div>
          <br />
          <div className="flex items-center space-x-2">
            <MapPin className="w-6 h-6 text-white" />
            <p>1 Rue Ferrand, 59300 Valenciennes</p>
          </div>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/yummy_valenciennes/" target="_blank" rel="noopener noreferrer">
            <img src="src/img/instagram.png" alt="Snapchat" style={{ width: '100px' }} />
          </a>
          <a href="https://www.snapchat.com/add/yummy_59300" target="_blank" rel="noopener noreferrer">
            <img src="src/img/snap.png" alt="Snapchat" style={{ width: '100px' }} />
          </a>
        </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;