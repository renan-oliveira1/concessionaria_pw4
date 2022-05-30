import Nav from '../../components/Nav'
import './style.scss'
import CarImg from "../../assets/images/CarToyStory.png"
import SellersImg from "../../assets/images/ToyStoryTeam.png"

export default function Home(){
    return(
        <div>
            <Nav />
            {/* <div className="HomeSearchBox shadowBox container">
                <div id="WhiteBox" className="WhiteBox WhiteBox--complete">
                    <div className="CarouselItems">
                        <div className="CardItem">
                            <a href="/vehicles">
                                <img className="img" src={CarImg} alt="Imagem carro do Toy Story"/>
                                <div className="info">
                                    <h4><b>Veículos</b></h4>
                                    <p>Visualizar veículos disponíveis</p>
                                </div>
                            </a>
                        </div>
                        <div className="CardItem">
                            <a href="/sellers">
                                <img className="img" src={SellersImg} alt="Imagem personagens do Toy Story" />
                                <div className="info">
                                    <h4><b>Vendedores</b></h4>
                                    <p>Ver vendedores</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
    

            <div className="container cards d-flex justify-content-around ">
                <div className="card ">
                     <a href='/vehicles'>
                        <img className="card-img-top img-fluid" src={CarImg} alt="Card image cap"/>
                        <div className="card-body">
                            <p className="text-center text-uppercase">Veículos</p>
                        </div>
                    </a>
                </div>
                <div className="card ">
                    <a href='/sellers'>
                        <img className="card-img-top img-fluid" src={SellersImg} alt="Card image cap" />
                        <div className="card-body">
                            <p className="text-center text-uppercase">Vendedores</p>
                        </div>
                    </a>
                </div> 
            </div>
           

        </div>
    )
}