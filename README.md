### This is a an application to get data from MS SQL Server to display on UI

  ##Back-end
  
  1- BE is .net core API (net5) with EF (data comes from tables directly not SP) (NEED TO CHANGE BASED ON REQUIREMNTS)
  
  2- RUN `dotnet restore` , `dotnet build` to create BD  
  
  3- You need to create Database and run scripts from `./assessment/Infrastructure/SQL Scripts' to create tables and seed data (Need to use DataMigration)
  
  4- Change `ConnectionStrings' 
  
  5- Run 'dotnet run' 
  
  https://localhost:5001/api/proposal
  
  ![image](https://user-images.githubusercontent.com/11220968/166942913-a1b5edde-048a-46b7-9e1f-71e23d50d058.png)

## FRONT-END

  1- Run `yarn install' to packages (You need to install yarn ➡️ https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
  2- change `front-end/package.json` proxy value to point to your local server like `https://localhost:5001`
  
![image](https://user-images.githubusercontent.com/11220968/166944201-cbe90efe-9024-4e01-9e19-73e666ad7608.png)

  3- run `yarn start'
  
  ### TODos
  1-Unit tests in BS 
  2-Mock Data in FE
  3-Units tests in FE with JEST
  4-Adding CSS
  

