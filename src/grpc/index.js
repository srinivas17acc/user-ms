const grpc = require('@grpc/grpc-js');
const {DocumentsServiceClient} = require('./proto/documents_grpc_pb');

    const cred = grpc.ChannelCredentials.createInsecure();
    const client = new DocumentsServiceClient('localhost:50051', cred);    
    
module.exports = client;   


