const client = require('../grpc');
const {Document, FolderAddReq, FoldersReadReq} = require('../grpc/documents_pb');
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
           return res.status(httpStatus.OK).send(successResponse( [], message = 'Document created successfully'));
       });
        
    } catch (err) {
        res.status(httpStatus.BAD_REQUEST).send(errorResponse(err.message));
    }

};


const createFolder = async (req, res) => {
    try {
        const userId = res.locals.userId;
        const folderReq = new FolderAddReq();
        folderReq.setName(req.body.name);
        folderReq.setUserid(userId);
   
        client.addFolder(folderReq, (err, grpcResponse) => {
            if (err) {
                return res.status(httpStatus.BAD_REQUEST).send(errorResponse(err));
            }
            console.log(`created succussfully `, grpcResponse);
            return res.status(httpStatus.OK).send(successResponse( [], message = 'Folder created successfully'));       
        
        });
        
    } catch (err) {
        res.status(httpStatus.BAD_REQUEST).send(errorResponse(err.message));
    }

};


const readFolder = async (req, res) => {
    try {
        const userId = res.locals.userId;
        const folderReq = new FoldersReadReq();
        folderReq.setUserid(userId);
   
        client.readFolders(folderReq, (err, grpcResponse) => {
            if (err) {
                return res.status(httpStatus.BAD_REQUEST).send(errorResponse(err));
            }
            console.log(`Folder list  `, grpcResponse);
            return res.status(httpStatus.OK).send(successResponse( grpcResponse.array, message = 'Folder list get successfully'));
        });
        
    } catch (err) {
        res.status(httpStatus.BAD_REQUEST).send(errorResponse(err.message));
    }

};


module.exports = {createDocument, createFolder, readFolder};