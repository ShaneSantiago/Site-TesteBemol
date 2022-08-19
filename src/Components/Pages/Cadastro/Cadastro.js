import React, { useState } from "react"
import { Container, Box, Typography,TextField, Button } from "@mui/material"
import axios from "axios"

const Cadastro = () => {
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [cep, setCep] = useState("")
    const [bairro, setBairro] = useState("")
    const [tel, setTel] = useState("")
    const [cidade, setCidade] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [uf, setUf] = useState("")

    const handleNome = (e) => {
      setNome(e.target.value)
    }

    const handleCpf = (e) => {
      setCpf(e.target.value)
    }
    const handleCep = (e) => {
      setCep(e.target.value)
    }
    const handleBairro = (e) => {
      setBairro(e.target.value)
    }
    const handleTel = (e) => {
      setTel(e.target.value)
    }
    const handleCidade = (e) => {
      setCidade(e.target.value)
    }
    const handleLogradouro = (e) => {
      setLogradouro(e.target.value)
    }
    const handleUf = (e) => {
      setUf(e.target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        create()    
    }

    
    const checkCep = (e) => {
      const cep = e.target.value.replace(/\D/g, '')
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => {
        console.log(res.data)
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
      console.log("Teste", body)
      axios.post("http://localhost:3003/usuario/signup", body)
      .then((res) => {
        alert(res.data)
        
      })
      .catch((erro) => {
        alert(erro.response.data.message)
      })
    }
    return(
        <div>
      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Cadastre-se
          </Typography>
          <Box component="form" onSubmit={onSubmitForm}>
            <TextField
              margin="normal"
              type="text"
              value={nome}
              onChange={handleNome}
              required
              fullWidth
              id="nome"
              label="Nome"
              name="nome"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              type="number"
              value={cpf}
              onChange={handleCpf}
              required
              fullWidth
              name="cpf"
              label="CPF"
              
              id="cpf"
              autoComplete="cpf"
            />

            <TextField
              margin="normal"
              type="number"
              value={tel}
              onChange={handleTel}
              required
              fullWidth
              name="tel"
              label="Telefone"
              
              id="tel"
              autoComplete="tel"
            />
            <TextField
              margin="normal"
              type="number"
              value={cep}
              onChange={handleCep}
              required
              fullWidth
              name="cep"
              placeholder="CEP"
              
              id="cep"
              autoComplete="cep"
              onBlur={checkCep}
            />

            <TextField
              margin="normal"
              type="text"
              value={bairro}
              onChange={handleBairro}
              required
              fullWidth
              name="bairro"
              placeholder="Bairro"
            
              id="bairro"
              autoComplete="bairro"
            />

            <TextField
              margin="normal"
              value={cidade}
              onChange={handleCidade}
              required
              fullWidth
              name="cidade"
              placeholder="CIdade"
              type="text"
              id="cidade"
              autoComplete="Cidade"
            />

            <TextField
              margin="normal"
              value={logradouro}
              onChange={handleLogradouro}
              required
              fullWidth
              name="logradouro"
              placeholder="Logradouro"
              type="text"
              id="logradouro"
              autoComplete="logradouro"
            />

            <TextField
              margin="normal"
              value={uf}
              onChange={handleUf}
              required
              fullWidth
              name="uf"
              placeholder="UF"
              type="text"
              id="uf"
              autoComplete="uf"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
            
          </Box>
        </Box>
      </Container>
        </div>
    )
}
export default Cadastro