import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createUser/createMovieController";
import { CreateAluguelController } from "../modules/movies/useCases/createUser/createAluguelFilme/createAluguelFilmeController";
import { GetFilmeByReleaseDateController } from "../modules/movies/useCases/createUser/getFilmeByReleaseDate/getFilmeByReleaseDateController";

export const movieRoutes: Router = Router();

const createMovieController = new CreateMovieController();
const createAluguelController = new CreateAluguelController();
const getFilmeByReleaseDateController = new GetFilmeByReleaseDateController();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/aluguel", createAluguelController.handle);
movieRoutes.get("/filmes", getFilmeByReleaseDateController.handle);
