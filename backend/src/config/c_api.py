from const import Api
from src.routers import *

def config_api(api: Api):
    api.add_resource(SignUpRoute, SignUpRoute.url)
    api.add_resource(UserInformation, UserInformation.url)