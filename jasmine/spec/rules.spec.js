describe("rules", function() {
    describe("Confirm isEmpty Function For 3 Cases Of Inputs", function() {
        it("should be able to check empty input", function() {
            expect(isEmpty("")).toEqual(true)
        });
        it("should be able to check non empty input", function() {
            expect(isEmpty("TEST")).toEqual(false)
        });
        it("should be able to handle undefined", function() {
            expect(isEmpty(undefined)).toEqual(true)
        });
    })
})