import Link from 'next/link';
import Styles from "./page.module.css"; 

export default function Card({ vagas }) {
  if (!vagas || vagas.length === 0) {
    return <p>Nenhuma vaga encontrada.</p>;
  }

  return (
    <>
      {vagas.map((item, index) => (
        <div key={index} className="flex">
          <Link href={`/vagas/${item.id}`}>
            <div className={`${Styles.card} d-flex flex-column`}>
              <div className="titlesection align-items-center">
                <div className={`${Styles.titles} d-flex justify-content-between align-items-center`}>
                  <h4 className={Styles.title}>{item.titulo}</h4>
                  <p className={Styles.id}>{item.id}</p>
                </div>
                <div className={Styles.linha}></div>
              </div>

              <div className={`${Styles.infos} d-flex flex-column justify-content-center gap-3`}>
                <div className="info">
                  <i className={`${Styles.icon} bi bi-geo-alt-fill d-flex align-items-center gap-3`}>
                    <p className="m-0">{item.localizacao}</p>
                  </i>
                </div>
                <div className="info">
                  <i className={`${Styles.icon} bi bi-currency-dollar d-flex align-items-center gap-3`}>
                    <p className="m-0">{item.remuneracao}</p>
                  </i>
                </div>
                <div className="info">
                  <i className={`${Styles.icon} bi bi-clock-history d-flex align-items-center gap-3`}>
                    <p className="m-0">{item.carga_horaria}</p>
                  </i>
                </div>
              </div>

              <div className={`${Styles.buttonspace} d-flex justify-content-center align-items-center`}>
                <button className={Styles.button}>Mais detalhes</button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
