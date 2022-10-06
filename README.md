Eco World
============


***


## Contexto del proyecto

Requisitos mínimos solicitados:

Frontend:

    El uso de un framework no es obligatorio pero si recomendado (En el caso de no usar un framework se deberá utilizar un enpaquetador Ej: Parcel)
    El frontend realizará solicitudes a la API REST
    Desde la parte del front se tiene que poder realizar las acciónes de un CRUD

​

Backend:

    La parte de backend se debe realizar con JAVA y utilizando Springboot
    Se deberá contruir una API REST para que el front pueda consumir lo datos.
    La API debe permitir realizar un CRUD

​

Extra:

    Implementar la posibilidad de realizar una busqueda de un dato en concreto con un buscador


## Description


## Functional Requirementes


## Not Functional Requirements


## Presentation:

<ul>
<li>GitHub link.</li>
<li>Readme with:</li>
    <ul>
        <li>Briefing and project explanation.</li>
        <li>Diagrams.</li>
        <li>Sketch - Mockup - Prototype.</li>
    </ul>
<li>Google Slides presentation.</li>
<li>Demo and code review</li>

</ul>


***
***


## Run Locally

Clone the project
```bash
  git clone https://github.com/guillerdev97/ecoworld-vue-front.git
```

Create a local database in phpMyAdmin with user: root, password: "".
Name of the database: products.
Execute migration: "php artisant migration:fresh --seed".

Go to the project directory
```bash
  cd ecoworld-vue-front
```

Install dependencies
```bash
  composer update
  npm install
```

Start the server
```bash
  run Apache and MySQL server in XAMPP
  php artisan serve
  npm run dev
```

## Work methodology

- TDD
- Agile
- Scrum


## Versions
Main branch
Develop branch

#### Tools and technologies used

| Front End | Back End | Diseño y organización | 
| :---: | :---: | :---: |
| <img src="https://github.com/Yelose/Yelose/blob/main/img/vscode.png"> <img src="https://github.com/Yelose/Yelose/blob/main/img/html.png"> <img src="https://github.com/Yelose/Yelose/blob/main/img/bootstrap.png">  <img src="https://github.com/Yelose/Yelose/blob/main/img/css.png">  | <img src="data:image/png;base64,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">    <img src="https://github.com/Yelose/Yelose/blob/main/img/mysql.png"> | <img src="https://github.com/Yelose/Yelose/blob/main/img/figma.png"> <img src="https://github.com/Yelose/Yelose/blob/main/img/jira.png"> <img src="https://github.com/Yelose/Yelose/blob/main/img/google.png">  |


## Documentation

- [Presentation PPTX](https://docs.google.com/presentation/d/1Zc2Ych_LMoZlomHBk4lKgpdKfuSpdepYfNJxhFhCJbE/edit?usp=sharing)
- [User Stories](https://docs.google.com/document/d/1bu1sXLucbUUZImvh2dEEr0OyieFw_CcoXwYy5K9okBg/edit?usp=sharing)
- [Prototype](https://www.figma.com/file/SsQaavzZ0BiLUkSxbW59qx/Eco-World?node-id=0%3A1)
- [UserFlow Figma](https://www.figma.com/file/SsQaavzZ0BiLUkSxbW59qx/Eco-World?node-id=16%3A4)
<img src="src/assets/img/userflow-eco-world.jpg" style="margin-left: 30px; width: 30%;">


## Authors

| Nombre | Roll | <img src="https://github.com/Yelose/Yelose/blob/main/img/github.png" width="30px" height="30px"> |
| :--- | :---: | :---: |
| Guillermo García | Software Developer | https://github.com/guillerdev97 |


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
