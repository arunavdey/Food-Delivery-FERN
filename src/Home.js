import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://res.cloudinary.com/sanitarium/image/fetch/q_auto/https://www.sanitarium.com.au/getmedia%2Fae51f174-984f-4a70-ad3d-3f6b517b6da1%2Ffruits-vegetables-healthy-fats.jpg%3Fwidth%3D1180%26height%3D524%26ext%3D.jpg"
                    alt="food banner"
                />
                <div className="home__row">
                    <Product title="Apple" price={200.0} rating={3} />
                    <Product title="Banana" price={150.0} rating={4} />
                    <Product title="Watermelon" price={100.0} rating={5} />
                    <Product title="Big Apple" price={150.0} rating={1} />
                </div>
                <div className="home__row">
                    <Product title="Big Banana" price={120.0} rating={5} />
                    <Product title="Guava" price={200.0} rating={3} />
                    <Product title="Small Apple" price={125.0} rating={2} />
                </div>
                <div className="home__row">
                    <Product title="Tomato" price={300.0} rating={3} />
                    <Product title="Pear" price={250.0} rating={2} />
                    <Product title="Orange" price={125.0} rating={5} />
                    <Product title="Tangerine" price={100.0} rating={1} />
                </div>
            </div>
        </div>
    );
}

export default Home;
