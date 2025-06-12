import Link from "next/link";

export default function CandidatoDashboard() {
    //tirei o fill, acho bonito os icones vazados, mas se preferirem eu volto
    const cards = [
        {
            titulo: 'Vagas',
            icone: 'bi bi-briefcase',
            link: '/candidato/dashboard/vagas',
            descricao: 'Explore e filtre vagas de estágio disponíveis de acordo com seu perfil.'
        },
        {
            titulo: 'Candidaturas',
            icone: 'bi bi-folder',
            link: '/candidato/dashboard/candidaturas',
            descricao: 'Acompanhe o status das vagas às quais você se candidatou.'
        },
        {
            titulo: 'Perfil',
            icone: 'bi bi-person',
            link: '/candidato/dashboard/perfil',
            descricao: 'Atualize suas informações pessoais e acadêmicas para destacar seu perfil.'
        },
    ];


    return (
        <>
            <div className="d-flex flex-column">

                <h1 className="mb-4">Dashboard</h1>
                <div className="row">
                    {cards.map((card, index) => (
                        <div className="col-12 col-lg-4 mb-4 d-flex" key={index}>
                            <Link href={card.link} className="d-flex">
                                <div className="container d-flex align-items-center justify-content-center ">
                                    <div className="card shadow d-flex flex-1 align-items-center rounded-4" style={{ width: '100%', height: '100%' }}>
                                        <i className={`${card.icone} icon-lg`}></i>

                                        <div className="card-body text-center">
                                            <p className="card-text text-center fs-5 fw-bold titlecard ">{card.titulo}</p>
                                            <p className="card-text px-2">{card.descricao}</p>
                                            <span className="acessarbotao">Acessar Página</span>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div >
            </div>
        </>
    );
}
