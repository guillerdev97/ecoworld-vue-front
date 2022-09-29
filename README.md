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
  git clone https://github.com/Equipo-Proton/justplay-crud-laravel.git
```

Create a local database in phpMyAdmin with user: root, password: "".
Name of the database: justplay.
Execute migration: "php artisant migration:fresh --seed".

Go to the project directory
```bash
  cd justplay-crud-laravel
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

