import OurStrength from "../../components/OurStrength/OurStrength";
import Staffs from "../../components/Staffs/Staffs";
import Testimony from "../../components/Testimony/Testimony";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurStrength></OurStrength>
            <Testimony></Testimony>
            <Staffs></Staffs>
        </div>
    );
};

export default Home;