from const import *
from src.models import BadTokensTable, UsersTable

def config_jwt(app: Flask, jwt: JWTManager):
    @jwt.token_in_blocklist_loader
    def check_if_token_revoked(jwt_header, jwt_payload: dict) -> bool:
        token = db.session.query(BadTokensTable.id).filter_by(jti=jwt_payload["jti"]).scalar()

        return token is not None
    
    @jwt.user_identity_loader
    def user_identity_lookup(user) -> int:
        return user.id

    @jwt.user_lookup_loader
    def user_lookup_callback(_jwt_header, jwt_data):
        identity = jwt_data["sub"]
        return UsersTable.query.filter_by(id=identity).one_or_none()
