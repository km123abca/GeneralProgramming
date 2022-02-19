import os
from dotenv import load_dotenv
load_dotenv()
print("private key:"+os.getenv("PRIVATE_KEY"))