
import OurStrength from "../../components/OurStrength/OurStrength";
import PageTitle from "../../components/PageTitle/PageTitle";
import Staffs from "../../components/Staffs/Staffs";
import Testimony from "../../components/Testimony/Testimony";
import TopFood from "../../components/TopFood/TopFood";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <PageTitle title={'Home Page'}></PageTitle>
            <Banner></Banner>
            <TopFood></TopFood>
            <OurStrength></OurStrength>
            <Testimony></Testimony>
            <Staffs></Staffs>
        </div>
    );
};

export default Home;