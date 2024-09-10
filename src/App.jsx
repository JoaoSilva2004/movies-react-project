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
      <Banner image="favoritos" />

      <Container>
        <h2>Geografia</h2>
        <section className="cards">

          { videos.map( (video) => <Card id={video.id} key={video.id} /> ) }

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
