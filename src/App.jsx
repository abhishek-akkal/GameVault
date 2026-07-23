import React from "react";
import Cards from "./assets/Components/Cards";
import Header from "./assets/Components/Header";
import GameOne from "./assets/Components/Images/GameOne.png";
import GameTwo from "./assets/Components/Images/GameTwo.png";
import GameThree from "./assets/Components/Images/GameThree.png";
import GameFour from "./assets/Components/Images/GameFour.png";
import GameFive from "./assets/Components/Images/GameFive.png";
import GameSix from "./assets/Components/Images/GameSix.png";
import GameSeven from "./assets/Components/Images/GameSeven.png";
import GameEight from "./assets/Components/Images/GameEight.png";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Header />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-20 px-8">
        <Cards
          title="Marvel's Spider-Man 2"
          genre="Action, Adventure"
          rating="⭐ 4.9 (18.5K Reviews)"
          price="₹4,999"
          oldPrice="₹5,499"
          image={GameOne}
        />

        <Cards
          title="Battlefield 6"
          genre="Action, FPS"
          rating="⭐ 4.8 (15.2K Reviews)"
          price="₹3,999"
          oldPrice="₹4,499"
          image={GameTwo}
        />

        <Cards
          title="EA Sports FC 26"
          genre="Sports"
          rating="⭐ 4.6 (12.8K Reviews)"
          price="₹3,499"
          oldPrice="₹3,999"
          image={GameThree}
        />

        <Cards
          title="Resident Evil 4"
          genre="Survival Horror"
          rating="⭐ 4.9 (16.7K Reviews)"
          price="₹2,999"
          oldPrice="₹3,499"
          image={GameFour}
        />

        <Cards
          title="God of War: Ragnarök"
          genre="Action, Adventure"
          rating="⭐ 4.9 (19.3K Reviews)"
          price="₹4,499"
          oldPrice="₹4,999"
          image={GameFive}
        />

        <Cards
          title="Cricket 26"
          genre="Sports"
          rating="⭐ 4.7 (10.9K Reviews)"
          price="₹3,999"
          oldPrice="₹4,499"
          image={GameSix}
        />

        <Cards
          title="Elden Ring"
          genre="Action RPG"
          rating="⭐ 4.9 (18.9K Reviews)"
          price="₹3,199"
          oldPrice="₹3,999"
          image={GameSeven}
        />

        <Cards
          title="Clair Obscur: Expedition 33"
          genre="Turn-Based RPG"
          rating="⭐ 4.9 (9.8K Reviews)"
          price="₹3,499"
          oldPrice="₹3,999"
          image={GameEight}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;
