<a id="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/naufandarmawan/mamarecipe-be">
    <img src="./screenshots/logo.svg" alt="Logo" width="200" height="auto">
  </a>

  <h3 align="center">MamaRecipe</h3>
  <p align="center">
    Recipe Sharing Platform (Web Application) 
  </p>
</div>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#project-structure">Project Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#development">Development</a></li>
        <li><a href="#production">Production</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#related-projects">Related Projects</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



## About The Project

Inspired by a 3,300% increase in Google searches for food menu inspiration in Indonesia over the past five years, MamaRecipe is a recipe-sharing platform that allows users to search, sort, and share recipes. This project aims to provide users with an accessible and interactive culinary resource.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Express
* PostgreSQL
* JWT
* Bcrypt
* Multer
* Cloudinary
* Git
* Vercel
* Postman

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Features

* Account creation
* Search and view recipe details
* Like and save recipes
* Create, edit, and delete recipes,
* Edit user profiles.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Project Structure

```
└── 📁mamarecipe-be
    └── .env.example
    └── .gitignore
    └── index.js
    └── package-lock.json
    └── package.json
    └── 📁prisma
        └── schema.prisma
    └── README.md
    └── 📁src
        └── 📁controllers
            └── auth.js
            └── payment.js
            └── recipes.js
            └── upload.js
            └── users.js
        └── 📁herlpers
            └── auth.js
            └── common.js
        └── 📁middlewares
            └── auth.js
            └── upload.js
        └── 📁routes
            └── auth.js
            └── index.js
            └── payment.js
            └── recipes.js
            └── upload.js
            └── users.js
        └── 📁utils
            └── cloudinary.js
    └── vercel.json
    └── yarn.lock
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started

To set up and run the project locally, follow these steps:

### Prerequisites

Before starting, make sure you have npm installed. You can install it globally using:

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/naufandarmawan/mamarecipe-be.git
   ```
2. Navigate into the project directory:
   ```sh
   cd mamarecipe-be
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables:
   * Create a `.env` file in the root directory of your project.
   * Add your API key to the `.env` file:
   ```js
   PORT=4000
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=your_db_host
   DB_NAME=your_db_name
   DB_PORT=5432
   SECRET_KEY_JWT=your_secret_key_jwt
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   SITE=http://localhost:4000
   ```
   * Replace the placeholder values with your actual environment variables.

### Development

5. Start the development server:
   ```sh
   npm run dev
   ```

### Production

6. Build the project:
   ```sh
   npm run build
   ```
7. Start the production server:
   ```sh
   npm run start
   ```

By following these steps, you'll have everything set up to run the project locally on your machine.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Related Projects

Here are some related projects and resources you may find helpful. These include demo links, backend links, and other projects from my portfolio:

* MamaRecipe Backend Demo: [Backend Demo](https://pijar-mama-recipe.vercel.app/)
* MamaRecipe Backend Postman Documentation: [Postman Documentation Link](https://documenter.getpostman.com/view/7675329/2sA3QqerrC)
* MamaRecipe Frontend Demo: [Demo Link](https://mamarecipe-fe-naufan.vercel.app/)
* MamaRecipe Frontend Repository: [Repository Link](https://github.com/naufandarmawan/mamarecipe-fe)

### My Other Portfolios

<table style="width: 100%; border-collapse: collapse;">
<colgroup>
    <col style="width: 33.33%;">
    <col style="width: 33.33%;">
    <col style="width: 33.33%;">
  </colgroup>
  <tr>
    <th style="padding: 8px; text-align: center; border: 1px solid #ddd;">Peworld Web App</th>
    <th style="padding: 8px; text-align: center; border: 1px solid #ddd;">Peworld Mobile App</th>
    <!-- <th style="padding: 8px; text-align: center; border: 1px solid #ddd;">MamaRecipe Web App</th> -->
    <th style="padding: 8px; text-align: center; border: 1px solid #ddd;">Blanja Web App</th>
  </tr>
  <tr>
    <td style="padding: 8px; text-align: left; border: 1px solid #ddd;"><a href="https://github.com/naufandarmawan/peworld-fe"><img src="./screenshots/other-portfolio-1.png" alt="Screenshot 1" style="max-width: 100%; height: auto;"></a></td>
    <td style="padding: 8px; text-align: left; border: 1px solid #ddd;"><a href="https://github.com/naufandarmawan/peworld-mobile"><img src="./screenshots/other-portfolio-4.png" alt="Screenshot 2" style="max-width: 100%; height: auto;"></a></td>
    <!-- <td style="padding: 8px; text-align: left; border: 1px solid #ddd;"><a href="https://github.com/naufandarmawan/mamarecipe-fe"><img src="./screenshots/other-portfolio-2.png" alt="Screenshot 3" style="max-width: 100%; height: auto;"></a></td> -->
    <td style="padding: 8px; text-align: left; border: 1px solid #ddd;"><a href="https://github.com/naufandarmawan/blanja-fe"><img src="./screenshots/other-portfolio-3.png" alt="Screenshot 4" style="max-width: 100%; height: auto;"></a></td>
  </tr>
  <!-- Repeat similar rows for more screenshots -->
</table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


-----


<p align="center" id="contact">© MamaRecipe 2024</p>
<p align="center">
<a href="https://github.com/naufandarmawan/"> Naufan Darmawan </a> - <a href="mailto:naufandarmawan@gmail.com">naufandarmawan@gmail.com</a> - <a href="https://www.linkedin.com/in/naufandarmawan/">LinkedIn</a>
</p>
