export default function ItemListContainer ({greeting}){
    return (
    <> 
        <section className="container-fluid d-flex justify-content-around fst-normal text-wrap">
            <h1 className="container-xxl text-center p-3 mb-5 bg-dark-subtle border border-top-0 text-dark">{greeting}</h1>
        </section>   
    </>)
}   