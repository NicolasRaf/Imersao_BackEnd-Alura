import { MongoClient } from 'mongodb'; 

export default async function connectToBank(stringConnection) { 
    let mongoClient; 

    try {
        mongoClient = new MongoClient(stringConnection) ; 
        console.log('Conectando ao cluster do banco de dados...'); 
        await mongoClient.connect(); 
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient; 

    } catch (erro) { 
        console.error('Falha na conexao com o banco!', erro); 
        process.exit();
    }
}