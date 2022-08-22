import React, { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../../Services/Url"
import InputMask from "react-input-mask"
import CadastroForm from "./CadastroForm"

const Cadastro = () => {
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [cep, setCep] = useState("")
    const [bairro, setBairro] = useState("")
    const [tel, setTel] = useState("")
    const [cidade, setCidade] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [uf, setUf] = useState("")
  
    const onSubmitForm = (e) => {
        e.preventDefault()
        create()    
    }

    
    const checkCep = (e) => {
      const cep = e.target.value.replace(/\D/g, '')
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => {
        setBairro(res.data.bairro)
        setCidade(res.data.localidade)
        setLogradouro(res.data.logradouro)
        setUf(res.data.uf)
      })
      .catch((erro) => {
        console.log(erro)
      })
    }

    const create = () => {  
      const body = {
        nome: nome,
        cpf: cpf,
        cep: cep,
        tel: tel,
        bairro: bairro,
        cidade: cidade,
        logradouro: logradouro,
        uf: uf
      }
      axios.post(`${BASE_URL}/usuario/signup`, body)
      .then((res) => {
        alert(res.data)
        
      })
      .catch((erro) => {
        alert(erro.response.data.message)
      })
    }
    return(
        <div>
      <CadastroForm 
      nome={nome} setNome={setNome}
      cpf={cpf} setCpf={setCpf}
      cep={cep} setCep={setCep}
      bairro={bairro} setBairro={setBairro}
      tel={tel} setTel={setTel}
      cidade={cidade} setCidade={setCidade}
      logradouro={logradouro} setLogradouro={setLogradouro}
      uf={uf} setUf={setUf}
      onSubmitForm={onSubmitForm}
      checkCep={checkCep}
      />
        </div>
    )
}
export default Cadastro