import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Dish from "./Dish";


const menu = [
    {
        title: "Philadelphia $12",
        description: 
        "A Philadelphia roll is a makizushi (also classified as a kawarizushi) type of sushi generally made with smoked salmon, cream cheese, and cucumber, with the rice on the outside (uramaki).",
        getImageSrc: () => require("../images/Philadelphia.jpg"),
        
    },

    {
        title: "Americana Pizza $9",
        description: 
        "New York-style pizza is large, hand-tossed thin crust. Sold in big slices. While the crust is thick and crispy at the edge, the center of the pie is thin and foldable so that the large slice can be folded up and eaten. Traditionally toppings are just sauce and cheese.",
        getImageSrc: () => require("../images/AmericanaPizza.jpg"),
        
    },

    {
        title: "Beef Steak $26",
        description: 
        "A beefsteak, often called just steak, is a flat cut of beef with parallel faces, usually cut perpendicular to the muscle fibers.",
        getImageSrc: () => require("../images/BeefSteak.jpg"),
        
    },

    {
        title: "Borsh $9",
        description: 
        "Ukrainian borscht is a hearty soup of beef and a variety of vegetables in which root vegetables and cabbage predominate, and the soup takes its characteristic deep red colour from beets. The soup is often eaten with a sour cream garnish and with pirozhki, turnovers filled with beef and onions.",
        getImageSrc: () => require("../images/borsh.jpg"),
        
    },

    {
        title: "Fried Calamari $17",
        description: 
        "Calamari is squid, and it's often sliced into rings and fried in the US. grandriver/Getty Images. Calamari is the pluralized version of calamaro, the Italian word for squid. It has a mild flavor, chewy texture, and is sold fresh or frozen at fish markets and grocery stores",
        getImageSrc: () => require("../images/Calamari.jpg"),
        
    },

    {
        title: "Falafel $15",
        description: 
        "Falafel are deep-fried balls or patties made from chickpeas or fava beans, sometimes both, plus fresh herbs and spices. Falafel is a popular Middle Eastern street food sold from vendors or fast-casual spots in countries such as Egypt, Syria, Lebanon, Turkey and Israel, where it's the national dish.",
        getImageSrc: () => require("../images/Falafel.jpg"),
        
    },

    {
        title: "Kebab $19",
        description: 
        "kebab, also spelled kebob or kabob, dish of Middle Eastern or Central Asian origin that typically combines small pieces of meat such as lamb or beef with vegetables on a skewer and is then grilled. Kebab derives from a Persian term for the dish that passed into both Arabic (as kabāb) and Turkish (as kebap)..",
        getImageSrc: () => require("../images/Kebab.jpg"),
        
    },

    {
        title: "Seafood Cocktail $12",
        description: 
        "includes all commercially captured or farmed freshwater and saltwater fish, molluscan shellfish, and crustaceans. Molluscan shellfish (or mollusks) and crustaceans (shrimp, lobster, and crayfish) are both commonly referred to as shellfish.",
        getImageSrc: () => require("../images/SeafoodCocktail.jpg"),
        
    },
];
const MenuSection = () => {
    return (
      <FullScreenSection
        backgroundColor="#14532d"
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
      >
        <Heading as="h1" id="MenuSection">
          Our Menu

        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2,minmax(0,1fr))"
          gridGap={8}
        >
          {menu.map((Menu) => (
            <Dish
              key={Menu.title}
              title={Menu.title}
              description={Menu.description}
              imageSrc={Menu.getImageSrc()}
            />
          ))}
        </Box>
      </FullScreenSection>
    );
  };
  
  export default MenuSection;