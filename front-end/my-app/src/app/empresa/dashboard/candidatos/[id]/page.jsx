import Candidato from "@/components/EmpresaDashboardComponents/Candidato"; 

export default function Page({ params }) {
    return <Candidato id={params.id} />;
}
