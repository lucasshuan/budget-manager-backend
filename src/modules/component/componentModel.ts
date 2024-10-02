import { Component } from "@prisma/client";

export interface ICreateComponentDTO {
  name: string;
  description?: string;
  price: number;
  userId: number;
}

export interface IUpdateComponentDTO {
  name: string;
  price: number;
  description?: string;
}

export type ICreateComponentArgs = Pick<
  Component,
  "userId" | "name" | "price" | "description"
>;

export type IUpdateComponentArgs = Pick<
  Component,
  "id" | "name" | "price" | "description"
>;
