from dotenv import load_dotenv
from os     import path, getenv

load_dotenv(
    path.join(
        path.dirname(__file__), '..', '.env'
    )
)

env = getenv