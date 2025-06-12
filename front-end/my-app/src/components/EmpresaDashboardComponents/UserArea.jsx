import Link from "next/link"
import { useRouter } from "next/navigation";
import "./UserArea.css";
export default function UserArea({ usuario, titulo }) {
    const router = useRouter();
    const handleLogout = () => {
        localStorage.clear();
        router.push('/');
    };
    return (
        <div className="content-area p-4 pb-0">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center flex-wrap gap-3 justify-content-center justify-content-md-start col-12 col-md-5">
                    <img src={usuario.logo} alt={`Logo da empresa ${usuario.nome}`} className="empresa-logo img-fluid justify-content-center" />
                    <div className="dropdown">
                        <button
                            className="btn btn-empresaLogada dropdown-toggle"
                            type="button"
                            id="empresaDropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {usuario.nome}
                            <i className="bi bi-caret-down-fill seta-dropdown ps-2"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end dowpdown-menu-md-center" aria-labelledby="empresaDropdown">
                            <li>
                                <Link className="dropdown-item" href="/empresa/dashboard/configuracoes">
                                    <i className="bi bi-pencil pe-2"></i> Editar perfil
                                </Link>
                            </li>
                            <li>
                                <button className="dropdown-item text-danger" onClick={handleLogout}>
                                    <i className="bi bi-box-arrow-right pe-2"></i> Sair
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <Link href={'/empresa/dashboard/vagas/criar'} className="btn btn-criar rounded-5 d-flex align-items-center px-3 shadow mt-3 mt-md-0">
                    <i className="bi bi-plus-circle-fill fs-5 pe-2"></i>Criar
                </Link>
            </div>
            <h3 key={titulo} className="fw-bold m-0 pagina-titulo">{titulo}</h3>
        </div >
    )
}