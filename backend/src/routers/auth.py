from const import *


class SignUpRoute(Resource):
    url = "/auth/signup"
    
    def post(self) -> Response:
        data = request.get_json()
        