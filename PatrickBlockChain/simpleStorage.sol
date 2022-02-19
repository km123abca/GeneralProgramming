//SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
contract SimpleStorage{
	//address favoriteAddress=0x925e500b0c028664115087Af22465A2Bed8AeA52;    
    //bool favoriteBool = false;
    //string favoriteString ="String";
    //int256 favoriteInt =-5;
    //bytes32 favoriteBytes ="cat";


    //uint256 favoriteNumber =5;
    uint256 favoriteNumber =5;

    struct People{
        uint256 favoriteNumber;
        string name;
    }
    //People public person=People({favoriteNumber:34,name:"John"});
    //People[1] public people;//an array with only one element
    People[] public people;// a dynamic array

    mapping(string => uint256) public nameToFavoriteNumber;

    function store(uint256 _favoriteNumber) public {
    favoriteNumber = _favoriteNumber;
    }
    function retrieve() public view returns(uint256){
        return favoriteNumber;
    }

    function addPerson(string memory _name,uint256 _favoriteNumber) public{
        people.push(People({favoriteNumber:_favoriteNumber,name:_name}));
        // people.push(People(_favoriteNumber,_favoriteNumber));
        nameToFavoriteNumber[_name]=_favoriteNumber;
    }

}