import React from "react"
import { Container, Box, Typography,TextField, Button } from "@mui/material"

const CadastroForm = (props) => {
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
          <Box component="form" onSubmit={props.onSubmitForm}>
            <TextField
              margin="normal"
              type="text"
              value={props.nome}
              onChange={(e) => props.setNome(e.target.value)}
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
              value={props.cpf}
              onChange={(e) => props.setCpf(e.target.value)}
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
              onInput = {(e) =>{e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,11)
              }}
              value={props.tel}
              onChange={(e) => props.setTel(e.target.value)}
              required
              fullWidth
              name="tel"
              label="Telefone"
              inputProps={{ pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}" }}
              id="tel"
              autoComplete="tel"
            />
            <TextField
              margin="normal"
              type="number"
              onInput = {(e) =>{e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,8)
              }}
              value={props.cep}
              onChange={(e) => props.setCep(e.target.value)}
              required
              fullWidth
              name="cep"
              placeholder="CEP"
              
              id="cep"
              autoComplete="cep"
              onBlur={props.checkCep}
            />

            <TextField
              margin="normal"
              type="text"
              value={props.bairro}
              onChange={(e) => props.setBairro(e.target.value)}
              required
              fullWidth
              name="bairro"
              placeholder="Bairro"
            
              id="bairro"
              autoComplete="bairro"
            />

            <TextField
              margin="normal"
              value={props.cidade}
              onChange={(e) => props.setCidade(e.target.value)}
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
              value={props.logradouro}
              onChange={(e) => props.setLogradouro(e.target.value)}
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
              value={props.uf}
              onChange={(e) => props.setUf(e.target.value)}
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
export default CadastroForm