import React from "react";
import Cards from "./assets/Components/Cards";
import Header from "./assets/Components/Header";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";
import GameOne from "./assets/Components/Images/GameOne.png";
import GameTwo from "./assets/Components/Images/GameTwo.png";
import GameThree from "./assets/Components/Images/GameThree.png";
import GameFour from "./assets/Components/Images/GameFour.png";
import GameFive from "./assets/Components/Images/GameFive.png";
import GameSix from "./assets/Components/Images/GameSix.png";
import GameSeven from "./assets/Components/Images/GameSeven.png";
import GameEight from "./assets/Components/Images/GameEight.png";
import GameNine from "./assets/Components/Images/GameNine.png";
import GameTen from "./assets/Components/Images/GameTen.png";
import GameEleven from "./assets/Components/Images/GameEleven.png";
import GameTwelve from "./assets/Components/Images/GameTwelve.png";
import GameThirteen from "./assets/Components/Images/GameThirteen.png";
import GameFourteen from "./assets/Components/Images/GameFourteen.png";
import GameFifteen from "./assets/Components/Images/GameFifteen.png";
import GameSixteen from "./assets/Components/Images/GameSixteen.png";

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

        <Cards
          title="Grand Theft Auto VI"
          genre="Action, Open World"
          rating="⭐ 4.9 (24.8K Reviews)"
          price="₹5,999"
          oldPrice="₹6,499"
          image={GameNine}
        />

        <Cards
          title="Horizon Forbidden West"
          genre="Action RPG"
          rating="⭐ 4.8 (16.9K Reviews)"
          price="₹3,999"
          oldPrice="₹4,499"
          image={GameTen}
        />

        <Cards
          title="Dragon's Dogma 2"
          genre="Action RPG"
          rating="⭐ 4.8 (14.7K Reviews)"
          price="₹4,499"
          oldPrice="₹4,999"
          image={GameEleven}
        />

        <Cards
          title="Gran Turismo 7"
          genre="Racing, Simulation"
          rating="⭐ 4.8 (18.2K Reviews)"
          price="₹3,999"
          oldPrice="₹4,499"
          image={GameTwelve}
        />

        <Cards
          title="Dragon Ball: Sparking! ZERO"
          genre="Fighting, Anime"
          rating="⭐ 4.8 (17.5K Reviews)"
          price="₹4,499"
          oldPrice="₹4,999"
          image={GameThirteen}
        />

        <Cards
          title="Hogwarts Legacy"
          genre="Action RPG"
          rating="⭐ 4.8 (21.3K Reviews)"
          price="₹3,499"
          oldPrice="₹3,999"
          image={GameFourteen}
        />

        <Cards
          title="Taxi Chaos"
          genre="Arcade, Racing"
          rating="⭐ 4.3 (4.8K Reviews)"
          price="₹1,499"
          oldPrice="₹1,999"
          image={GameFifteen}
        />

        <Cards
          title="Star Wars Zero Company"
          genre="Strategy, Turn-Based"
          rating="⭐ 4.7 (8.9K Reviews)"
          price="₹4,999"
          oldPrice="₹5,499"
          image={GameSixteen}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;
