import { AppDataSource } from "./data-source";
import * as express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { userRouter} from "./routes/user.routes";
import { movieRouter} from "./routes/movie.routes";
import "reflect-metadata";
import { error } from "console";

dotenv.config()

const app = express();
app.use(express.json());
app.use(errorHandler);

const {PORT = 3000 } = process.env;
app.use("/auth", userRouter);
app.use("/api", movieRouter);

app.get("*", (req: Request, res: Response) => {
    res.status(505).json({ message: "Bad Request" });
});

AppDataSource.initialize()
    .then(async () => {
        app.listen(PORT, ()=> {
            console.log(`Server is running on http://localhost: ${PORT} `);
        });
        console.log("Data Source has been inited!");
    })
    .catch((error) => console.log(error));