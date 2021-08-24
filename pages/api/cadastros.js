import {SiteClient} from 'datocms-client';

export default async function recebedorRequest(request, response){
  if(request.method === 'POST'){

    const TOKEN = "5c3d24b4d66b631a683cd56105eae9"
    const cliente = new SiteClient(TOKEN)
  
    const registro = await cliente.items.create({
      itemType: "1074365",
      ...request.body,
    })
  
    response.json({
      dados: "algum dado qualquer",
      peixe: "hello",
      novo: registro, 
    })
  }
}