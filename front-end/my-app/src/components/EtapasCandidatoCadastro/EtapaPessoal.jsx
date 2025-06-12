import Select from "react-select";
export default function EtapaPessoal({ dados, setDados, setRetorno, proxima }) {
    function handleSubmit(e) {
        e.preventDefault();
        if (!dados.nome || !dados.email || !dados.cpf) {
            setRetorno({ status: "erro", mensagem: "Preencha todos os campos obrigatórios" });
            return;
        }
        proxima();
    }
    const ferramentas = [
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'TypeScript', label: 'TypeScript' },
        { value: 'Python', label: 'Python' },
        { value: 'Java', label: 'Java' },
        { value: 'C++', label: 'C++' },
        { value: 'C#', label: 'C#' },
        { value: 'PHP', label: 'PHP' },
        { value: 'Ruby', label: 'Ruby' },
        { value: 'Go', label: 'Go' },
        { value: 'SQL', label: 'SQL' },
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'React', label: 'React' },
        { value: 'Next.js', label: 'Next.js' },
        { value: 'Node.js', label: 'Node.js' },
        { value: 'Express', label: 'Express' },
        { value: 'MySQL', label: 'MySQL' },
        { value: 'MongoDB', label: 'MongoDB' },
        { value: 'Docker', label: 'Docker' },
        { value: 'Git', label: 'Git' },
        { value: 'Figma', label: 'Figma' },
        { value: 'AWS', label: 'AWS' },
        { value: 'Linux', label: 'Linux' },
    ]
    return (
        <div className="row d-flex justify-content-center p-3">
            <h3>Informações Pessoais</h3>
            <div className="col-10 col-lg-8 col-xl-6 p-3 row">
                <form className="cadastro-form" onSubmit={handleSubmit}>
                    <div className="mb-3 col-12">
                        <label htmlFor="nome" className="form-label form">
                            Nome Completo
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            value={dados.nome}
                            onChange={(e) =>
                                setDados({ ...dados, nome: e.target.value })
                            }
                            required
                        />
                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="descricao" className="form-label form">
                            Descrição
                        </label>
                        <textarea
                            className="form-control"
                            id="descricao"
                            value={dados.descricao}
                            onChange={(e) =>
                                setDados({ ...dados, descricao: e.target.value })
                            }
                            aria-describedby="descricaoHelp"
                            required
                        />
                        <div id="descricaoHelp" className="form-text">
                            Adicione uma breve descrição ao seu perfil (os recrutadores lerão isso)
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="curso" className="form-label">
                            Curso
                        </label>
                        <select
                            className="form-select"
                            id="curso"
                            value={dados.curso}
                            onChange={(e) =>
                                setDados({ ...dados, curso: e.target.value })
                            }
                            required
                        >
                            <option value="">Selecione um curso</option>
                            <option value="Análise e Desenvolvimento de Sistemas">Análise e Desenvolvimento de Sistemas</option>
                            <option value="Banco de Dados">Banco de Dados</option>
                            <option value="Ciência da Computação">Ciência da Computação</option>
                            <option value="Ciência de Dados">Ciência de Dados</option>
                            <option value="Design Digital">Design Digital</option>
                            <option value="Desenvolvimento de Sistemas">Desenvolvimento de Sistemas</option>
                            <option value="Engenharia da Computação">Engenharia da Computação</option>
                            <option value="Engenharia de Produção">Engenharia de Produção</option>
                            <option value="Engenharia de Software">Engenharia de Software</option>
                            <option value="Estatística">Estatística</option>
                            <option value="Publicidade e Propaganda">Publicidade e Propaganda</option>
                            <option value="Redes de Computadores">Redes de Computadores</option>
                            <option value="Sistemas de Informação">Sistemas de Informação</option>
                            <option value="Sistemas para Internet">Sistemas para Internet</option>
                            <option value="Suporte Técnico em Informática">Suporte Técnico em Informática</option>
                            <option value="TI">TI</option>

                        </select>

                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="educacao" className="form-label form">
                            Educação
                        </label>
                        <input
                            className="form-control"
                            list="educacao"
                            name="educacao"
                            placeholder="Digite o nome da sua instituição de ensino"
                        />
                        <datalist id="educacao">
                                {/* Institutos Federais */}
                                <option value="Instituto Federal de São Paulo - IFSP Campus São Paulo"></option>
                                <option value="Instituto Federal de São Paulo - IFSP Campus Guarulhos"></option>
                                <option value="Instituto Federal de São Paulo - IFSP Campus Suzano"></option>
                                <option value="Instituto Federal de São Paulo - IFSP Campus São Carlos"></option>
                                <option value="Instituto Federal de São Paulo - IFSP Campus Campinas">
                                    {/* FATECs */}
                                </option>
                                <option value="FATEC São Paulo"></option>
                                <option value="FATEC Zona Leste"></option>
                                <option value="FATEC São Caetano do Sul"></option>
                                <option value="FATEC Guarulhos"></option>
                                <option value="FATEC Tatuapé Victor Civita"></option>
                                <option value="FATEC Mogi das Cruzes"></option>
                                <option value="FATEC Praia Grande">{/* ETECs */}</option>
                                <option value="ETEC de Itaquera"></option>
                                <option value="ETEC Professor Aprígio Gonzaga"></option>
                                <option value="ETEC São Mateus"></option>
                                <option value="ETEC de Guaianases"></option>
                                <option value="ETEC da Zona Leste"></option>
                                <option value="ETEC Parque Belém"></option>
                                <option value="ETEC Martin Luther King"></option>
                                <option value="ETEC Albert Einstein"></option>
                                <option value="ETEC Jorge Street"></option>
                                <option value="ETEC Tiquatira"></option>
                                <option value="ETEC Guarulhos"></option>
                                <option value="ETEC Jaraguá"></option>
                                <option value="ETEC Cidade Tiradentes">{/* SENAI / SENAC */}</option>
                                <option value="SENAI São Paulo - Roberto Simonsen"></option>
                                <option value="SENAI Anchieta"></option>
                                <option value="SENAI Informática - Santa Cecília"></option>
                                <option value="SENAI Armando de Arruda Pereira"></option>
                                <option value="SENAI Mário Amato - São Bernardo do Campo"></option>
                                <option value="SENAI Suíço-Brasileira Paulo Ernesto Tolle"></option>
                                <option value="SENAC São Paulo"></option>
                                <option value="SENAC Santo Amaro"></option>
                                <option value="SENAC Lapa Tito"></option>
                                <option value="SENAC Lapa Scipião">{/* Universidades Públicas */}</option>
                                <option value="USP - Universidade de São Paulo"></option>
                                <option value="UNIFESP - Universidade Federal de São Paulo"></option>
                                <option value="UNESP - Universidade Estadual Paulista"></option>
                                <option value="UNICAMP - Universidade Estadual de Campinas">
                                    {/* Universidades Privadas */}
                                </option>
                                <option value="FIAP - Faculdade de Informática e Administração Paulista"></option>
                                <option value="Universidade Presbiteriana Mackenzie"></option>
                                <option value="PUC-SP - Pontifícia Universidade Católica de São Paulo"></option>
                                <option value="UNIP - Universidade Paulista"></option>
                                <option value="UNINOVE - Universidade Nove de Julho"></option>
                                <option value="Universidade Cruzeiro do Sul"></option>
                                <option value="Faculdade Impacta de Tecnologia"></option>
                                <option value="Faculdade das Américas - FAM"></option>
                                <option value="Faculdade Anhanguera São Paulo"></option>
                                <option value="FAAP - Fundação Armando Alvares Penteado"></option>
                                <option value="UNISAL - Centro Universitário Salesiano de São Paulo">
                                    {/* Centros Técnicos e Escolas com curso técnico em TI */}
                                </option>
                                <option value="Colégio Técnico da UNICAMP - COTUCA"></option>
                                <option value="Colégio Técnico Oswaldo Cruz"></option>
                                <option value="Colégio Técnico Bento Quirino"></option>
                                <option value="Colégio Objetivo - Paulista"></option>
                                <option value="Colégio Progresso - Campinas"></option>
                                <option value="Colégio ETAPA"></option>
                                <option value="Colégio Anglo São Paulo"></option>
                            </datalist>
                    </div>


                    <div className="mb-3 col-12">
                        <label htmlFor="email" className="form-label form">
                            Endereço de Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            value={dados.email}
                            onChange={(e) =>
                                setDados({ ...dados, email: e.target.value })
                            }
                            required
                        />
                        <div id="emailHelp" className="form-text">
                            Nunca vamos compartilhar seu e-mail com ninguém.
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-md-row">
                        <div className="mb-3 col-12 col-md-6 pe-0 pe-md-3">
                            <label htmlFor="cpf" className="form-label form">
                                CPF
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="cpf"
                                value={dados.cpf}
                                onChange={(e) => {
                                    const raw = e.target.value.replace(/\D/g, "").slice(0, 11);
                                    const formatted = raw.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
                                    setDados({ ...dados, cpf: formatted })
                                }
                                }
                                required
                            />
                        </div>
                        <div className="mb-3 col-12 col-md-6 ps-0 ps-md-3">
                            <label htmlFor="telefone" className="form-label form">
                                Telefone
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="telefone"
                                value={dados.telefone}
                                onChange={(e) => {
                                    const raw = e.target.value.replace(/\D/g, "").slice(0, 11);
                                    const formatted = raw.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");

                                    setDados({ ...dados, telefone: formatted })
                                }
                                }
                                required
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-md-row">
                        <div className="mb-3 col-12 col-md-6 pe-0 pe-md-3">
                            <label htmlFor="data_nascimento" className="form-label form">
                                Data de Nascimento
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="data_nascimento"
                                value={dados.data_nascimento}
                                onChange={(e) =>
                                    setDados({ ...dados, data_nascimento: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div className="mb-3 col-12 col-md-6 ps-0 ps-md-3 ">
                            <label htmlFor="genero" className="form-label form">
                                Gênero
                            </label>
                            <select
                                className="form-select"
                                id="genero"
                                value={dados.genero}
                                onChange={(e) =>
                                    setDados({ ...dados, genero: e.target.value })
                                }
                                required
                            >
                                <option value="" defaultValue={true}>Selecione *</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 col-12">
                        <label htmlFor="linkedin" className="form-label form">
                            LinkedIn
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="linkedin"
                            aria-describedby="linkedinHelp"
                            value={dados.linkedin}
                            onChange={(e) =>
                                setDados({ ...dados, linkedin: e.target.value })
                            }
                            required
                        />
                        <div id="linkedinHelp" className="form-text">
                            Insira o link completo do seu perfil (https://linkedin.com/in/.../)
                        </div>
                    </div>
                    <div className="mb-3 col-12">
                        <label htmlFor="skills" className="form-label form">
                            Linguagens e Ferramentas (selecione múltiplas)
                        </label>
                        <Select
                            isMulti
                            placeholder="Selecione..."
                            name="skills"
                            className="basic-multi-select"
                            classNamePrefix="select"
                            options={ferramentas}
                            value={ferramentas.filter(option => dados.skills?.includes(option.value))}
                            onChange={(options) => setDados({ ...dados, skills: options ? options.map(opt => opt.value) : [] })}
                        />
                    </div>



                    <button
                        className="found btn btn-primary text-align-start"
                        type="submit"
                    >
                        Continuar
                    </button>
                </form>
            </div>
        </div>
    );
}
