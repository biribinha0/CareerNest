import { useEffect, useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { jwtDecode } from "jwt-decode";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Styles from './page.module.css';
import CurrencyInput from 'react-currency-input-field';

function ModalEditVaga({ vaga }) {

  const [lgShow, setLgShow] = useState(false);

  const idiomas = [
    { value: "Português", label: "Português" },
    { value: "Inglês básico", label: "Inglês básico" },
    { value: "Inglês técnico", label: "Inglês técnico" },
    { value: "Inglês", label: "Inglês" },
    { value: "Espanhol", label: "Espanhol" },
    { value: "Mandarim", label: "Mandarim" },
    { value: "Alemão", label: "Alemão" },
    { value: "Francês", label: "Francês" },
    { value: "Italiano", label: "Italiano" },
    { value: "Japonês", label: "Japonês" }
  ];

  const tipos = [
    { value: "Presencial", label: "Presencial" },
    { value: "Híbrido", label: "Híbrido" },
    { value: "Remoto", label: "Remoto" }
  ];

  const cursos = [
    { value: "Análise e Desenvolvimento de Sistemas", label: "Análise e Desenvolvimento de Sistemas" },
    { value: "Banco de Dados", label: "Banco de Dados" },
    { value: "Ciência da Computação", label: "Ciência da Computação" },
    { value: "Ciência de Dados", label: "Ciência de Dados" },
    { value: "Cursos correlatos", label: "Cursos correlatos" },
    { value: "Design Digital", label: "Design Digital" },
    { value: "Marketing Digital", label: "Marketing Digital" },
    { value: "Comunicação", label: "Comunicação" },
    { value: "Desenvolvimento de Sistemas", label: "Desenvolvimento de Sistemas" },
    { value: "Engenharia da Computação", label: "Engenharia da Computação" },
    { value: "Engenharia de Produção", label: "Engenharia de Produção" },
    { value: "Engenharia de Software", label: "Engenharia de Software" },
    { value: "Estatística", label: "Estatística" },
    { value: "Publicidade e Propaganda", label: "Publicidade e Propaganda" },
    { value: "Redes", label: "Redes de Computadores" },
    { value: "Sistemas de Informação", label: "Sistemas de Informação" },
    { value: "Sistemas para Internet", label: "Sistemas para Internet" },
    { value: "Suporte Técnico em Informática", label: "Suporte Técnico em Informática" },
    { value: "Técnico em Informática", label: "TI" }
  ];

  const { register, control, reset, handleSubmit, watch } = useForm({
    defaultValues: {
      titulo: '',
      descricao: '',
      tipo: '',
      funcao: '',
      remuneracao: '',
      carga_horaria: '',
      unidade_carga: 'h/dia',
      atividades: [{ value: '' }],
      requisitos: [{ value: '' }],
      beneficios: [{ value: '' }],
      idiomas: [{ value: '' }],
      cursoDesejado: [{ value: '' }]
    }
  });

  const { fields: atividadesFields, append: appendAtividade, remove: removeAtividade } = useFieldArray({ control, name: "atividades" });
  const { fields: requisitosFields, append: appendRequisito, remove: removeRequisito } = useFieldArray({ control, name: "requisitos" });
  const { fields: beneficiosFields, append: appendBeneficio, remove: removeBeneficio } = useFieldArray({ control, name: "beneficios" });
  const { fields: idiomasFields, append: appendIdioma, remove: removeIdioma } = useFieldArray({ control, name: "idiomas" });
  const { fields: cursosFields, append: appendCurso, remove: removeCurso } = useFieldArray({ control, name: "cursoDesejado" });

  const parseArray = (str) => {
    try {
      const first = JSON.parse(str);
      if (typeof first === "string") {
        return JSON.parse(first);
      }
      return first;
    } catch {
      return [];
    }
  };

  useEffect(() => {
    if (lgShow && vaga) {
      reset({
        titulo: vaga.titulo || '',
        descricao: vaga.descricao || '',
        tipo: vaga.tipo || '',
        funcao: vaga.funcao || '',
        remuneracao: vaga.remuneracao || '',
        carga_horaria: vaga.carga_horaria || '',
        unidade_carga: vaga.unidade_carga || 'h/dia',
        atividades: parseArray(vaga.atividades || '[""]').map(val => ({ value: val })),
        requisitos: parseArray(vaga.requisitos || '[""]').map(val => ({ value: val })),
        beneficios: parseArray(vaga.beneficios || '[""]').map(val => ({ value: val })),
        idiomas: parseArray(vaga.idiomas || '[""]').map(val => ({ value: val })),
        cursoDesejado: parseArray(vaga.curso_desejado || '[""]').map(val => ({ value: val })),
      });
    }
  }, [lgShow, vaga, reset]);

  const onSubmit = async (data) => {
    try {
      const API_URL = 'http://localhost:3001';
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Token não encontrado. Faça login novamente.");
        return;
      }

      const decoded = jwtDecode(token);
      const empresa_id = decoded.id;

      const response = await fetch(`${API_URL}/vagas/${vaga.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          empresa_id,
          titulo: data.titulo,
          descricao: data.descricao,
          tipo: data.tipo,
          funcao: data.funcao,
          remuneracao: data.remuneracao,
          carga_horaria: data.carga_horaria,
          unidade_carga: data.unidade_carga,
          atividades: JSON.stringify(data.atividades.map(item => item.value)),
          requisitos: JSON.stringify(data.requisitos.map(item => item.value)),
          beneficios: JSON.stringify(data.beneficios.map(item => item.value)),
          idiomas: JSON.stringify(data.idiomas.map(item => item.value)),
          curso_desejado: JSON.stringify(data.cursoDesejado.map(item => item.value))
        })
      });




      const resultado = await response.json();
      console.log('Vaga atualizada com sucesso:', resultado);
      alert('Vaga atualizada com sucesso!');
      setLgShow(false);
      
    } catch (error) {
      console.error('Erro ao atualizar a vaga:', error);
      alert('Erro ao atualizar a vaga.');
    }
  };



  return (
    <>
  <Button onClick={() => setLgShow(true)} className="border-0 bg-transparent text-dark">
    <i className=" bi bi-pencil p-2 fs-5"></i>
  </Button>
      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Editar vaga</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control  {...register('titulo')} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} {...register('descricao')} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Atividades</Form.Label>
              {atividadesFields.map((field, index) => (
                <div key={field.id} className="d-flex mb-2">
                  <Form.Control {...register(`atividades.${index}.value`)} />
                  {index > 0 && (
                    <Button variant="danger" className="deletar-botao ms-2 bg-danger" onClick={() => removeAtividade(index)}>
                      <i className={`${Styles.btnExcluir} bi bi-trash text-white `}></i>
                    </Button>
                  )}
                </div>
              ))}
              <Button className={Styles.btnAdicionar} onClick={() => appendAtividade({ value: '' })}>+ Adicionar</Button>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Requisitos</Form.Label>
              {requisitosFields.map((field, index) => (
                <div key={field.id} className="d-flex mb-2">
                  <Form.Control {...register(`requisitos.${index}.value`)} />
                  {index > 0 && (
                    <Button variant="danger" className="deletar-botao ms-2 bg-danger" onClick={() => removeRequisito(index)}>
                      <i className={`${Styles.btnExcluir} bi bi-trash text-light`}></i>
                    </Button>
                  )}
                </div>
              ))}
              <Button className={Styles.btnAdicionar} onClick={() => appendRequisito({ value: '' })}>+ Adicionar</Button>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Benefícios</Form.Label>
              {beneficiosFields.map((field, index) => (
                <div key={field.id} className="d-flex mb-2">
                  <Form.Control {...register(`beneficios.${index}.value`)} />
                  {index > 0 && (
                    <Button variant="danger" className="deletar-botao ms-2 bg-danger" onClick={() => removeBeneficio(index)}>
                      <i className={`${Styles.btnExcluir} bi bi-trash text-light`}></i>
                    </Button>
                  )}
                </div>
              ))}
              <Button className={Styles.btnAdicionar} onClick={() => appendBeneficio({ value: '' })}>+ Adicionar</Button>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Idiomas</Form.Label>
              {idiomasFields.map((field, index) => (
                <div key={field.id} className="d-flex mb-2 align-items-center">
                  <Form.Select  {...register(`idiomas.${index}.value`)}>
                    <option value="">Selecione um idioma</option>
                    {idiomas.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </Form.Select>
                  {index > 0 && (
                    <Button variant="danger" className="deletar-botao ms-2 bg-danger" onClick={() => removeIdioma(index)}>
                      <i className={`${Styles.btnExcluir} bi bi-trash text-light`}></i>
                    </Button>
                  )}
                </div>
              ))}
              <Button className={Styles.btnAdicionar} onClick={() => appendIdioma({ value: '' })}>+ Adicionar idioma</Button>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Área</Form.Label>
              {cursosFields.map((field, index) => (
                <div key={field.id} className="d-flex mb-2 align-items-center">
                  <Form.Select {...register(`cursoDesejado.${index}.value`)}>
                    <option value="">Selecione um curso</option>
                    {cursos.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </Form.Select>
                  {index > 0 && (
                    <Button variant="danger" className="deletar-botao ms-2 bg-danger" onClick={() => removeCurso(index)}>
                      <i className={`${Styles.btnExcluir} bi bi-trash text-light`}></i>
                    </Button>
                  )}
                </div>
              ))}
              <Button className={Styles.btnAdicionar} onClick={() => appendCurso({ value: '' })}>+ Adicionar curso</Button>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tipo</Form.Label>
              <Form.Select {...register('tipo')}>
                <option value="">Selecione</option>
                {tipos.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Função</Form.Label>
              <Form.Control  {...register('funcao')} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Remuneração (R$)</Form.Label>
              <Controller
              className={Styles.inputEditar} 
                name="remuneracao"
                control={control}
                render={({ field }) => (
                  <CurrencyInput
                    {...field}
                    className='form-control'
                    id="remuneracao"
                    prefix="R$ "
                    decimalsLimit={2}
                    decimalSeparator=","
                    groupSeparator="."
                    placeholder="R$ 0,00"
                    onValueChange={(value) => field.onChange(value)}
                  />
                )}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Carga Horária</Form.Label>
              <Form.Control
                type="text" 
                {...register('carga_horaria', { required: true })}
                placeholder="Digite a carga horária"
              />
              <div className="form-check d-flex align-items-center mt-3 gap-4">
                <div className="form-check">
                  <Form.Check
                    type="radio"
                    label="h/dia"
                    value="h/dia" 
                    {...register('unidade_carga')}
                    checked={watch('unidade_carga') === 'h/dia'}
                  />
                </div>
                <div className="form-check">
                  <Form.Check
                    type="radio"
                    label="h/semana"
                    value="h/semana" 
                    {...register('unidade_carga')}
                    checked={watch('unidade_carga') === 'h/semana'}
                  />
                </div>
              </div>
            </Form.Group>

            <Modal.Footer>
              <Button type="submit" className={Styles.buttonSave}>Salvar alterações</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalEditVaga;
