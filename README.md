## goMe Project

Steps to run this project:

1. Run `npm watch` command

---

## CLI

1. step - Generate entity
```
scaffold create:entity --name=user
```

2. step - Generate model
```
scaffold create:interface --name=add-user --path=models
```

3. step - Generate service
```
scaffold create:service --name=add-user
```

4. step - Generate ORM to entity
```
scaffold create:adapter-orm --name=user --orm=mongoose
```

5. step - Generate controller
```
scaffold create:controller --name=add-user
```
