import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import ReplayIcon from "@mui/icons-material/Replay";
import "./App.css";
import Tabs from "./components/Tabs/Tabs";
import { useEffect, useRef, useState } from "react";
import ImageCard from "./components/ImageCard/ImageCard";

function App() {
  const tabsList = [
    { id: "animals", tabName: "ANIMALS" },
    { id: "birds", tabName: "BIRDS" },
    { id: "places", tabName: "PLACES" },
  ];

  const imagesList = [
    {
      id: 1,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/free-photo/red-deer-nature-habitat-during-deer-rut-european-wildlife_475641-941.jpg?w=740&t=st=1691380438~exp=1691381038~hmac=429d5f6762cc26c7ad06d21496c90ea46cb0df0ca629c990190d3185c01d9fdc",
    },
    {
      id: 2,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/free-photo/beautiful-shot-african-leopard-resting-rock-with-blurred-background_181624-12832.jpg?w=740&t=st=1691380508~exp=1691381108~hmac=55af66e2de4270e416162c41a69ec61e948e9e7f60c649ef375e41854c93de56",
    },
    {
      id: 3,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/premium-photo/aggressive-angry-lion-with-big-teeth-background-stormy-sky-generative-ai_843410-433.jpg?w=740",
    },
    {
      id: 4,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1189.jpg?w=740&t=st=1691380595~exp=1691381195~hmac=0bd372156f4f03c0c9938377bce7fe477b72c7f109f4007f3df95ce570ce712a",
    },
    {
      id: 5,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/free-photo/pair-african-elephants-walking-land-with-dust-greenery_181624-27263.jpg?w=740&t=st=1691380534~exp=1691381134~hmac=94927e99c9d5130ad0b6aa42872c4322f45547aa5015923b5d803993f3b9ed2f",
    },
    {
      id: 6,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/free-photo/readhead-cat-sitting_181624-21415.jpg?w=740&t=st=1691380483~exp=1691381083~hmac=e96e6ef852ef3ea79081c2c137ebad3aee39a97d33f4c0cb2fc8f3838e9c68f0",
    },
    {
      id: 7,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/free-photo/closeup-shot-two-zebras-cuddling_181624-5940.jpg?w=740&t=st=1691380584~exp=1691381184~hmac=0b3da45f1eb8e63ad2c910936cfe70b86fc48448cca18723dba161fa02310a88",
    },
    {
      id: 8,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/premium-photo/chameleon-is-sitting-branch-madagascar_265142-7694.jpg?w=740",
    },
    {
      id: 9,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/premium-photo/little-rabbit-wooden-background_392895-88654.jpg?w=740",
    },
    {
      id: 10,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/premium-photo/beautiful-panda-with-baby-panda-happy-together-chinese-park-realistic-digital-illustration-generative-ai_372999-11270.jpg?w=740",
    },
    {
      id: 11,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/free-photo/close-wild-big-brown-bear-near-forest-lake_167946-84.jpg?w=740&t=st=1691380604~exp=1691381204~hmac=ad2df14dbed7d72f5281da4d280206fdd44336d96778fc0b35f1327c8817a6be",
    },
    {
      id: 12,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/free-photo/koala-bear-tree_475641-122.jpg?w=740&t=st=1691381070~exp=1691381670~hmac=2e192ad1aa10582b22558b24f17132758fcbcddb0427b97a3aa2fc4108f5e759",
    },
    {
      id: 13,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/free-photo/cute-fox-with-babies-nature_23-2150312767.jpg?t=st=1691380895~exp=1691384495~hmac=d4599e8ce293980bf18d0b8ce94d87af8f0df4d67115c49c31c95b3860a59a24&w=740",
    },
    {
      id: 14,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/free-photo/cute-tortoise-desert_23-2150537321.jpg?t=st=1691380949~exp=1691384549~hmac=bd45688d95f298bf7a344adfbf06dee93435c945f08de92c2a492832b6ac26f9&w=740",
    },
    {
      id: 15,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/free-photo/macaque-family-sitting-tropical-rainforest-eating-generated-by-ai_188544-24285.jpg?t=st=1691380858~exp=1691384458~hmac=a3f0500aaa93ebc1e2ed474ab29fe0411edcee262e4dc32632a2b327d1a2b9c2&w=826",
    },
    {
      id: 16,
      tab: "animals",
      imageUrl:
        "https://img.freepik.com/free-photo/beautiful-pet-portrait-dog_23-2149218450.jpg?w=826&t=st=1691383861~exp=1691384461~hmac=a27b916714681179c806cadb03f5213db601656a852d3956aacb736014796b58",
    },
    {
      id: 17,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/premium-photo/beautiful-bird-common-kingfisher-alcedo-atthis-sitting-beautiful-background_215306-1873.jpg?w=740",
    },
    {
      id: 18,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/free-photo/elegant-egret-perched-eyeing-fish-pond-generated-by-ai_188544-53964.jpg?t=st=1691384098~exp=1691387698~hmac=a6b40febdf2f05abe2e06228b067015c918407f57ae43021471e94cfccdf28c2&w=826",
    },
    {
      id: 19,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/free-photo/selective-focus-shot-european-crested-tit-bird-branch_181624-35226.jpg?w=740&t=st=1691384111~exp=1691384711~hmac=3ef06bb65c50e8b62bad158798aeff280c354ea108a1921d48eb6582b10bbe90",
    },
    {
      id: 20,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/premium-photo/blue-macaw-beautiful-photography-blue-macaw-jungle-wildlife-photography-aigenerated_692702-16515.jpg?w=740",
    },
    {
      id: 21,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/free-photo/peacock-with-colorful-tail-is-shown-with-brown-background_1340-24437.jpg?t=st=1691384211~exp=1691387811~hmac=501d36ee35219ec33cd2cb32a5aad9567e25ddff331c6f99bd851a06f78a0153&w=740",
    },
    {
      id: 22,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/premium-photo/puffin_658691-169.jpg?w=740",
    },
    {
      id: 23,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/free-photo/view-brown-goose-water-surface_181624-35350.jpg?w=740&t=st=1691384017~exp=1691384617~hmac=185c2b49aaec6cadd570f1fa57ba4179e5a2034c360b8576ab2cf1988a96b702",
    },
    {
      id: 24,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/free-photo/amazing-osprey-sea-hawk-trying-hunt_181624-30966.jpg?w=740&t=st=1691384340~exp=1691384940~hmac=4fb8e8cce324aa2669230b77223dcc3823723241856bca84e6728bd10a0d3f2d",
    },
    {
      id: 25,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/free-photo/cute-exotic-bird-standing-tree-branch-middle-forest_181624-6269.jpg?w=740&t=st=1691384366~exp=1691384966~hmac=e1523e27c99af129bb3d6b9e849c3dc723429cbe4dae1d42f9831f0a9ef5a318",
    },
    {
      id: 26,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/free-photo/selective-focus-shot-fluffy-starling-with-blurred_181624-5947.jpg?w=740&t=st=1691384054~exp=1691384654~hmac=bfb9f301519a8051830fb253c11a09673a9a4fcc3c63021ba9b5f79b0e6d1676",
    },
    {
      id: 27,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/free-photo/duck-living-life-nature_23-2150701969.jpg?w=826&t=st=1691384057~exp=1691384657~hmac=35751460ae1b406b665dae87ef202f22ccc475503a28a209e9f8ecca8e83c625",
    },
    {
      id: 28,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/premium-photo/close-up-eurasian-eagleowl-with-blurred-background_542063-28.jpg?w=740",
    },
    {
      id: 29,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/premium-photo/anthus-campestris-country-pipit-passerine-bird-motacillidae-family_545448-4797.jpg?w=740",
    },
    {
      id: 30,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/free-photo/selective-focus-shot-grey-heron-bird-nature_181624-53711.jpg?w=826&t=st=1691384247~exp=1691384847~hmac=52b4db8db8612baa87249054e6a44f3d1d739c9b7839077a9a8d645568c739fe",
    },
    {
      id: 31,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/free-photo/crane_23-2148167287.jpg?w=740&t=st=1691384906~exp=1691385506~hmac=7ddc08be94a566d8c25128a945d8d814209affedd9313943a2df77194043788b",
    },
    {
      id: 32,
      tab: "birds",
      imageUrl:
        "https://img.freepik.com/free-photo/closeup-shot-fierce-looking-vulture-with-beautiful-display-its-feather-collar_181624-12699.jpg?w=740&t=st=1691384888~exp=1691385488~hmac=01cf907c191b65600450fe044bc926a1ab0315cefeb5f1e6508be2db3db596e2",
    },
    {
      id: 33,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/free-photo/marble-mausoleum-reflects-sunset-symbolizing-indian-spirituality-generated-by-ai_188544-21368.jpg?t=st=1691386265~exp=1691386865~hmac=4a86acb273510bfc0a3d814cfb42d05c22377241ca62465286ad66431eb86493",
    },
    {
      id: 34,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/premium-photo/view-red-fort-lahori-gate-during-sunny-summer-day-new-delhi-india_117930-1911.jpg?w=740",
    },
    {
      id: 35,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg?w=740&t=st=1691385966~exp=1691386566~hmac=a15cd344ba546349ab1561738785c6ea05785fe7cdb3fe5a0b2077a5944dbda9",
    },
    {
      id: 36,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/premium-photo/colosseum-rome-morning-sun-italy_268835-34.jpg?w=740",
    },
    {
      id: 37,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/premium-photo/chittorgarh-fort-india-largest-fort-india-looks-like-city-lost-time-digital-art-style_743201-1285.jpg?w=740",
    },
    {
      id: 38,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/free-photo/bali-pagoda-indonesia_1150-11021.jpg?w=740&t=st=1691386032~exp=1691386632~hmac=d4bb2d9a39dfd569da13ec5c1a2585acf04a4be91eb08eec6d3fa2735125695d",
    },
    {
      id: 39,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/free-photo/ancient-town-architecture-folk-narrow_1417-232.jpg?w=740&t=st=1691385586~exp=1691386186~hmac=02d16a4cc53d0246ea6ba45bdb261c6414d95585bde05a84cf153a3bd19f2b68",
    },
    {
      id: 40,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/premium-photo/london-tower-bridge-sunset-thames-river_79295-6863.jpg?w=740",
    },
    {
      id: 41,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/free-photo/beautiful-architecture-building_74190-3080.jpg?w=740&t=st=1691385597~exp=1691386197~hmac=0a0b7001374e7973bbcc0d645c7403c3db9417752b950957ea1beb92f09590cf",
    },
    {
      id: 42,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/premium-photo/arc-de-triumph-paris-with-beautiful-clouds-fall_87646-1587.jpg?w=740",
    },
    {
      id: 43,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/premium-photo/iconic-landmarks_889056-3407.jpg?w=740",
    },
    {
      id: 44,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/premium-photo/stone-chariot-hampi-vittala-temple-sunset_211251-541.jpg?w=740",
    },
    {
      id: 45,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/free-photo/beautiful-shot-isa-khan-s-tomb-delhi-india-cloudy-sky_181624-20750.jpg?w=740&t=st=1691385707~exp=1691386307~hmac=dc06bcb6c456711545d9f5a30a8dc9113150c57ff32281be4202efa394356e9a",
    },
    {
      id: 46,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/free-photo/famous-eiffel-tower-paris-with-gorgeous-colors_268835-830.jpg?w=740&t=st=1691385934~exp=1691386534~hmac=33cbc9fd6497c513ae80aab7d4a8d87c38a2f2f61baab0d50dd198c8a19ff8df",
    },
    {
      id: 47,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/free-photo/village-bungalows-along-nam-song-river-vang-vieng-laos_335224-1252.jpg?w=826&t=st=1691385832~exp=1691386432~hmac=a627f425a02ab0b188b4042fe45d060d44e764d6174afe1d699e3cd15d485f9a",
    },
    {
      id: 48,
      tab: "places",
      imageUrl:
        "https://img.freepik.com/free-photo/day-city-view_1417-1836.jpg?w=740&t=st=1691385566~exp=1691386166~hmac=90f76f4d3de082b03d776586a7eb7bbc947354153c20478b003f36782161d6f2",
    },
  ];

  const [selectedObject, setSelectedObject] = useState(
    imagesList[Math.ceil(Math.random() * imagesList.length)]
  );
  const [activeTab, setActiveTab] = useState("animals");
  const [filteredList, setFilteredList] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const [time, setTime] = useState(60);
  let intervalId = useRef();

  useEffect(() => {
    setFilteredList(imagesList.filter((ele) => ele.tab === activeTab));
  }, [activeTab]);

  useEffect(() => {
    let count = time;
    if (!isGameOver) {
      intervalId.current = setInterval(() => {
        count -= 1;
        setTime(count);
        if (count <= 0) {
          clearInterval(intervalId.current);
          setIsGameOver(true);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId.current);
  }, [isGameOver]);

  const clickTab = (id) => {
    setActiveTab(id);
  };

  const activeImage = (id) => {
    if (selectedObject.id === id && time !== 0) {
      setScore((score) => score + 1);
      setSelectedObject(
        imagesList[Math.ceil(Math.random() * imagesList.length)]
      );
    } else {
      clearInterval(intervalId.current);
      setIsGameOver(true);
    }
  };

  const playAgain = () => {
    setIsGameOver(false);
    setTime(60);
    setScore(0);
    setSelectedObject(imagesList[Math.ceil(Math.random() * imagesList.length)]);
  };

  console.log(selectedObject);

  return (
    <div className="app-container">
      <div className="top-header">
        <h1>Match Image</h1>
        <div className="time-score-container">
          <div className="time-container">
            <TimerOutlinedIcon sx={{ fontSize: 16, color: "#ffffff" }} />
            <p className="time-title small"> : {time}</p>
            <p className="time-title medium"> : {time} sec</p>
          </div>
          <p className="score-title">Score: {score}</p>
        </div>
      </div>
      <div className="bottom-container">
        {!isGameOver ? (
          <div className="bottom-card">
            <img
              className="main-image"
              src={selectedObject.imageUrl}
              alt="img"
            />
            <ul className="list-container">
              {tabsList.map((tab) => (
                <Tabs
                  tabsList={tab}
                  key={tab.id}
                  clickTab={clickTab}
                  active={activeTab === tab.id ? true : false}
                />
              ))}
            </ul>
            <ul className="image-container">
              {filteredList.map((image) => (
                <ImageCard
                  imagesList={image}
                  activeImage={activeImage}
                  key={image.id}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="game-over-container">
            <div className="game-over-card">
              <img
                className="trophy-img"
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                alt="trophy"
              />
              <div className="your-score-card">
                <h2>Your Score</h2>
                <h1>{score}</h1>
              </div>
              <button onClick={playAgain}>
                <ReplayIcon sx={{ fontSize: 15, mr: "2px", mt: "1px" }} /> Play
                Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
