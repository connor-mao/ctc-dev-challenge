# Write-up

## 1. What did you build for Part B, and why that?

> I ran out of time and didn't get to this part. If I could add a feature though, I'd add a picture upload feature (similar to Beli) so you can remember what dishes were served at the restaurant and their presentation. It'd also help with remembering the restaurant setting and overall vibe/formalness.

## 2. What did you decide, and what did you rule out?

> The cascade of deleting visits after deleting a restaurant does make logical sense, but I think it'd be nice to keep those visits in memory in case you add the restaurant back - especially if the deletion was accidental. However, that would require somehow linking up the orphaned visits back to the restaurant when readded, which I honestly have no idea how to even start implementing.

## 3. Where did you cut corners?

> I defined the ConflictError class in errors.ts but never got to actually integrate  it, so I'd definitely implement that with more time.  
---

## Schema changes

> none

## How I verified this

> I used the given curl commands to test Part A - all of them worked correctly with the correct error codes. 

**Part A** - the contract table in CHALLENGE.md, every row including the error
cases:

```bash
# e.g.
curl -i http://localhost:3000/api/restaurants          # 200 + array
curl -i http://localhost:3000/api/restaurants/99999    # 404
curl -i http://localhost:3000/api/restaurants/abc      # 404
curl -i -X POST http://localhost:3000/api/restaurants \
  -H 'Content-Type: application/json' \
  -d '{"name":"Out Of Range","rating":6}'              # 400
```

## Known issues / what I'd do next

> I directly pushed A1 and A2 without creating a pull request because I only saw that instruction after. To be completely honest, most of the codebase was completely new to me so I spent a LONG (probably too much) time trying to comprehend how everything worked and figuring out how to even start. The struggle was worth it though, because it felt so rewarding when I actually started understanding parts of the codebase - it's somehow made me more excited to learn more about full stack development. 


