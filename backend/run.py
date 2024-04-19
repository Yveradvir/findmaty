from makeapp import makeapp

app = makeapp()

if __name__ == "__main__":
    app.run("localhost", 4300, True)