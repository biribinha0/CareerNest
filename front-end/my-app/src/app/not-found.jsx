export default function NotFound() {
    return (
        <div className="not-found-wrapper d-flex justify-content-center align-items-center">
            <div className="errado d-flex align-items-center text-justify flex-row p-4">
                <div className='not-found'>
                    <img src="/img/notfound.png" alt="Página não encontrada" className="img-fluid" />
                </div>
                <div className="texto border-start border-black border-3 ps-4">
                    <h3>A página pela qual você está procurando não existe ou não pode ser encontrada!</h3>
                    <h5 className='text-dark'>
                        Retorne para a <a href="/" className='text-laranja text-decoration-underline'>Página Principal</a> e localize-se.
                    </h5>
                </div>
            </div>
        </div>
    );
}
