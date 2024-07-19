# Real-Time Chat Application

A simple real-time chat application built using Node.js, Express, and Socket.io. Each user is assigned a random color and can set their username, making it easier to identify different users in the chat.

## Features

- Real-time messaging
- Unique color for each user
- Customizable usernames

## Getting Started

### Prerequisites

- Node.js (v12.x or higher)
- npm (v6.x or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Kartik0211/real-time-chat.git
    cd real-time-chat
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the server:

    ```bash
    node server.js
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Open multiple tabs to test the real-time chat functionality.

## Usage

- Enter your username in the input field and click "Set Username".
- Type a message in the input field at the bottom and click "Send" to broadcast your message to all connected users.
- Each user will have a unique color assigned to their messages, making it easier to distinguish between different users.

## Project Structure
real-time-chat/
│
├── public/
│ ├── index.html
│ ├── styles.css
│ └── chat.js
│
├── server.js
├── package.json
└── README.md

### `public/index.html`

The HTML file that defines the structure of the chat interface.

### `public/styles.css`

The CSS file that contains the styles for the chat interface.

### `public/chat.js`

The JavaScript file that handles the client-side socket connections and DOM manipulation.

### `server.js`

The main server file that sets up the Express server and Socket.io connections.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)


