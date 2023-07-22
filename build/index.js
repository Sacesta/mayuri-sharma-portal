import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import http from 'http';
import { Server } from 'socket.io';
import path from "path";
//* Routers
import userRouter from './router/user.js';
import adminRouter from './router/admin.js';
import doctorRouter from './router/doctor.js';
import router from './router/router.js';
import conversationRouter from './router/conversation.js';
import messageRouter from './router/message.js';
import connection from './config/mongodbConnection.js';
const app = express();
dotenv.config();
/*
 *connect mongodb
 */
connection();
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
/*
 *Use Middlewares
 */
app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));
app.use(cors({
    origin: [
        'https://halo-doc.rigx.ml',
        'https://admin.rigx.ml',
        'https://doctor.rigx.ml',
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:5175',
    ],
}));
/*
 *API Routes]
 */
app.use('/api', router);
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);
app.use('/api/conversation', conversationRouter);
app.use('/api/message', messageRouter);
/*
 *Start Server
 */
app.use((req, res) => {
    res.send('Hey thats a 404');
});
/*
 *socket io
 */
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: [
            'http://localhost:5174',
            'http://localhost:5175',
            'https://halo-doc.rigx.ml',
            'https://doctor.rigx.ml',
        ],
        methods: ['GET', 'POST'],
    },
});
let users = [];
const addUser = (userId, socketId) => {
    const userExists = users.some((user) => user.userId === userId);
    if (!userExists) {
        users.push({ userId, socketId });
    }
};
const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};
const getUser = (userId) => {
    const user = users.find((data) => data.userId === userId);
    return user;
};
io.on('connection', (socket) => {
    socket.on('addUser', (userId) => {
        addUser(userId, socket.id);
    });
    io.emit('allUsers', users);
    socket.on('sendMessage', ({ senderId, recieverId, text }) => {
        const user = getUser(recieverId);
        io.to(user?.socketId).emit('getMessage', {
            senderId,
            text,
        });
    });
    socket.on('disconnect', () => {
        removeUser(socket.id);
    });
});
const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`Server Started on http://localhost:${port}`));
//# sourceMappingURL=index.js.map