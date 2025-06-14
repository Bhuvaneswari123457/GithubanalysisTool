

https://github.com/user-attachments/assets/d3e941ed-dcf6-413f-8119-2b1f814d7e36


# GitHub Insights Analyzer

A full-stack web application to analyze GitHub repositories, built with Angular (frontend) and Spring Boot (backend). It fetches and displays repository statistics, contributors, and other insights from GitHub.

---

## 🚀 Tech Stack

- **Frontend**: Angular 17+
- **Backend**: Spring Boot 3.2+
- **Build Tools**: Gradle (Backend), Angular CLI (Frontend)
- **Languages**: TypeScript, Java
- **API Used**: GitHub REST API v3

---



This project is a full-stack GitHub Insights Tool developed using Angular for the frontend and Spring Boot for the backend. The frontend allows users to input any public GitHub repository URL and view key repository data and contributor information. The backend exposes REST APIs that internally fetch data from the GitHub API using RestTemplate and serve it to the Angular frontend. The application is structured into two main folders: frontend (Angular app) and backend (Spring Boot app). The Angular frontend runs on port 4200 (ng serve) and the backend on port 8080 (./gradlew bootRun), with CORS configured to allow communication between them. The project can also be containerized using Docker and run together using Docker Compose for seamless deployment.


steps
git clone [https://github.com/Bhuvaneswari123457/GithubanalysisTool].



cd githubrepo-analyser

cd backend
./gradlew bootRun

This starts the Spring Boot application on http://localhost:8080

cd frontend
npm install
ng serve

This starts the Angular app on http://localhost:4200


4️⃣ Use the Application

    Open your browser and go to http://localhost:4200

    Enter a GitHub repository URL (e.g., https://github.com/angular/angular)

    Click the analyse button to see repository info and cont

https://github.com/user-attachments/assets/e10cdb94-b678-4870-a3c5-394aa6f5e658

ributor stats.




https://github.com/user-attachments/assets/cab8ae0f-686f-4dd1-b421-edb3257edc17







