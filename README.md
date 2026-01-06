

🌍 Wanderlust – Full Stack Web Application

Wanderlust is a full-stack web application inspired by Airbnb, built using Node.js, Express, MongoDB, and EJS.
The application allows users to register, log in, and explore travel listings, following an MVC architecture.

-----------------------------------------------

📌 Project Overview

The Wanderlust project is designed to demonstrate a complete backend + frontend web application using the MERN ecosystem (without React). It focuses on authentication, database integration, routing, and server-side rendering.

Users can create an account, log in securely, and interact with the application through dynamic EJS views.

-----------------------------------------------

✨ Features

       👤 User Registration (Sign Up)

       🔐 User Authentication (Login)

       🗄 MongoDB Atlas database integration

       🧩 MVC architecture (Models, Views, Controllers)

       🛣 Express routing

       🎨 Server-side rendering using EJS

       📂 Static assets management (CSS, JS, Images)

---------------------------------------------------------

🧠 Tech Stack
  Backend

     Node.js

     Express.js

    MongoDB (Atlas)

    Mongoose

 Frontend

    EJS (Embedded JavaScript Templates)

    HTML

    CSS

    JavaScript

----------------------------------------------------------

Tools & Utilities

  dotenv (environment variables)

  Middleware for request handling

  MVC folder structure

-----------------------------------------------------------

🏗️ Project Architecture

wanderlust-Project/
│
├── controllers/     # Business logic
├── models/          # Mongoose schemas
├── routes/          # Express routes
├── views/           # EJS templates
├── public/          # Static files (CSS, JS, images)
├── utils/           # Utility functions
│
├── app.js           # Main server file
├── middleware.js    # Custom middleware
├── schema.js        # Validation schemas
├── cloudConfig.js   # Cloud configuration (if enabled)
├── package.json

---------------------------------------------------------------

⚙️ Installation & Setup

1️⃣ Clone the repository

       git clone https://github.com/vasantharaju2004/wanderlust-Project.git
       
       cd wanderlust-Project

---------------------------------------------------------------

2️⃣ Install dependencies

       npm install

------------------------------------------------------------

3️⃣ Configure Environment Variables

       Create a .env file in the root directory:
       
       MONGO_URI=your_mongodb_atlas_connection_string
       PORT=3000

------------------------------------------------------------------

4️⃣ Run the application

       npm start


------------------------------------------------------------

5️⃣ Open in browser

       http://localhost:3000

------------------------------------------------------------

🔐 Authentication Flow

     Users can register with valid credentials
    
     Users can log in
    
     Authentication is handled using backend middleware
    
     User sessions are maintained securely

---------------------------------------------------------------

🚀 Learning Outcomes

     Through this project, I gained hands-on experience with:
    
     Building a full-stack web application
    
     Connecting Node.js with MongoDB Atlas
    
     Implementing authentication
    
     Structuring applications using MVC architecture
    
     Server-side rendering with EJS
    
     Managing routes, controllers, and models

---------------------------------------------------------------------

🔮 Future Enhancements

    Add property/listing creation
    
    Image uploads with Cloudinary
    
    Booking functionality
    
    User reviews and ratings
    
    Deployment to Render / Railway
    
    REST API version with React frontend

👨‍💻 Author

Vasanth Raju
GitHub: https://github.com/vasantharaju2004

📄 License

This project is for learning and educational purposes.
