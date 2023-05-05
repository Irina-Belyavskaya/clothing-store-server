
## Description

Fullstack application - online clothing store.

![client_1](https://user-images.githubusercontent.com/99917629/236480427-793449be-672f-418c-8435-c9dc93b50496.png)

Consists of 3 repositories - backend, client, admin.

## Links to repositories

[Backend application](https://github.com/Irina-Belyavskaya/clothing-store-server.git)

[Client application](https://github.com/Irina-Belyavskaya/clothing-store-client.git)

[Admin application](https://github.com/Irina-Belyavskaya/clothing-store-admin.git)

## Running the app

```bash
$ docker-compose up --build
```

---

## Basic settings

After building the app, you have access to:

* pgAdmin is running on port 82

* client is running on port 8000

* admin is running on port 8001

* server is running on port 3000


Firstly you need to go to pgadmin and sign in: 

* email: admin@admin.com
* password: root

![pgadmin_1](https://user-images.githubusercontent.com/99917629/236481193-00096576-0b21-4c3d-b0be-2d7439350dd8.png)

Then you need to register a server with

* the host - *postgres*  
* database - *final_db* 
* username - *postgres*  
* password - *postgres*

![pgadmin_3](https://user-images.githubusercontent.com/99917629/236481306-74507f40-0944-4189-901b-ad9cad378c86.png)

---

## Usage of application

Super admin is already exists in database. You can sign in with:

* email: *admin@admin.ru*
* password: *admin12345*

### Client

To be able to buy clothes, you need to register.

![client_19](https://user-images.githubusercontent.com/99917629/236481506-e245b26e-28d0-4066-8bd9-9df4d3c0fd25.png)

The following actions are available to you in your account:
* edit your personal information
* change password
* make orders
* chat GPT
* view cart

![client_8](https://user-images.githubusercontent.com/99917629/236482174-d8c4f4f1-55dc-4ea8-80dc-95b628d3ef69.png)

### Admin

To be able to manage an online store, you need to register.

![admin_1](https://user-images.githubusercontent.com/99917629/236482418-e1e0eefc-751b-4e6a-9b2c-aca32bf9c1fa.png)

For admin available: 
* manipulate with products
* manipulate with categories
* assign roles on users
* manipulate with roles
* diactivate users
* edit your personal information
* change password

![admin_2](https://user-images.githubusercontent.com/99917629/236482112-5f4c72f2-ceb8-46d1-bc06-48a26ecca4b5.png)

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```


## Authors

- [Irina Belyavskaya](https://github.com/Irina-Belyavskaya)

