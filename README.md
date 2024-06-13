### Running the App locally

- **Clone the repository**

  ```sh
  git clone https://github.com/abhisheky97/todoList
  ```

- **Navigate to the project directory:**

  ```sh
  cd todoList
  ```

- **Install the dependencies:**

  ```sh
  npm install
  ```

- **Start the development server:**

  ```sh
  npm run dev
  ```

  The app should now be running at `http://localhost:5173`.

- **Stop the development server:**

  Press `Ctrl + C`

### Running the App With Docker

```sh
docker run -p 5000:5000 abhisheky97/todo-app:latest
```