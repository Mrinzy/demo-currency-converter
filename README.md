# **Demo Currency Converter App**

## **Technologies Used**
1.  NodeJS
2.  Express
3.  JWT


## **Prerequisites**
- Git
- Github
- NodeJS
- CLI


## **Prerequisites**
This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
v 9.6.1
v 22.4.1
```

## **Getting Started**
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/Mrinzy/demo-currency-converter.git
```

To install and set up the library, run:

```sh
$ node --version
$ npm install
```
## **Usage**
### Serving the app
```sh
$ npm start
```
### Running the tests

```sh
$ npm test
```

### API EndPoints

Please create a API Key via https://v6.exchangerate-api.com and replace the same in .env file for API_KEY

## Auth Service : POST Request - 
```sh
{{base_url}}/auth/login
```
## Sample Payload : 
```sh
{
	"username": "admin",
    "password" : "password123"
}
```
## Currency Convert Service : GET Request - 
```sh
{{base_url}}/currency/convert?from=USD&to=EUR&amount=100

Header - 

Authorization with Bearer token received from auth service call
x-api-key = DEMO_CLIENT

```

```sh
{{base_url}}    = http://localhost:3000/api
```