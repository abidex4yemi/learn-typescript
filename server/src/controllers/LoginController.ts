import { Request, Response } from 'express';
import { controller, get, post, bodyValidator } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
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
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLoginRouter(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email === 'hi@hi.com' && password === 'password') {
      req.session = { loggedIn: true };
      return res.redirect('/');
    } else {
      return res.send('Invalid email and password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    return res.redirect('/auth/login');
  }
}
