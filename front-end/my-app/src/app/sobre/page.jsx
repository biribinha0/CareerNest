import './styleSobre.css'


export default function Home() {
    return (
        <>
            <div className="banner-verde container-fluid d-flex align-items-center justify-content-center">
                <div className="container d-flex align-items-center justify-content-center p-4 ">
                    <div className="row">
                        <div className="titulo flex-1 justify-content-center align-items-center">
                            <h1 className='titulogrande fs-1 fw-bold  text-center'>Guiamos talentos e empresas para voarem longe!</h1>
                        </div>
                        <div className="gaivotas d-flex justify-content-center align-items-center">
                            <img src="/img/sobre/gaivotas.png" className='img-fluid' alt="" width={650} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="texto-querido-apresentacao container align-items-center my-3">
                <div className="boss row p-3">
                    <div className=" textoprincipal col-md-6 p-3 d-flex flex-column align-items-center justify-content-center">
                        <h2> <span className='fw-bold'>CarrerNest</span> nasceu com um propósito simples, mas poderoso:</h2>
                        <h1 className='titulograndemenor fw-bold '>Ser o ninho onde grandes carreiras começam a voar.</h1>
                    </div>
                    <div className="col-md-6 p-3 text-justify">
                        <p>Acreditamos que todo talento precisa de um ponto de partida — um ambiente seguro, acolhedor e repleto de oportunidades. É isso que somos: o ninho ideal para quem está iniciando sua jornada profissional. E, assim como os pássaros, chega o momento de abrir as asas e alçar voos mais altos.</p>
                        <p>Nossa plataforma conecta estudantes cheios de potencial a empresas que valorizam o crescimento, o aprendizado e a inovação. Não oferecemos apenas vagas de estágio — oferecemos caminhos, experiências e desafios reais que impulsionam o desenvolvimento pessoal e profissional de cada talento.</p>
                        <p>Para os estagiários, somos o primeiro passo. Para as empresas, somos a ponte para encontrar mentes novas, criativas e dispostas a aprender e crescer junto.</p>
                        <p>Aqui no CareerNest, cultivamos voos de sucesso — porque todo grande voo começa em um bom ninho.</p>
                    </div>
                </div>
            </div>
            <div className="bg-laranja container-fluid p-3">
                <div className="container">
                    <div className="row p-3 my-4">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <h1 className='titulograndemenor fw-bold'>Existimos para apoiar a juventude a conquistar o mundo do trabalho​ </h1>
                        </div>
                        <div className="col-md-6 text-justify">
                            <p>Sempre conectado com o futuro, somos referência nacional em assistência social e reconhecidos como uma instituição pioneira e protagonista no processo de seleção, contratação, inclusão, gestão e desenvolvimento de jovens através dos programas de aprendizagem e estágio.</p>
                            <p>Em mais de meio século de história, ajudamos a inserir mais de 6 milhões de jovens no universo profissional por meio de parcerias com empresas de diversos segmentos e órgãos públicos que compartilham e acreditam em nossa missão.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-3 my-2">
                <div className="borda container p-2  border-top border-bottom border-4 " style={{ height: 'auto' }}> 
                    <div className="bg-branco container d-flex justify-content-center  my-3" style={{ height: 'auto' }}>
                        <div className="oswaldo p-2 row">
                            <h2>PARA O FUTURO E ALÉM!</h2>

                        </div>
                        <div className="titulo-maior row text-dark p-2">
                            <h1 className='fw-bold titulogrande text-center'>Você pode contar com a CareerNest <span className='fw-bold'>sempre!</span> </h1>
                        </div>
                        <div className="row d-flex justify-content-center text-center p-2">
                            <p className='textodelimitado'>Um bom começo faz muita diferença pra toda a jornada, né? Por isso nós mostramos caminhos, resolvemos desafios e damos aquele gás nos primeiros passos. Guiamos talentos e empresas com o nosso conhecimento, ferramentas, experiência e vibração!</p>
                        </div>
                        <div className="row p-2 estrelas">
                            <div className="col-md-2 p-2 pt-5">Recrutamento e seleção de jovens aprendizes, estagiários e trainees</div>
                            <div className="col-md-2 p-2 pt-5">Equipe de especialistas que garante atendimento humanizado</div>
                            <div className="col-md-2 p-2 pt-5">Materiais exclusivos para ajudar na sua estratégia</div>
                            <div className="col-md-2 p-2 pt-5">Metodologias que garantem processos seletivos com mais diversidade e inclusão</div>
                            <div className="col-md-2 p-2 pt-5">Seleção com tecnologias do Metaverso e inteligência artificial</div>
                            <div className="col-md-2 p-2 pt-5">Acompanhamento contínuo para garantir a evolução profissional e a permanência no mercado</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-3 h-auto" style={{ backgroundColor: '#f5f0ef' }}>
                <div className="text-center p-4">
                    <h1 className='titulogrande fs-1 fw-bold my-3'>CareerNest:</h1>
                </div>
                <div className="container d-flex flex-wrap align-items-center justify-content-center p-4 my-2">
                    <div className="col-md-3 d-flex flex-column align-items-center text-center">
                        <i className="bi bi-emoji-laughing" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}></i>
                        <div>
                            <p className="mb-0">Tá com você. Sempre</p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column align-items-center text-center">
                        <i className="bi bi-check2-circle" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}></i>
                        <div>
                            <p className="mb-0">É simplesmente simples.</p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column align-items-center text-center">
                        <i className="bi bi-chat-heart" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}></i>
                        <div>
                            <p className="mb-0">Valoriza quem você é.</p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column align-items-center text-center">
                        <i className="bi bi-star" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}></i>
                        <div>
                            <p className="mb-0">Sabe o caminho pra te guiar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}