declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      QUEUE_URL: string;
      QUEUE_NAME: string
    }
  }
}

export {}