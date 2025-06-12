import CandidatoVagas from "@/components/CandidatoDashboard/CandidatoVagas"
import Styles from "./page.module.css";
export default function VagasCandidato() {
    return (
        <div className="container-fluid">
            <div className="row d-flex">
                <CandidatoVagas Styles = {Styles}></CandidatoVagas>
            </div>   
        </div>
    )
}