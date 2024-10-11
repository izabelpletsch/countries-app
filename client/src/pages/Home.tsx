import React from "react";
import { Button } from "../components/index";
import worldImage from "../assets/images/world.svg";

function Home() {
    return (
        <main className="p-10">
            <img className="w-1/2" src={worldImage} alt="World map" />
            <h1 className="text-2xl my-10">Welcome to the Countries App!</h1>

            <Button
                buttonText="See all countries"
                buttonLink="/countries"
            ></Button>

            <span className="mt-6">Creator: <a href="http://github.com/izabelpletsch">Izabel Pletsch</a> for DevelopsToday</span>
        </main>
    );
}

export default Home;
