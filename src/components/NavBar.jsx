import CartWidget from "./CartWidget";

export default function NavBar(){

return(
<>
    <nav className="d-flex justify-content-around mt-2 navbar navbar-expand-lg ">
        <img  className="figure-img img-fluid rounded-circle " src="https://i.postimg.cc/KzhhSKtX/icono-cuadrado.pnggit" alt="Logo Dionisio" />
        <div className="justify-content-evenly">
            <button className="btn btn-dark mx-2 text-secondary btn-outline-light">3 pasos</button>
            <button className="btn btn-dark mx-2 text-secondary btn-outline-light">5 pasos</button>
            <button className="btn btn-dark mx-2 text-secondary btn-outline-light">pasados</button>
            <button className="btn btn-dark mx-2 text-secondary btn-outline-light">futuros</button>
        </div>
        <CartWidget />
    </nav>
</>
)
}