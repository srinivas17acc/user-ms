# user-ms

# Step help to run server
1. git clone 
2. npm install
3. npm run dev

# API's  need to pass the token

# 1. Register : localhost:5001/map/register    POST
    
    body {
      "name" : "srinivasan",
	  "email" : "srinivas@gmail.com",
	  "password": "srini13423"
    }


# 2. localhost:5001/map/login       POST
    
       body {
            "email" : "srinivas@gmail.com",
            "password": "srini13423"
       }
 
 
# 3. localhost:5001/map/profile    GET

      param : userId

# 4. localhost:5001/map/document   POST

   body  {
        "name" : "batchfile",
        "content" : "my test for document inside",
        "folderId" : "62c343a763f5d088d0ed1c3f"
    }

# 5. localhost:5001/map/folder   POST

      Body {   
	    "name" : "second folder"
      }

# 6. localhost:5001/map/folderread    GET      

    headers : token 

# 7. localhost:5001/map/movefolder    POST

   body  {
        "id": "62c31d13c00cedfebb3da59d",
        "folderId": "62c343a763f5d088d0ed1c3f"
    }