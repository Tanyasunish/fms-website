/// <reference types="vite/client" />

interface AppConfig {
  readonly enquiryPhoneNumber?: string;
}

interface Window {
  APP_CONFIG?: AppConfig;
}

interface ImportMetaEnv {
  readonly VITE_ENQUIRY_PHONE_NUMBER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
