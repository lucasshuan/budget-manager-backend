import { Component } from "@prisma/client";

export interface ICreateComponentDTO {
  name: string;
  description?: string;
  userId: number;
}

export interface IUpdateComponentDTO {
  name: string;
  description?: string;
}
