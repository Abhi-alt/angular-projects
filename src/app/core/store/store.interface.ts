export interface AppInitInterface {
  loading: boolean;
}

export interface AppState {
  app: AppInitInterface;
  user: UserDetailsInterface;
}

export interface UserDetailsInterface {
  email: string;
  user_id: string;
  access_token: string;
}
