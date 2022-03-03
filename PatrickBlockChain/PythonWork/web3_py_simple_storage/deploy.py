from solcx import compile_standard,install_solc
install_solc("0.6.0")
import json
from web3 import Web3
import os
from dotenv import load_dotenv,dotenv_values
# load_dotenv() #this is no more requires since os.getenv("PRIVATE_KEY") is no more used

env_vars=dotenv_values(".env")
# print(env_vars["PRIVATE_KEY"])

with open("./SimpleStorage.sol","r") as file:
    simple_storage_file= file.read()
    # print(simple_storage_file)

compiled_sol = compile_standard(
    {
        "language":"Solidity",
        "sources":{"SimpleStorage.sol":{"content":simple_storage_file}},
        "settings":{
            "outputSelection":{
                "*":{"*":["abi","metadata","evm.bytecode","evm.sourceMap"]}
            }
        },
    },
    solc_version="0.6.0"
)
# print(compiled_sol)
with open("compiled_code.json","w") as file:
	json.dump(compiled_sol,file)

bytecode = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["evm"]["bytecode"]["object"]
abi =  compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["abi"]

#for connecting to ganache
w3 = Web3(Web3.HTTPProvider(env_vars["URL"]))
chain_id = int(env_vars["CHAIN_ID"])
my_address = env_vars["PUBLIC_KEY"]
private_key= env_vars["PRIVATE_KEY"]#os.getenv("PRIVATE_KEY")

#Create the contract in python
SimpleStorage = w3.eth.contract(abi=abi,bytecode=bytecode)
nonce = w3.eth.getTransactionCount(my_address)

transaction = SimpleStorage.constructor().buildTransaction({"gasPrice": w3.eth.gas_price, "chainId":chain_id,"from":my_address,"nonce":nonce})
# print(transaction)
signed_txn=w3.eth.account.sign_transaction(transaction,private_key=private_key)

print("deploying contract")
tx_hash =w3.eth.send_raw_transaction(signed_txn.rawTransaction)
tx_receipt=w3.eth.wait_for_transaction_receipt(tx_hash)
print("deployed....")

simple_storage = w3.eth.contract(address=tx_receipt.contractAddress,abi=abi)
# Call -> Simulate making the call and getting a return value
# Transact -> Actually make a state change


print('favorite Number:'+str(simple_storage.functions.retrieve().call()))
more_transactions="y"
num=15
while more_transactions=="y":
    nonce+=1
    print("updating contract with number="+str(num))
    store_transaction = simple_storage.functions.store(num).buildTransaction(
    	{"gasPrice": w3.eth.gas_price, "chainId":chain_id,"from":my_address,"nonce":nonce}
    	)	
    signed_store_txn=w3.eth.account.sign_transaction(store_transaction,private_key=private_key)
    send_store_tx =w3.eth.send_raw_transaction(signed_store_txn.rawTransaction)
    tx_receipt=w3.eth.wait_for_transaction_receipt(send_store_tx)
    print("updated")
    print('favorite number:'+str(simple_storage.functions.retrieve().call()))
    more_transactions=input("perform more transactions(y/n)")
    if more_transactions=="y":
        num=int(input("num?"))
