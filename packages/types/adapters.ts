import { FastifyRequest, FastifyReply } from "fastify";
import {  types } from "cassandra-driver";

export type t_row = types.Row;
export type t_long = types.Long;
export type t_request = FastifyRequest;
// http interfaces start
export type t_reply = FastifyReply;
// http interfaces end
