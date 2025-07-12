// Basic Hardcoded Authentication Middleware
const BASIC_AUTH_USERS = {
    'admin': 'admin',
    'user': 'user'
}

module.exports = function (req, res, next) {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Basic ')) {

      return res.status(401).json({
        success: false,
        error: 'Authentication required',
        message: 'Please provide valid credentials'
      });
    }
    
    try {
      const base64Credentials = authHeader.split(' ')[1];
      const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
      const [username, password] = credentials.split(':');
      
      // Check against hardcoded multiple users -- NOT PROD GRADE
      const isValidUser = BASIC_AUTH_USERS[username] === password;
      
      if (!isValidUser) {
        return res.status(401).json({
          success: false,
          error: 'Invalid credentials',
          message: 'Username or password is incorrect'
        });
      }
      
      req.user = { username };
      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        error: 'Authentication failed',
        message: 'Invalid authentication format'
      });
    }
  };