from brownie import accounts,config,SimpleStorage
# import os

def deploy_simple_storage():
	#multiple ways to store and load accounts
	account=accounts[0]
	# account=accounts.load('firstaccount')
	# account=accounts.add(os.getenv("PRIVATE_KEY"))
	# account= accounts.add(config["wallets"]["from_key"])
	# print(account)
	simple_storage=SimpleStorage.deploy({"from":account})
	stored_value= simple_storage.retrieve()
	# print(stored_value)
	transaction=simple_storage.store(15,{"from":account})
	transaction.wait(1)
	updated_value=simple_storage.retrieve()
	print(updated_value)

def main():
	deploy_simple_storage()