const client = require('../grpc');
const {Document} = require('../grpc/documents_pb');
const { errorResponse, successResponse } = require('../utils/response.utils');
const httpStatus = require('http-status');


const createDocument = async (req, res) => {
    try {
        const userId = res.locals.userId;
        const documentReq = new Document();
        documentReq.setUserid(userId);
        documentReq.setName(req.body.name);
        documentReq.setContent(req.body.content);
        documentReq.setFolderid(req.body.folderId);
   
       client.createDocument(documentReq, (err, grpcResponse) => {
           if (err) {
            return res.status(httpStatus.BAD_REQUEST).send(errorResponse(err));
           }
           console.log(`created succussfully `, grpcResponse);
           return res.status(httpStatus.OK).send(successResponse( [], message = 'User created successfully'));
       });
        
    } catch (err) {
        res.status(httpStatus.BAD_REQUEST).send(errorResponse(err.message));
    }

};

module.exports = {createDocument};