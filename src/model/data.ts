export type AsyncState<T> =
  | { status: 'loading' }
  | { status: 'error'; error: Error }
  | { status: 'data'; data: T }

export const AsyncState = {
  loading: <T>(): AsyncState<T> => ({ status: 'loading' }),
  error: <T>(error: Error): AsyncState<T> => ({ status: 'error', error }),
  data: <T>(data: T): AsyncState<T> => ({ status: 'data', data }),

  errorTry: <T>(error: unknown): AsyncState<T> => ({
    status: 'error',
    error:
      error instanceof Error ? error : new Error('An unknown error occurred'),
  }),
}
