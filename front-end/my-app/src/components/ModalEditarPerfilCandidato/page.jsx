import { useEffect, useState, useRef } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Styles from './page.module.css';

function ModalEditCandidato({ candidato }) {
  const [lgShow, setLgShow] = useState(false);
  const previousLgShow = useRef(false);
  const previousCep = useRef('');


  const genero = [
    { value: "Feminino", label: "Feminino" },
    { value: "Masculino", label: "Masculino" },
  ];

  const { register, control, reset, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      data_nascimento: '',
      curso: '',
      genero: '',
      linkedin: '',
      skills: [{ value: '' }],
      educacao: '',
      descricao: '',
      endereco: {
        cep: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''
      }
    }
  });

  const { fields: skillsFields, append: appendSkill, remove: removeSkill } = useFieldArray({ control, name: "skills" });

  const parseArray = (str) => {
    try {
      const arr = JSON.parse(str);
      if (Array.isArray(arr)) {
        return arr.map(skill => ({ value: skill }));
      }
      return [{ value: '' }];
    } catch {
      return [{ value: '' }];
    }
  };


  const cep = watch('endereco.cep');

  useEffect(() => {
    if (!previousLgShow.current && lgShow && candidato) {
      reset({
        nome: candidato?.nome || '',
        cpf: candidato?.cpf || '',
        email: candidato?.email || '',
        telefone: candidato?.telefone || '',
        data_nascimento: candidato?.data_nascimento ? candidato.data_nascimento.split('T')[0] : '',
        curso: candidato?.curso || '',
        genero: candidato?.genero || '',
        linkedin: candidato?.linkedin || '',
        skills: parseArray(candidato?.skills || '[]'),
        educacao: candidato?.educacao || '',
        descricao: candidato?.descricao || '',
        endereco: {
          cep: candidato?.endereco?.cep || '',
          logradouro: candidato?.endereco?.logradouro || '',
          numero: candidato?.endereco?.numero || '',
          bairro: candidato?.endereco?.bairro || '',
          cidade: candidato?.endereco?.cidade || '',
          estado: candidato?.endereco?.estado || ''
        }
      });
    }
    previousLgShow.current = lgShow;
  }, [lgShow, candidato, reset]);


  useEffect(() => {
    const cleanCep = cep?.replace(/\D/g, '');
  
    if (
      cleanCep.length === 8 &&
      previousCep.current !== '' && 
      cleanCep !== previousCep.current
    ) {
      setValue('endereco.numero', '');
    }
  
    if (cleanCep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cleanCep}/json`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.erro) {
            setValue('endereco.logradouro', data.logradouro);
            setValue('endereco.bairro', data.bairro);
            setValue('endereco.cidade', data.localidade);
            setValue('endereco.estado', data.uf);
          }
        });
    }
  
    previousCep.current = cleanCep;
  
  }, [cep, setValue]);
  


  const onSubmit = async (data) => {
    try {
      const API_URL = 'http://localhost:3001';
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Token não encontrado. Faça login novamente.");
        return;
      }

      const id = candidato.id;

      const response = await fetch(`${API_URL}/candidatos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          cpf: data.cpf,
          nome: data.nome,
          email: data.email,
          telefone: data.telefone,
          data_nascimento: data.data_nascimento,
          curso: data.curso,
          genero: data.genero,
          linkedin: data.linkedin,
          skills: JSON.stringify(data.skills.map(s => s.value)),
          educacao: data.educacao,
          descricao: data.descricao,
          endereco: {
            cep: data.endereco.cep,
            logradouro: data.endereco.logradouro,
            numero: data.endereco.numero,
            bairro: data.endereco.bairro,
            cidade: data.endereco.cidade,
            estado: data.endereco.estado
          }
        })
      });

      if (!response.ok) throw new Error("Erro ao atualizar candidato");

      const resultado = await response.json();
      console.log("Candidato atualizado:", resultado);
      alert("Candidato atualizado com sucesso!");
      setLgShow(false);

    } catch (error) {
      console.error("Erro ao atualizar candidato:", error);
      alert("Erro ao atualizar candidato.");
    }
  };

  return (
    <>
      <Button onClick={() => setLgShow(true)} className={`${Styles.buttonEditar} border-0 text-light`}>
        Editar perfil
      </Button>

      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Editar perfil</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" {...register('nome')}
              required />
              
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>CPF</Form.Label>
              <Form.Control {...register('cpf')} disabled />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" {...register('email')}
              required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control {...register('telefone')} 
              required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control type="date" {...register('data_nascimento')}
              required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Curso</Form.Label>
              <Form.Control {...register('curso')} 
              required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gênero</Form.Label>
              <Form.Select {...register('genero')} required>
                {genero.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>LinkedIn</Form.Label>
              <Form.Control type="url" {...register('linkedin')}  required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Habilidades</Form.Label>
              {skillsFields.map((field, index) => (
                <div key={field.id} className="d-flex mb-2 align-items-center">
                  <Form.Control
                    {...register(`skills.${index}.value`)}
                    defaultValue={field.value}
                  />
                  {index > 0 && (
                    <Button variant="danger" className={Styles.btnExcluir} onClick={() => removeSkill(index)}>
                      <i className="bi bi-trash"></i>
                    </Button>
                  )}
                </div>
              ))}
              <Button className={Styles.btnAdicionar} onClick={() => appendSkill({ value: '' })}>
                + Adicionar skill
              </Button>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Educação</Form.Label>
              <Form.Control {...register('educacao')} 
              required/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} {...register('descricao')} 
              required/>
            </Form.Group>
            <div className="row d-flex flex-column flex-md-row">
              <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>CEP</Form.Label>
                <Form.Control {...register('endereco.cep')} 
                required/>
              </Form.Group>

              <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>Cidade</Form.Label>
                <Form.Control {...register('endereco.cidade')}
                required />
              </Form.Group>
            </div>

            <div className="row d-flex flex-column flex-md-row">
              <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>Bairro</Form.Label>
                <Form.Control {...register('endereco.bairro')}
                required />
              </Form.Group>

              <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>Estado</Form.Label>
                <Form.Control {...register('endereco.estado')} 
                required/>
              </Form.Group>
            </div>

            <div className="row d-flex flex-column flex-md-row">
              <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>Rua</Form.Label>
                <Form.Control {...register('endereco.logradouro')}
                required />
              </Form.Group>

              <Form.Group className="mb-3 col-12 col-md-6">
                <Form.Label>Número</Form.Label>
                <Form.Control {...register('endereco.numero')}
                required />
              </Form.Group>
            </div>




            <Modal.Footer>
              <Button type="submit" className={Styles.buttonSave}>Salvar alterações</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalEditCandidato;

