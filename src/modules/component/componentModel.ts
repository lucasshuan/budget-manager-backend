import { Component } from "@prisma/client";

export interface ICreateComponentDTO {
  name: string;
  description?: string;
  price: number;
  userId: number;
}

export interface IUpdateComponentDTO {
  id: number;
  name: string;
  price: number;
  description?: string;
}

export type ICreateComponentArgs = ICreateComponentDTO;

export type IUpdateComponentArgs = IUpdateComponentDTO;
