"use client"
import "./home.css";
import Link from "next/link";
import VagasHome from "@/components/VagasHome/VagasHome.jsx";
import PerguntasFrequentes from '@/components/PerguntasFrequentes/PerguntasFrequentes.jsx';
import CarrosselEmpresas from "@/components/CarrosselEmpresas/CarrosselEmpresa";

export default function Home() {

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="textoleft col-12 col-md-6">
            <p>Cadastre seu currículo no portal e tenha acesso a milhares de oportunidades de estágio e emprego!</p>
            <Link href="/vagas" className="found text-align-start">
              Encontrar minha vaga!
            </Link>

          </div>

          <div className="col-12 col-md-6">
            <img src="/img/banner/banner1.png" className="img-fluid mt-4" alt="..." />
          </div>
        </div>
        <div className="p-3 mt-5">
          <h2 className="procura fw-bold">Comece sua carreira pela <span className="spanTitle">CareerNest</span></h2>
        </div>



        {/* <cardHome /> */}
        <div className="container d-flex flex-wrap py-4 mb-5">
          <VagasHome />

        </div>

        <div className="p-3 mt-5 mb-5">
          <h2 className="procura fw-bold">Cadastre-se gratuitamente!</h2>
          <h4 className="procura fw-bold">aproveite essa <span className="spanTitle">oportunidade</span> imperdível!</h4>
        </div>
        <div className="timeline container position-relative">
          <div className="linha-vertical-topo rounded-4"></div>
          <div className="linha-central-horizontal rounded-4"></div>
          <div className="linha-vertical-base rounded-4"></div>

          {/* box1 */}
          <div className="row align-items-center timeline-item">
            <div className="col-12 col-md-6 position-relative img-container">
              <div className='fundo-image'></div>
              <img className="apresentacao img-fluid rounded-4 position-relative " src='./img/apresentacao/imagem-1.png' alt="Estudante" />
            </div>
            <div className="col-12 col-md-6 bg-branco p-4 rounded-3">
              <h3 className="titlebox fw-bold text-teal">
                Faça o <span className="spanTitle boxspan">seu</span> futuro
              </h3>
              <p className="paragrafozinho fs-5 py-2">
                Estagiar é a chance de aprender na prática, crescer profissionalmente e abrir portas.
                Dê o primeiro passo agora e construa o seu caminho.
              </p>
            </div>
          </div>

          {/* box2 */}
          <div className="row align-items-center timeline-item">
            <div className="col-12 col-md-6 position-relative img-container">
              <div className='fundo-image'></div>
              <img className="apresentacao img-fluid rounded-4 position-relative " src='./img/apresentacao/imagem-2.png' alt="Estudante" />
            </div>
            <div className="col-12 col-md-6 bg-branco p-4 rounded-3">
              <h3 className="titlebox fw-bold text-teal">
                Programa de Estágio
              </h3>
              <p className="paragrafozinho fs-5 py-2">
                Está estudando? Vem colocar em prática as teorias do seu
                curso em um Programa de Estágio que é a sua cara.
              </p>
            </div>
          </div>
          {/* box3 */}
          <div className="row align-items-center timeline-item">
            <div className="col-12 col-md-6 position-relative img-container">
              <div className='fundo-image'></div>
              <img className="apresentacao img-fluid rounded-4 position-relative " src='./img/apresentacao/imagem-3.png' alt="Estudante" />
            </div>
            <div className="col-12 col-md-6 bg-branco p-4 rounded-3">
              <h3 className="titlebox fw-bold text-teal">Jovem aprendiz</h3>
              <p className="paragrafozinho fs-5 py-2">
                Tem entre 14 e 24 anos e quer entrar no mercado de trabalho? O programa Jovem Aprendiz foi feito pra você, mesmo que não
                esteja mais estudando.
              </p>
            </div>
          </div>
          {/* box4 */}
          <div className="row align-items-center timeline-item">
            <div className="col-12 col-md-6  position-relative img-container">
              <div className='fundo-image'></div>
              <img className="apresentacao img-fluid rounded-4 position-relative" src="./img/apresentacao/imagem-4.png" alt="estudante" />
            </div>
            <div className="col-12 col-md-6 bg-branco p-4 rounded-3">
              <h3 className="titlebox fw-bold text-teal text-md-start">
                Dê o primeiro passo para <span className="spanTitle boxspan">conquistar</span> a vaga dos seus sonhos
              </h3>
              <ul className="text-md-justify">
                <dd><i className="checklist bi bi-check-circle-fill"></i> Cadastro gratuito</dd>
                <dd><i className="checklist bi bi-check-circle-fill"></i> Boletim com vagas abertas</dd>
                <dd><i className="checklist bi bi-check-circle-fill"></i> Acesso com vagas exclusivas</dd>
                <dd><i className="checklist bi bi-check-circle-fill"></i> Vagas remuneradas</dd>
              </ul>
              <button className="found btn btn-primary text-align-start" type="submit">
                Encontrar minha vaga!
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="p-3 mt-5 text-center">
          <h2 className="procura fw-bold">O que você procura? Escolha um de nossos portais</h2>
          <p className="subtitulopage fw-bold">
            A <span className="spanTitle fw-bold text-warning">CareerNest</span> oferece soluções para estudantes, empresas e instituições de ensino. Escolha abaixo o portal ideal para a sua necessidade
          </p>
        </div>

        <div className="row d-flex py-5 align-items-center justify-content-center ">
          {/* Portal Empresa */}
          <div className="col-12 col-md-4 d-flex justify-content-center mb-4 mb-md-0">
            <Link href="/login/empresa" className="text-decoration-none">
              <div className="portaiscard card text-bg-transparent border-0" style={{ maxWidth: "100%", width: "350px" }}>
                <img src="./img/portalEmpresa.png" className="card-img rounded-4" alt="Portal Empresa" />
                <div className="card-img-overlay d-flex flex-column-reverse">
                  <h5 className="titulocard card-title text-white fw-bold fs-3">Portal Empresa</h5>
                </div>
              </div>
            </Link>
          </div>

          {/* Portal Candidato */}
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <Link href="/login/candidato" className="text-decoration-none">
              <div className="portaiscard card text-bg-transparent border-0" style={{ maxWidth: "100%", width: "350px" }}>
                <img src="./img/portalCandidato.png" className="card-img rounded-4" alt="Portal Candidato" />
                <div className="card-img-overlay d-flex flex-column-reverse">
                  <h5 className="titulocard card-title text-white fw-bold fs-3">Portal Estudante</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="boxEmpresa container-fluid mt-5 mb-3">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-md-4 mt-4  d-flex d-none d-lg-block">
            <img src="./img/VagasEstagios.png" className="img-fluid md-none" alt="imagem figurativa da empresa" style={{ width: 500 }} />
          </div>
          <div className="col-12 col-md-6 m-4 d-flex justify-content-center">
            <div className="bg-transparent w-sm-200 w-md-40" style={{ MaxWidth: '100px', height: '100%' }}>
              <div className="cardBody card-body p-5">
                <h5 className="card-title" style={{ fontSize: '40px', color: ' #f29325', marginBottom: 10, fontFamily: 'poppins' }}>A CarreerNest</h5>
                <p style={{ fontSize: '20px', color: 'rgb(255, 246, 236)', fontFamily: 'poppins' }}>A <span>CareerNest</span> é reconhecida em todo Brasil pela excelência na administração de estagiários. Oferecemos o melhor serviço de divulgação de vagas, recrutamento e  seleção dos candidatos com o permanente acompanhamento de todos os processos.</p>
                <p style={{ fontSize: '20px', color: 'rgb(255, 246, 236)', fontFamily: 'poppins' }}>Somos uma fábrica de realizar sonhos e <span>desde 2009</span> trabalhamos para entregar a melhor solução na administração de estágios, o que nos torna líder no segmento. Coloque sua empresa em boas mãos e não tenha dor de cabeça. Contrate os melhores estagiários com a Super Estágios.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-5 mb-3">
        <div className="perguntas container text-center p-2">
          <h1 className='pfHome fw-bold'>Perguntas Frequentes</h1>
        </div>
        <PerguntasFrequentes />
      </div>
      <div className="caixaLaranja bg-laranja container-fluid p-3 mb-5">
        <div className="container">
          <div className="row p-3 my-4">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <h1 className='titulograndemenor fw-bold '>Existimos para <span className='laranjinha fw-bold ' style={{ color: 'rgb(255, 203, 143)' }}>apoiar a juventude</span> a conquistar o mundo do trabalho </h1>
            </div>
            <div className="col-md-6 text-align-justify w-20">
              <p style={{ color: 'rgb(255, 246, 236)', fontFamily: 'poppins', fontSize: '23px' }}>Sempre conectado com o futuro, somos referência nacional em assistência social e reconhecidos como uma instituição pioneira e protagonista no processo de seleção, contratação, inclusão, gestão e desenvolvimento de jovens através dos programas de aprendizagem e estágio.</p>
              <p style={{ color: 'rgb(255, 246, 236)', fontFamily: 'poppins', fontSize: '23px' }}>Em mais de meio século de história, ajudamos a inserir mais de 6 milhões de jovens no universo profissional por meio de parcerias com empresas de diversos segmentos e órgãos públicos que compartilham e acreditam em nossa missão.</p>
            </div>
          </div>
        </div>
      </div>

      {/* missão visão e valores */}
      <div className="borda container p-4 py-3 mb-5 border-top border-bottom border-3 " style={{ height: 'auto' }}>
        <div className="mvv container text-center p-4">
          <h1 className='mvvtitle fw-bold'>Nossa missão, visão e valores</h1>
          <p className="subtitulo">"Porque quem voa alto começa com um bom ninho."</p>
        </div>
        <div className="caixamvv row d-flex flex-wrap p-4 my-2 mb-5 rounded-5">
          <div className="col-md-4 text-center">
            <i className="bi bi-clipboard-check" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}></i>
            <div>
              <p className="mb-3">Missão</p>
              <p className="mb-0 text-align-justify">Empoderar estudantes a iniciarem sua jornada profissional com confiança. Na CareerNest, nos dedicamos a tornar
                o acesso ao mercado de trabalho mais simples, acessível e acolhedor, ajudando jovens a transformarem potencial em realização
                profissional desde o estágio.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-lightbulb" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}></i>
            <div>
              <p className="mb-3">Visão</p>
              <p className="mb-0">Ser a principal plataforma de descoberta e desenvolvimento de talentos no Brasil, revolucionando o acesso
                ao mercado de trabalho para estudantes e contribuindo para a construção de carreiras de impacto desde o primeiro passo.</p>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <i className="bi bi-heart" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}></i>
            <div>
              <p className="mb-3">Valores</p>
              <p className="mb-0 w-20">Acreditamos que cada começo importa. Valorizamos a escuta, o cuidado e o suporte a quem está dando seus
                primeiros passos profissionais. Usamos tecnologia para criar conexões humanas e transformar o processo de busca por estágio em
                algo simples e relevante.</p>
            </div>
          </div>
        </div>
      </div>
      <section id="empresas-carrossel">
        <div className="caroussel-container mb-5 mt-5">
          <div className="empresas container text-center p-2 mb-4 ">
            <h1 className='tituloempresas fw-bold'>Seja parte das nossas <span className="spanempresas fw-bold">empresas colaboradoras</span></h1>
            <p className='subtitulo mb-4'>"Construa o amanhã com quem está começando hoje. Cadastre sua empresa!"</p>
          </div>
          <div className="caroussel-content d-flex gap-20">
            <CarrosselEmpresas />
          </div>
        </div >
      </section>






    </>
  )
}