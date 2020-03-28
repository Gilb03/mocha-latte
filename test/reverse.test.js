var reverse = require('../lib/reverse')
var expect = require ('chai').expect

describe("#reverse", function (){
    it("reverses the string given", function (){
        expect(reverse("hello")).to.equal("olleh")
    })
})