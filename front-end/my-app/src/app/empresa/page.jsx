import CardEmpresa from "@/components/CardEmpresa/CardEmpresa";
import EmpresaSeq from "@/components/EmpresaSeq/EmpresaSeq";
import "./page.css";

export default function EmpresaHome() {
    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <img src="/img/HomeEmpresa.png" className="img-fluid mt-4" alt="Home Empresa" />
                    </div>
                    <div className="textoright col-12 col-md-6">
                        <p>
                            A CareerNest, agência de estágios mais eficiente, a partir de um processo prático, eficiente e seguro,
                            seleciona e gerencia os estagiários para sua empresa, unindo sempre inovação e tecnologia.
                        </p>
                    </div>
                </div>

                <CardEmpresa />

                <div className="bainner my-5">
                    <div className="row align-items-center">
                        <div className="textoright col-12 col-md-6 p-3">
                            <p>Oferecemos oportunidades reais de aprendizado e crescimento profissional desde o primeiro estágio.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="/img/BannerHomeEmpresa.png" className="img-fluid mt-4" alt="Banner Empresa" />
                        </div>
                    </div>
                </div>

                <div className="my-5 beneficios-section">
                    <h1 className="beneficios fw-bold text-center mb-4">Benefícios para Empresas</h1>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 text-center">
                            <img src="/img/HomeEmpresa2.png" className="img-fluid" alt="Imagem Benefícios" />
                        </div>

                        <div className="col-12 col-md-6">
                            <ul className="benefits-list">
                                <li>
                                    <i className="bi bi-megaphone-fill"></i>
                                    <span>Divulgação de vagas de forma gratuita ou personalizada.</span>
                                </li>
                                <li>
                                    <i className="bi bi-filter-square-fill"></i>
                                    <span>Filtros inteligentes por curso, instituição, região e habilidades.</span>
                                </li>
                                <li>
                                    <i className="bi bi-folder-symlink-fill"></i>
                                    <span>Acesso a banco de talentos com currículos sempre atualizados.</span>
                                </li>
                                <li>
                                    <i className="bi bi-tools"></i>
                                    <span>Processo seletivo ágil e eficiente, com ferramentas integradas.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <EmpresaSeq />
                </div>

                <div className="careernest mb-5 pb-5">
                    <h1>Por que escolher CareerNest</h1>
                    <p>Na CareerNest, entendemos que procurar emprego vai muito além de simplesmente enviar currículos.
                        É uma fase de expectativa, ansiedade e esperança. Por isso, criamos uma plataforma que coloca você,
                        o candidato, no centro de tudo. Nosso compromisso é oferecer uma experiência moderna, transparente
                        e humanizada — onde cada clique te aproxima de uma oportunidade real.</p>

                    <p>Ao contrário de outros sites, na CareerNest você não encontra vagas desatualizadas ou anúncios
                        duvidosos. Todas as empresas são verificadas, e cada vaga publicada passa por um processo de curadoria
                        para garantir que você esteja se candidatando a oportunidades legítimas.</p>

                    <p>Mais do que uma ferramenta de busca, queremos ser seus parceiros na evolução da carreira. Por isso,
                        oferecemos conteúdos exclusivos, dicas práticas, orientações de currículo e entrevistas, e muito mais.
                        Trabalhamos com tecnologia inteligente para conectar você a vagas que realmente combinam com seu perfil.</p>

                    <p>Na CareerNest, acreditamos que todo talento merece uma chance justa. Por isso, promovemos inclusão,
                        diversidade e equidade nas oportunidades que divulgamos, contribuindo para um mercado de trabalho
                        mais humano e acessível.</p>

                    <p>Escolher a CareerNest é escolher um caminho mais claro, mais leve e mais eficaz rumo à sua próxima
                        conquista profissional. Estamos aqui para caminhar com você — do primeiro cadastro até o “sim”
                        que pode mudar sua vida.</p>
                </div>

                 {/* Seção de Depoimentos */}
                <div className="depoimentos-section container my-5">
                 <h2 className="text-center mb-4 titulo-depoimentos">O que dizem os nossos parceiros</h2>

                 <div className="card-depoimento d-flex align-items-center ">
                     <div className="imagem-com-info">
                         <img src="/img/comentarios/MarianaSilva.png" alt="Mariana Silva" className="img-depoimento" />
                         <div className="info-depoimento">
                             <h6>Mariana Silva</h6>
                             <small>RH, TechNova</small>
                         </div>
                     </div>
                     <p className="comentario">
                         "A CareerNest nos ajudou a encontrar estagiários altamente qualificados de forma rápida e eficaz. 
                         A plataforma é muito intuitiva, o suporte é ágil e conseguimos reduzir o tempo do nosso processo seletivo pela metade. 
                         Estamos muito satisfeitos com os resultados!"
                     </p>
                 </div>

                 <div className="card-depoimento d-flex align-items-center">
                     <div className="imagem-com-info">
                         <img src="/img/comentarios/CarlosMendes.png" alt="Carlos Mendes" className="img-depoimento" />
                         <div className="info-depoimento">
                             <h6>Carlos Mendes</h6>
                             <small>Diretor, InovaCorp</small>
                         </div>
                     </div>
                     <p className="comentario">
                         "A plataforma da CareerNest é intuitiva e o suporte é excelente. 
                         Conseguimos divulgar vagas personalizadas para nossos projetos e atrair candidatos com o perfil ideal. 
                         Hoje, consideramos a CareerNest uma parceira essencial em nosso processo de recrutamento."
                     </p>
                 </div>

                 <div className="card-depoimento d-flex align-items-center">
                     <div className="imagem-com-info">
                         <img src="/img/comentarios/FernandaLopes.png" alt="Fernanda Lopes" className="img-depoimento" />
                         <div className="info-depoimento">
                             <h6>Fernanda Lopes</h6>
                             <small>Coordenadora, BioStartups</small>
                         </div>
                     </div>
                     <p className="comentario">
                         "Recomendo a CareerNest para qualquer empresa que deseja contratar estagiários com agilidade e confiança. 
                         A curadoria das vagas garante candidatos engajados e qualificados, e o processo é muito mais simples e rápido. 
                         Nos ajudou a crescer nossa equipe com segurança."
                     </p>
                 </div>
             </div>
         </div>
     </>
 );
}