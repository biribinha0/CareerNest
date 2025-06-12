import Link from "next/link";
import { useEffect, useState } from "react"

export default function CardCandidatoOverview({ candidatoId, vagaId }) {
    const [candidato, setCandidato] = useState(null);
    const [vaga, setVaga] = useState(null);
    const API_URL = 'http://localhost:3001';

    useEffect(() => {
        fetch(`${API_URL}/candidatos/${candidatoId}`)
            .then((res) => res.json())
            .then((data) => setCandidato(data))
            .catch((err) => console.log('Erro ao ler candidato: ', err))

        fetch(`${API_URL}/vagas/${vagaId}`)
            .then((res) => res.json())
            .then((data) => setVaga(data))
            .catch((err) => console.log('Erro ao ler vaga: ', err))
    }, [candidatoId])

    if (!candidato || !vaga) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="card w-100" >
            <div className="card-body ">
                <div className="parte-alta d-flex justify-content-center align-items-center flex-column">
                    <img src="/img/FotoUsuario.png" alt="Micrologotipo" className="img-fluid rounded-circle mb-3" style={{ height: 100, width: 100 }} />
                    <h5 className="card-title text-center">{candidato.nome}</h5>
                </div>
                <div className="tex0taaaa border-top border-2 border-0 p-2 pb-1">
                    <h6 className="card-text text-black fw-bold">Aplicado para</h6>
                    <p className="">{vaga.titulo}</p>
                </div>
                <div className="d-flex justify-content-center">
                    <Link href={`/empresa/dashboard/candidatos/${candidato.id}`} className="btn btn-perfil px-5">Perfil</Link>
                </div>
            </div>
        </div>
    )
}
