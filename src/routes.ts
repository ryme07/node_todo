import { Router } from "express";
import { Example } from "./controller/example.controller";

export const routes = (router: Router) => {
    router.get('/api/example', Example)
}