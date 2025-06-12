
export default function EtapaSenha({ dados, setDados, setRetorno, finalizar }) {


    async function handleSubmit(e) {
        e.preventDefault();
        if (dados.senha !== dados.confirmarSenha) {
            setRetorno({ status: "erro", mensagem: "As senhas não coincidem" });
            return;
        }
        finalizar();
    }

    return (
        <div className="row d-flex justify-content-center p-3">
            <h3>Crie uma Senha</h3>
            <div className="col-10 col-lg-8 col-xl-6 p-3 row">
                <form className="cadastro-form" onSubmit={handleSubmit}>
                    <div className="mb-3 col-12">
                        <label htmlFor="senha" className="form-label form">
                            Senha
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="senha"
                            minLength={3}
                            value={dados.senha}
                            onChange={(e) => setDados({ ...dados, senha: e.target.value })}
                        />
                    </div>
                    <div className="mb-3 col-12">
                        <label htmlFor="confirmarSenha" className="form-label form">
                            Confirme sua Senha
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            minLength={3}
                            id="confirmarSenha"
                            value={dados.confirmarSenha}
                            onChange={(e) =>
                                setDados({ ...dados, confirmarSenha: e.target.value })
                            }
                        />
                    </div>

                    <button
                        className="found btn btn-primary text-align-start"
                        type="submit"
                    >
                        Finalizar
                    </button>

                </form>
            </div>
        </div>
    );
}
