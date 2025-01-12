type ExtendedError = Error & { status: number };


const error = (status: number, message: string): ExtendedError => {

  const err = new Error(message) as ExtendedError;


  err.status = status;


  return err;
};

export default error;
