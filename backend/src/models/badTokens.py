from . import db, InitialMixin


class BadTokensTable(db.Model, InitialMixin):
    __tablename__ = 'badtokens'

    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(36), nullable=False, index=True)
    type = db.Column(db.String(36), nullable=False)

    def __init__(self, **kwargs) -> None:
        super().__init__(**kwargs)