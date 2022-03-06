import { v4 as uuidv4 } from "uuid";
import portfolio from "../../img/showcase/portfolio.png";
import coincoin from "../../img/showcase/coincoin.png";
import weathernow from "../../img/showcase/weathernow.png";

const projects = [
    {
        id: uuidv4(),
        name: "Portfolio Website",
        desc: "A personal online developer portfolio. You are looking at it right now.",
        img: portfolio,
        stack: ["ReactJS", "IsotopeJS", "API"],
        demo: `https://abirsantra.github.io/Me/`,
        code: `https://github.com/AbirSantra/Me`,
    },
    {
        id: uuidv4(),
        name: "Weather Now",
        desc: "A WebApp that shows the daily & weekly weather details.",
        img: weathernow,
        stack: ["ReactJS", "API"],
        demo: `https://abirsantra.github.io/weathernow/`,
        code: `https://github.com/AbirSantra/weathernow`,
    },
    {
        id: uuidv4(),
        name: "Coin&Coin",
        desc: "A WebApp that lets you convert currencies and view exchange rates.",
        img: coincoin,
        stack: ["ReactJS", "API"],
        demo: `https://abirsantra.github.io/CoinCoin/`,
        code: `https://github.com/AbirSantra/CoinCoin`,
    },
];

export default projects;
