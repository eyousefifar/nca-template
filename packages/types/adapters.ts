import { FastifyRequest, FastifyReply } from "fastify";
import {  types } from "cassandra-driver";

export type TRow = types.Row;
export type TLong = types.Long;
export type TRequest = FastifyRequest;
// http interfaces start
export type TReply = FastifyReply;
// http interfaces end
