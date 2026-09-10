import { NextResponse } from 'next/server';

/**
 * Central error -> HTTP response mapper for the API route handlers. Call it
 * from a route's `catch` block so error handling lives in one place:
 *
 *   try {
 *     ...
 *   } catch (err) {
 *     return handleError(err);
 *   }
 *
 * This is a STUB. Right now it always returns a generic 500. A real
 * implementation would inspect the error (validation vs. not-found vs.
 * conflict vs. unexpected) and choose an appropriate status code and shape.
 *
 * This is task A3. The write endpoints from A2 can't return sensible 400s and
 * 404s while every failure funnels into a 500.
 *
 * TODO (A3): map known error types to proper status codes (400, 404, 409, ...)
 * TODO (A3): avoid leaking internal error details in responses
 */
export function handleError(err: unknown): NextResponse {
  if (err instanceof ApiError) {
    return NextResponse.json({error: err.message }, {status: err.status });
  }

  console.error('Unhandled API error:', err);
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

//bad request - malformed request syntax, invalid request message framing, or deceptive request routing
export class ValidationError extends ApiError {
  constructor(message: string) {
    super(400, message);
    this.name = 'ValidationError';
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(404, message);
    this.name = 'NotFoundError'
  }
}

export class ConflictError extends ApiError {
  constructor(message: string) {
    super(409, message);
    this.name = 'ConflictError'
  }
}


