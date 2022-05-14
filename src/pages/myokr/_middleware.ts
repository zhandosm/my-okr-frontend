import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@middlewares';

export const middleware = async (req: NextRequest, res: NextResponse) => await auth(req, res);
