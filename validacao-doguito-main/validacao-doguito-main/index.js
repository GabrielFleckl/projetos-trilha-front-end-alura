function validaDataNascimento (input) {
  const dataRecebida = new Date(input.value)
  let mensagem = ''

  maiorQue18(dataRecebida)
  mensagem

  input.setCustomValidity(mensagem) 

}

function maior18 (data){
  const dataAtual = new Date()
  const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMouth(), data.getUTCDate())

  return dataMais18 <= dataAtual
}