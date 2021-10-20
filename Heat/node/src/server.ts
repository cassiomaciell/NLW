import { httpServer } from "./app";

httpServer.listen(process.env.PORT || 4000, () => console.log(`Listening on port ${process.env.PORT || 4000}`));
