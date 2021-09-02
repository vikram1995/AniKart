const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require("../models/test");
//descript test
describe('saving data', function(){

    //create test
    it('saving record to database',function(done){
        var char = new MarioChar({
            name: 'mario'
        })
        char.save().then(function(){
            assert(char.isNew === false);
            done();
        });
    });
    //next test
})