import express, { Application } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import httpStatus from 'http-status';
import AppError from './app/errors/AppError';

// import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express();

app.use(express.json());
//app.use(cors({ origin: '*' }));

//for productions { origin: '*' }
const allowedOrigins = [
  'https://tech-tip.onrender.com', // ✅ Correct frontend URL
  'https://techtip-backend.vercel.app/', // ✅ (Optional)
  //  for testing
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS policy error: This origin is not allowed'));
      }
    },
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders:
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  }),
);

// app.use(
//   cors({
//     origin: 'https://tech-tip.onrender.com/',
//     credentials: true, // Allows cookies and headers
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     allowedHeaders:
//       'Origin, X-Requested-With, Content-Type, Accept, Authorization',
//   }),
// );
//app.use(cors({ origin: config.Frontent_API }));

app.use('/api', router);
app.use('/', (req, res) => {
  if (req.path === '/') {
    res.status(httpStatus.OK).send('Welcome to  Application');
  } else {
    throw new AppError(httpStatus.NOT_FOUND, 'This routes is not found');
  }
});

// Catch-all middleware for handling API not found
app.use((req, res) => {
  res.status(httpStatus.NOT_FOUND).send('API not found');
});
// app.use((req, res, next) => {
//   res.status(404).json({
//     success: false,
//     message: 'Route not found',
//   });
// });

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
