import { Request } from 'express';

interface RequestWithUser extends Request {
  user?: string;
}

export default RequestWithUser;
