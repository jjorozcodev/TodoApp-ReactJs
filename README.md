# TodoApp-ReactJs
ToDo list app built with ASP.Net Core with React.js and .NET 7. Using SQL Server, EF and Web API in the backend.

Commands:
    - To Install EF for the projects (from root folder):
        dotnet tool install --global dotnet-ef 
    - To scaffold the dbcontext and entities classes:
        dotnet ef dbcontext scaffold "Server=(your_server);Database=(your_database);Integrated Security=true; Encrypt=false" Microsoft.EntityFrameworkCore.SqlServer -o (--name of the output folder for dbcontext and entities classes--)   
