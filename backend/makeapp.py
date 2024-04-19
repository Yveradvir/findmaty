from const import *
from src.config import config_jwt, config_api, config_app

def makeapp() -> Flask:
    app = Flask(__name__) ; api = Api(app)

    config_app(app)

    CORS(app, origins=[
        "http://localhost:4200/"
    ], supports_credentials=True)
    jwtmanager.init_app(app)

    config_api(api)
    config_jwt(app, jwtmanager)

    return app 