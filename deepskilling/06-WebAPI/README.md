# 06 - WebAPI Hands-On Labs

All 6 labs, each a standalone ASP.NET Core Web API (or console app for #6).

| Folder | Covers |
|---|---|
| `WebAPI-Handson-1` | RESTful basics: `ValuesController` with GET/POST/PUT/DELETE, action verbs, status codes |
| `WebAPI-Handson-2` | Swagger setup (Swashbuckle), `EmployeeController` renamed via `Route`, `ActionName` |
| `WebAPI-Handson-3` | Custom `Employee`/`Department`/`Skill` models, `CustomAuthFilter` (checks `Authorization: Bearer`), `CustomExceptionFilter` (logs + returns 500) |
| `WebAPI-Handson-4` | Full CRUD (`PUT`/`DELETE`) with id validation (`BadRequest` for invalid/missing ids) |
| `WebAPI-Handson-5` | CORS policy + JWT bearer authentication (`AuthController` issues tokens, `SecureController` requires them) |
| `WebAPI-Handson-6` | Kafka chat app: `Publisher` (producer) and `Subscriber` (consumer) console apps |

> **Important:** I don't have the .NET SDK in this sandbox (couldn't install it — Microsoft's
> package feeds aren't reachable from here), so none of this was actually compiled or run.
> The code is written carefully against each lab's spec, but **please build and run each one
> locally before you commit** — that's also where you'll grab your real screenshots/output.

## How to run each (1-5)
```bash
cd deepskilling/06-WebAPI/WebAPI-Handson-<N>
dotnet restore
dotnet run
```
Then open `https://localhost:<port>/swagger` (port is printed in the console, and set in
`Properties/launchSettings.json`) to try each endpoint interactively, or use Postman.

### Exercise 3 - testing the filters
- Call `GET /api/employee` **without** an `Authorization` header → expect `400 BadRequest`,
  `"Invalid request - No Auth token"`.
- Add header `Authorization: SomeValue` (no "Bearer") → expect `400`,
  `"Invalid request - Token present but Bearer unavailable"`.
- Add header `Authorization: Bearer xyz` → expect `200 OK` with the employee list.
- Call `GET /api/employee/throw` (with a valid Bearer header) → expect `500` with a JSON
  error body, and a new line appended to `exceptions.log` in the project folder.

### Exercise 5 - testing CORS + JWT
1. `POST /api/auth/token?userId=1&userRole=Admin` → returns a JWT.
2. `GET /api/secure/data` without the token → `401 Unauthorized`.
3. `GET /api/secure/data` with `Authorization: Bearer <token>` → `200 OK`.
4. From a browser app running on `http://localhost:5173` or `:3000`, a `fetch()` call to
   this API should succeed without a CORS error (any other origin will be blocked).

## Exercise 6 - Kafka chat app
This one needs a **local Kafka + Zookeeper install**, which isn't something I can spin up
or verify here (no package feed access, and it's a stateful service, not just a build step).

Setup (Windows, per the lab's reference links):
```bash
# Terminal 1 - start Zookeeper
zookeeper-server-start.bat ../../config/zookeeper.properties

# Terminal 2 - start Kafka broker
kafka-server-start.bat ../../config/server.properties

# Terminal 3 - create the topic
kafka-topics.bat --create --topic chat-messages --bootstrap-server localhost:9092
```

Then run the two .NET console apps in separate terminals:
```bash
cd Publisher && dotnet run     # type messages here
cd Subscriber && dotnet run    # see them appear here in real time
```

This demonstrates the "Chat Application" requirement — the Publisher is your chat client
sending messages, the Subscriber is another client receiving them via the Kafka topic.
