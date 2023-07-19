/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />

interface ImportMetaEnv {
  readonly SENDER: string
  readonly RECEIVER: string
  readonly SENDER_PASSWORD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
