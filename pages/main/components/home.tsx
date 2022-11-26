import Navigation from "../../../components/Navigation";
import { useState } from "react";

const Home = () => {

    const [current, setCurrent] = useState(0)
    return (
        <>
            <Navigation indexPage={current}></Navigation>
        </>
    );
};

export default Home;