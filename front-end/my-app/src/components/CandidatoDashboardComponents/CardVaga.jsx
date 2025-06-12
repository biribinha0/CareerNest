import Link from "next/link";
import Styles from './CardVaga.css'

export default function CardVaga({ vaga }) {
    return (
        <div className="d-flex">
            <div className="cardzito d-flex flex-column flex-wrap">
                <div className="titlesection align-items-center">
                    <div className="titles align-items-center">
                        <h4 className="title">{vaga.titulo}</h4>
                        <h6 className="id">{vaga.id}</h6>
                        <p className='description card-text'> {vaga.descricao} </p>
                    </div>
                    <div className="linha"></div>
                </div>

                <div className="infos d-flex flex-column justify-content-center gap-3">
                    <div className="info">
                        <i className="icon bi bi-currency-dollar d-flex align-items-center gap-3">
                            <p className="m-0">Remuneração: {parseFloat(vaga.remuneracao).toLocaleString("pt-BR", { style: "currency", currency: 'brl' })}</p>
                        </i>
                    </div>
                    <div className="info">
                        <i className="icon bi bi-clock-history d-flex align-items-center gap-3">
                            <p className="m-0">Carga Horária: {vaga.carga_horaria}</p>
                        </i>                 </div>
                    <div className="info">
                        <i className="icon bi bi-backpack3 d-flex align-items-center gap-3">
                            <p className="m-0">Tipo: {vaga.tipo}</p>
                        </i>
                    </div>
                    <div className="info">
                        <i className="icon bi bi-geo-alt-fill d-flex align-items-center gap-3">
                            <p className="m-0">
                                Distância: {(vaga.distancia_km).replace('.', ',')} km
                            </p>
                        </i>
                    </div>

                </div>

                <div className={`${Styles.detalhesbutton} d-flex justify-content-center align-items-center`}>
                    <Link href={`/vagas/${vaga.id}`} className="clickIn btn btn-primary mt-2">Ver Detalhes</Link>
                </div>
            </div>
        </div>

    )
}
// <div className="col-md-4">
//     <div className="card flex">
//         <div className="cardVaga card-body flex-column justify-content-between">
//             <div className="titlesection mb-2">
//                 <h5 className={`${Styles.title} card-title`}>{vaga.titulo}</h5>
//                 <h6 className={`${Styles.title} card-subtitle mb-2 text-body-secondary`}>{vaga.localizacao}</h6>
//                 <p className={`${Styles.description}card-text`}>
//                     {vaga.descricao}
//                 </p>
//                 <div className={Styles.linha}></div>
//             </div>
//             <div className={`${Styles.infos} d-flex flex-column justify-content-center gap-3`}>
//                 <div className="info">
//                     <i className={`${Styles.icon} bi bi-currency-dollar d-flex align-items-center gap-3`}>
//                         <p className="m-0">Remuneração: {parseFloat(vaga.remuneracao).toLocaleString("pt-BR", { style: "currency", currency: 'brl' })}</p>
//                     </i>
//                 </div>
//                 <div className="info">
//                     <i className={`${Styles.icon} bi bi-clock-history d-flex align-items-center gap-3`}>
//                         <p className="m-0">Carga Horária: {vaga.carga_horaria}</p>
//                     </i>
//                 </div>
//                 <div className="info">
//                     <i className={`${Styles.icon} bi bi-backpack3 d-flex align-items-center gap-3`}>
//                         <p className="m-0">Tipo: {vaga.tipo}</p>
//                     </i>
//                 </div>
//                 <div className="info">
//                     <i className={`${Styles.icon} bi bi-geo-alt-fill d-flex align-items-center gap-3`}>
//                         <p className="m-0">Distância: {(vaga.distancia_km).replace('.', ',')} km</p>
//                     </i>
//                 </div>
//                 <div className={`${Styles.buttonspace} d-flex justify-content-center align-items-center`}>
//                     <Link href={`/vagas/${vaga.id}`} className="btn btn-primary mt-2">Ver Detalhes</Link>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
