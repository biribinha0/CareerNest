'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import Styles from './page.module.css';

export default function Configuracoes() {
    const router = useRouter();
    const [empresa, setEmpresa] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const API_URL = 'http://localhost:3001';

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push('/');
            return;
        }

        const decoded = jwtDecode(token);
        const id = decoded.id;

        fetch(`${API_URL}/empresas/${id}`)
            .then(res => res.json())
            .then(data => {
                setEmpresa(data);
                reset({
                    nome: data.nome,
                    descricao: data.descricao,
                    cnpj: data.cnpj,
                    setor: data.setor,
                    email: data.email,
                    telefone: data.telefone
                });
            })
            .catch(err => console.error('Erro ao buscar dados da empresa:', err));
    }, [reset, router]);

    const onSubmit = async (data) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("Token não encontrado.");
                return;
            }


            const updatedData = {
                ...empresa,
                ...data
            };

            const response = await fetch(`${API_URL}/empresas/${empresa.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedData)
            });

            if (response.ok) {
                alert('Dados atualizados com sucesso!');
            } else {
                const err = await response.json();
                console.error('Erro ao atualizar empresa:', err);
                alert('Erro ao atualizar os dados.');
            }
        } catch (error) {
            console.error('Erro na atualização:', error);
            alert('Erro ao atualizar os dados.');
        }
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-end mb-3">
                <button className={Styles.BtnSair} onClick={() => {
                    localStorage.clear();
                    router.push('/');
                }}>
                    Sair <i className="bi bi-box-arrow-in-right"></i>
                </button>
            </div>
            <div className="rounded-5 pagina-ativa p-5">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-3">
                        <label className="form-label">Nome da Empresa</label>
                        <input className="form-control" {...register("nome", { required: true })} />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Descrição</label>
                    <textarea
                        className="form-control"
                        rows={1}
                        style={{ overflow: 'hidden', resize: 'none' }}
                        {...register("descricao")}
                        onInput={(e) => {
                            e.target.style.height = 'auto'; 
                            e.target.style.height = e.target.scrollHeight + 'px'; 
                        }}
                    />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">CNPJ</label>
                        <input className="form-control" {...register("cnpj")} disabled />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Setor</label>
                        <input className="form-control" {...register("setor")} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" {...register("email")} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Telefone</label>
                        <input className="form-control" {...register("telefone")} />
                    </div>

                    <div className="btnSalvar d-flex justify-content-center">
                        <button type="submit" className={Styles.btn}>Salvar Alterações</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
