import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

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
      <h1>Request Forbidden (Please login) <a href="/auth/login">login</a> </h1>
    </div>
  `);
};

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      return res.send(`
        <div>
          <div>You are logged in</div>
          <a href="/auth/logout">logout</a>
        </div>
      `);
    }

    return res.send(`
        <div>
          <div>You are not logged in</div>
          <a href="/auth/login">Login</a>
        </div>
      `);
  }

  @get('/protected')
  @use(requiresAuth)
  getProtected(req: Request, res: Response) {
    return res.send(`
      <div>Welcome to protected route, logged in user</div>
    `);
  }
}
