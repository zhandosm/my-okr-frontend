import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { noAuth } from '@middlewares';

export const middleware = async (req: NextRequest, res: NextResponse) => await noAuth(req, res);
