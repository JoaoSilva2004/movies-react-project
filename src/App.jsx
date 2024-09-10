import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/db.json";

function App() {

  return (
    <>
      <Header />
      <Banner image="home" />

      <Container>
        <h2>Animes</h2>
        <section className="cards">

          { videos.map( (video) => <Card id={video.id} key={videos.id} /> ) }

          {/* <Card id="MMKr4T1picE" />
          <Card id="8ahHh1rVc2w" />
          <Card id="DojfG9WAcx0" /> */}
        </section>
      </Container>

      <Footer />
    </>
  );
}

export default App
