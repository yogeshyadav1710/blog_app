/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APPWRITE_URL: string
    // more env variables...
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }