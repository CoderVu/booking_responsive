import React, {useEffect} from "react";
import Aos from "aos";
import "./main.css"
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { HiLocationMarker, HiOutlineClipboardCheck } from "react-icons/hi";
// let me paste the array named data
const data = [
    {
        id: 1,
        imgSrc : img1,
        destTilte : "Bora Bora",
        location : "French",
        grade : "CULTURAL RELAXATION",
        fees : "$2000",
        description : "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it’s known for its scuba diving. It's also a popular luxury resort destination where some guest bungalows are perched over the water on stilts."
    },
    {
        id : 2,
        imgSrc : img2,
        destTilte : "Paris",
        location : "France",
        grade : "CULTURAL RELAXATION",
        fees : "$1500",
        description : "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré."
    },
    {
        id : 3,
        imgSrc : img3,
        destTilte : "Bali",
        location : "Indonesia",
        grade : "CULTURAL RELAXATION",
        fees : "$1000",
        description : "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats."
    },
    {
        id : 4,
        imgSrc : img3,
        destTilte : "Santorini",
        location : "Greece",
        grade : "CULTURAL RELAXATION",
        fees : "$2500",
        description : "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles."
    },
    {
        id : 5,
        imgSrc : img3,
        destTilte : "Kyoto",
        location : "Japan",
        grade : "CULTURAL RELAXATION",
        fees : "$1800",
        description : "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It’s also known for formal traditions such as kaiseki dining"
    },
    {
        id : 6,
        imgSrc : img3,
        destTilte : "Venice",
        location : "Italy",
        grade : "CULTURAL RELAXATION",
        fees : "$1700",
        description : "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs."
    },
    {
        id : 7,
        imgSrc : img3,
        destTilte : "Maui",
        location : "Hawaii",
        grade : "CULTURAL RELAXATION",
        fees : "$3000",
        description : "Maui is an island in the Central Pacific, part of the Hawaiian archipelago. Sprawling Haleakala National Park encompasses the island’s highest peak, volcanic Haleakala, as well as the pools and waterfalls of Ohe’o Gulch, accessed via scenic, winding Hana Highway. The island's 30 miles of beaches include golden-crescent Kapalua, sheltered from strong currents by lava-rock promontories."
    },
    {
        id : 8,
        imgSrc : img3,
        destTilte : "Rome",
        location : "Italy",
        grade : "CULTURAL RELAXATION",
        fees : "$1600",
        description : "Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display. Ancient ruins such as the Forum and the Colosseum evoke the power of the former Roman Empire. Vatican City, headquarters of the Roman Catholic Church, has St. Peter’s Basilica and the Vatican Museums, which house masterpieces such as Michelangelo’s Sistine Chapel frescoes."
    },
    {
        id : 9,
        imgSrc : img3,
        destTilte : "Istanbul",
        location : "Turkey",
        grade : "CULTURAL RELAXATION",
        fees : "$1400",
        description : "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot"
    },

]
const Main = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (

    
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">Most visited destinations</h3>
            </div>
            <div className="secContent grid">
               {
                data.map(({id, imgSrc, destTilte, location, grade, fees, description}) => {
                    return (
                       <div key={id} className="singleDestination" data-aos = "fade-up">  
                        <div className="imageDiv">
                            <img src={imgSrc} alt="destTilte"/>
                        </div>
                        <div className="cardInfo">
                            <h4 className="destTitle">{destTilte}</h4>
                            <span className="container flex">
                                <HiLocationMarker className="icon"/>
                                <span className="name">{location}</span>
                            </span>
                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}<small>+1</small></span>
                                </div>
                                <div className="price">
                                    <h5> {fees} </h5>
                                </div>
                            </div>
                            <div className="desc">
                                <p>{description}</p>
                            </div>
                            <button className="btn flex">
                                DETAILS <HiOutlineClipboardCheck className="icon"/>
                            </button>
                        </div>
                       </div>
                    );
                })
               }
            </div>
        </section>
    )
}
export default Main