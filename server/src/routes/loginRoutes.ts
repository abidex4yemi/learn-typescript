import { Router, Request, Response, NextFunction } from 'express';
import { RequestWithBody } from './customInterfaces';

const router = Router();

const requiresAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send(`
    <div>
      <h1>Request Forbidden (Please login) </h1>
    </div>
  `);
};

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    return res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">logout</a>
      </div>
    `);
  }

  return res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  return res.redirect('/login');
});

router.get('/login', (req: Request, res: Response) => {
  return res.send(`
    <form method="post">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>

      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>

      <button>Submit </button>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = { loggedIn: true };
    return res.redirect('/');
  } else {
    return res.send('Invalid email and password');
  }
});

router.get('/protected', requiresAuth, (req: Request, res: Response) => {
  return res.send(`
    <div>Welcome to protected route, logged in user</div>
  `);
});

export { router };
