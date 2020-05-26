import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import { router as loginRouter } from './routes/loginRoutes';
import { AppRouter } from './AppRouter';
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cookieSession({
    keys: ['dvcoad83$$'],
  })
);

app.use([loginRouter, AppRouter.getInstance()]);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
