export interface LoginDTO {
  email: string;
  password: string;
}

export interface RegisterDTO extends LoginDTO {}
