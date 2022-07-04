const grpc = require('@grpc/grpc-js');
const {DocumentsServiceClient} = require('./documents_grpc_pb');
//const {Document, DocumentsGetByUserReq, FolderAddReq, FoldersReadReq} = require('./documents_pb');


// function getDocumentsByUserId(client) {
//     console.log('do greet invoked');
//     const req = new DocumentsGetByUserReq().setUserid('12345');
//     console.log('teststsets');
//     client.getDocuments(req, (err, res) => {
//         if (err) {
//             return console.log(err, 'own error ..');
//         }

//         console.log(res, 'my own ----------------------------> ');
//         console.log(`Greet : ${res}`);
//     });
// }

// function createDocument(client) {
    
//      const documentReq = new Document();
//      documentReq.setUserid('1234');
//      documentReq.setName("nivas");
//      documentReq.setContent("first content");
//      documentReq.setFolderid("432");

//     client.createDocument(documentReq, (err, res) => {
//         if (err) {
//             return console.log(err, 'create docs error');
//         }
//         console.log(`created succussfully `, res);
//     });
// }

// function addFolders(client) {
//       const folderReq = new FolderAddReq();
//          folderReq.setName('folder2');
//          folderReq.setUserid('1234');
//    console.log(folderReq, 'test');

//     client.addFolder(folderReq, (err, res) => {
//         if (err) {
//             return console.log(err, 'folder error ..');
//         }

//         console.log(res, 'my own ----------------------------> ');
//         console.log(`Greet : ${res}`);
//     });
// }

// function readFolders(client) {
   
//      const folderReq = new FoldersReadReq();
//             folderReq.setUserid('1234');

//     client.readFolders(folderReq, (err, res) => {
//         if (err) {
//             return console.log(err, 'folder error ..');
//         }

//         console.log(res, 'read folder test---->');
//         console.log(`Greet : ${res}`);
//     });

// }


    const cred = grpc.ChannelCredentials.createInsecure();
    const client = new DocumentsServiceClient('localhost:50051', cred);    
    
module.exports = client;   


