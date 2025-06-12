'use client'
import './styleContato.css'
import PerguntasFrequentes from '@/components/PerguntasFrequentes/PerguntasFrequentes.jsx';

export default function Home() {
    const contatos = [
        {
            tipo: 'Telefone',
            icone: 'bi-telephone-fill',
            infos: ['11 4780-3589', '11 94739-0477'],
        },
        {
            tipo: 'Email',
            icone: 'bi-envelope-fill',
            infos: ['careernest@gmail.com', 'careernest@outlook.com'],
        },
        {
            tipo: 'Localização',
            icone: 'bi-geo-alt-fill',
            infos: [
                'Rua São Cristóvão, 1233,',
                'Bairro Chora Menino,',
                'São Lucas do Oeste.',
            ],
        },
    ];
    return (
        <>
            <div className="bg-verde-gradiante container-fluid p-3">
                <div className="container d-flex w-75 flex-column flex-wrap justify-content-center align-items-center p-3 text-center text-light">
                    <div className="my-3">
                        <h1 className='titulogrande fs-1 fw-bold  text-center'>Contato</h1>
                        <p >Esta é a nossa página de contato. Se você tiver dúvidas, sugestões ou quiser falar conosco por qualquer motivo, entre em contato! Estamos à disposição para ajudar e responder o mais breve possível.</p>
                        <p>Preencha o formulário ou utilize os canais disponíveis. Será um prazer falar com você!</p>
                    </div>
                </div>
            </div>

            <div className="containergrande container py-5 ">
                <div className="row d-flex justify-content-center mb-5">
                    {contatos.map((contato, index) => (
                        <div className="col-md-4 d-flex mb-3" key={index}>
                            <div className="bg-teal w-100 d-flex flex-column justify-content-between text-white text-center p-4 rounded-4">
                                <i className={`bi ${contato.icone} fs-2`}></i>
                                <h5 className="mt-3">{contato.tipo}</h5>
                                {contato.infos.map((info, i) => (
                                    <div key={i}>{info}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mb-4">
                    <h1 className="text-orange fw-bold">Entre em Contato</h1>
                    <p className="text-orange">
                        Está com alguma dúvida ou precisa de ajuda? Fale com a gente,<br />
                        estamos aqui para te apoiar!
                    </p>
                </div>

                <div className="bg-orange rounded-4 p-4 mx-auto" style={{ maxWidth: 600 }}>
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="tel" className="form-control" placeholder="Telefone" />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Nome" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" placeholder="Mensagem" rows="4"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-light px-4">Enviar</button>
                        </div>
                    </form>
                </div>

                <div className="text-center mt-4">
                    <a
                        href="https://www.linkedin.com/in/seu-perfil"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-linkedin mx-2 fs-4 text-orange"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/seu-perfil"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-instagram mx-2 fs-4 text-orange"></i>
                    </a>
                    <a
                        href="https://wa.me/SEUNUMERO"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-whatsapp mx-2 fs-4 text-orange"></i>
                    </a>
                </div>

            </div>
            <div className='container d-md-none d-flex justify-content-center align-items-center flex-column p-3 mb-3'>
                <h1 className='titulograndemenor fw-bold'>Encontre-nos aqui!</h1>
                <iframe
                    className='container'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8653098297377!2d-46.561209825840436!3d-23.644994164667832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4328c992748f%3A0xcea3c3e698444297!2sSENAI%20S%C3%A3o%20Caetano%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1748019288434!5m2!1spt-BR!2sbr"
                    width={600}
                    height={250}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className='container d-none d-md-flex d-flex justify-content-center align-items-center flex-column p-3 mb-3'>
                <h1 className='titulograndemenor fw-bold'>Encontre-nos aqui!</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8653098297377!2d-46.561209825840436!3d-23.644994164667832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4328c992748f%3A0xcea3c3e698444297!2sSENAI%20S%C3%A3o%20Caetano%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1748019288434!5m2!1spt-BR!2sbr"
                    width={600}
                    height={250}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className="mb-3">
                <div className="perguntas container text-center p-2">
                    <h1 className='titulograndemenor fw-bold'>Perguntas Frequentes</h1>
                </div>
                <PerguntasFrequentes />
            </div>


        </>
    )
}