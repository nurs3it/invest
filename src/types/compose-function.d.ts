declare module 'compose-function' {
  function compose<T extends (...args: any[]) => any>(...fns: T[]): T;
  export default compose;
}

