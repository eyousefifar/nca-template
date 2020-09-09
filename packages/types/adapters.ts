import { FastifyRequest, FastifyReply } from "fastify";
import {  types } from "cassandra-driver";

export type IRow = types.Row;
export type ILong = types.Long;
export type IRequest = FastifyRequest;
// http interfaces start
export type IReply = FastifyReply;
// http interfaces end