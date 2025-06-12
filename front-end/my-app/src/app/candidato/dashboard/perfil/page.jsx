"use client"
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Styles from "./page.module.css";
import ModalEditCandidato from "@/components/ModalEditarPerfilCandidato/page";

export default function PerfilCandidato() {
  const [candidatoData, setCandidatoData] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const API_URL = "http://localhost:3001";

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setErro("Usuário não autenticado");
      setCarregando(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const id = decoded.id;

      fetch(`${API_URL}/candidatos/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Erro ao buscar candidato");
          return res.json();
        })
        .then((data) => {
          setCandidatoData(data);
        })
        .catch((err) => {
          setErro("Erro ao buscar dados do candidato.");
          console.error(err);
        })
        .finally(() => setCarregando(false));


    }
    catch (err) {
      console.error(err)
      return
      setCarregando(false)
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      setErro("Usuário não autenticado");
      setCarregando(false);
      return;
    }
  
    const fetchData = async () => {
      try {
        const decoded = jwtDecode(token);
        const id = decoded.id;
  
        const candidatoRes = await fetch(`${API_URL}/candidatos/${id}`);
        if (!candidatoRes.ok) throw new Error("Erro ao buscar candidato");
        const candidato = await candidatoRes.json();
  
        const enderecoRes = await fetch(`${API_URL}/endereco/candidato/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!enderecoRes.ok) throw new Error("Erro ao buscar endereço do candidato");
        const endereco = await enderecoRes.json();
  
        setCandidatoData({ ...candidato, endereco });
  
      } catch (err) {
        console.error(err);
        setErro("Erro ao carregar dados do candidato.");
      } finally {
        setCarregando(false);
      }
    };
  
    fetchData();
  }, []);
  


  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p className="text-danger">{erro}</p>;
  if (!candidatoData) return <p>Nenhum dado encontrado</p>;

  let skills = [];
  try {
    skills = candidatoData.skills ? JSON.parse(candidatoData.skills) : [];
  } catch {
    skills = [];
  }

  return (
    <div className="container perfil-candidato p-4 mt-4 bg-white rounded shadow-sm">
      <div className="Perfil d-flex justify-content-between align-items-center">
        <h1 className="mb-4">Perfil</h1>
        <ModalEditCandidato candidato={candidatoData} />
      </div>

      <hr />
      <div className="py-3">
        <h5 className={Styles.titulos}>Descrição</h5>
        <p>{candidatoData.descricao}</p>
      </div>
      <hr />
      <div className="row mb-3 mt-5">
        <div className="col-md-6">
          <h5 className={Styles.titulos}>Email</h5>
          <p className="text-break">{candidatoData.email}</p>
        </div>
        <div className="col-md-6">
          <h5 className={Styles.titulos}>Telefone</h5>
          <p>{candidatoData.telefone}</p>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <h5 className={Styles.titulos}>Curso</h5>
          <p>{candidatoData.curso}</p>
        </div>
        <div className="col-md-6">
          <h5 className={Styles.titulos}>Gênero</h5>
          <p>{candidatoData.genero}</p>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <h5 className={Styles.titulos}>LinkedIn</h5>
          <a
            href={candidatoData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            {candidatoData.linkedin}
          </a>
        </div>
        <div className="col-md-6">
          <h5 className={Styles.titulos}>Educação</h5>
          <p>{candidatoData.educacao}</p>
        </div>
      </div>

      <div className="mb-3">
        <h5 className={Styles.titulos}>Habilidades</h5>
        {skills.length > 0 ? (
          <ul className={`${Styles.skillslist} d-flex flex-wrap p-0 mt-4`}>
            {skills.map((skill, i) => (
              <li key={i} className="list-inline-item badge me-2 mb-2">
                {skill}
              </li>
            ))}
          </ul>
        ) : (
          <p>Sem skills cadastradas.</p>
        )}
      </div>



    </div>
  );
}
