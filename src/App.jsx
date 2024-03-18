import Header from "./components/header/Header.jsx";
import Cards from "./components/card/Card.jsx";
import Jumbotron from "./components/jumbotron/Jumbotron.jsx";
import Footer from "./components/footer/Footer.jsx";
import Login from "./components/forms/Login.jsx";
export default function App() {
    return (
        <div>
            <Header />
            <div className="flex gap-2">
                <Cards title={"Frieren Beyond Journey's End"}
                       image={"https://staticg.sportskeeda.com/editor/2023/12/0d7fc-17027256966665-1920.jpg?w=840"}
                       body={"Frieren: Beyond Journey's End follows the journey of Frieren, an elf mage who had once embarked on perilous adventures with her comrades to vanquish evil. The story takes place decades after their victory when Frieren is forced to confront her own immortality at the funeral of one of her friends.Mar 8, 2023\n"}/>
                <Cards title={"Undead Unluck"}
                       image={"https://dwgkfo5b3odmw.cloudfront.net/img/manga_series_header/693-011920_Page_Header_2000x800_jpg_wm"}
                       body={"Fuuko Izumi is an 18-year-old woman who is cursed with the ability of Unluck. Anyone who touches her directly receives an extreme case of bad luck. Fed up, she decides to commit suicide. Before she can, she meets Undead, a being who cannot die and regenerates from any injury.\n"}/>
            </div>
            <Jumbotron />
            <Footer />
            <Login />
        </div>
    )
}